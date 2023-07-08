import { createHashRouter } from 'react-router-dom';
import DashboardPage from '../page/DashboardPage';
import AttendancePage from '../page/AttendancePage';
import LoginPage from '../page/LoginPage';
import ProfilePage from '../page/ProfilePage';
import ProjectFeedBackPage from '../page/ProjectFeedBackPage';
import ProjectPage from '../page/ProjectPage';
import RequestPage from '../page/RequestPage';
import React from 'react';

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

export default router;
