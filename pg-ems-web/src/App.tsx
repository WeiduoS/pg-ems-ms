import React from 'react';
import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './page/DashboardPage';
import LoginPage from './page/LoginPage';
import ProjectFeedBackPage from './page/ProjectFeedBackPage';
import ProjectPage from './page/ProjectPage';
import RequestPage from './page/RequestPage';
import AttendancePage from './page/AttendancePage';
import ProfilePage from './page/ProfilePage';


const router = createHashRouter([
    {
        path: '/',
        element: <DashboardPage/>,
    },
    {
        path: '/attendance',
        element: <AttendancePage/>,
    },
    {
        path: '/login',
        element: <LoginPage/>,
    },
    {
        path: '/profile',
        element: <ProfilePage/>,
    },
    {
        path: '/project-feedback',
        element: <ProjectFeedBackPage/>,
    },
    {
        path: '/project',
        element: <ProjectPage/>,
    },
    {
        path: '/request',
        element: <RequestPage/>,
    },
])
function App() {
  return (
    <div id={'app-container'}>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
