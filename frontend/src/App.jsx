import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import SignupFormModal from './components/SignupFormModal/SignupFormModal.jsx';
import LoginFormModal from './components/LoginFormModal/LoginFormModal.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import * as sessionActions from './store/session.js';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <h1>Welcome!</h1>
      },
      {
        path: 'login',
        element: <LoginFormModal />
      },
      {
        path: 'signup',
        element: <SignupFormModal />
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
