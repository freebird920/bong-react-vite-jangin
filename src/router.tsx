import { createBrowserRouter } from 'react-router-dom';

// import routes
import HomePage from './app/page';
import ProfilePage from './app/profile/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/shit',
    element: (
      <ProfilePage>
        <h1>씨발</h1>{' '}
      </ProfilePage>
    ),
  },
]);
