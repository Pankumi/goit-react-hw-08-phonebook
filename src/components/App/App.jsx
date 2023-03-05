import React, { lazy, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Layout } from 'pages/Layout/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/user/operations';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage.jsx'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage.jsx'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="login" component={<ContactsPage />} />
              }
            />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;