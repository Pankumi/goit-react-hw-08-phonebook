import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// встановлюю токен
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// видалю токен
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// User:
export const register = createAsyncThunk(
  'user/register',
  async (credentials, thunkApi) => {
    try {
      const {data} = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.message,
        Notiflix.Notify.failure('This email is already registered')
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const {data} = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message,
        Notiflix.Notify.warning('Something went wrong!')
      );
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout', 
  async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.message,
      Notiflix.Notify.warning('Something went wrong!')
    );
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const {data} = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message,
        Notiflix.Notify.warning('Something went wrong!')
      );
    }
  }
);
