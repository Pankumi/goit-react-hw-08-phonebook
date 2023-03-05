import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { userReducer } from './user/userSlise';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedReducer = persistReducer(
  { key: 'user', storage, whitelist: ['token'] },
  userReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
