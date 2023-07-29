import { createHashRouter } from 'react-router-dom';
import DashboardPage from '../page/dashboard/DashboardPage';
import AttendancePage from '../page/attendance/AttendancePage';
import LoginPage from '../page/LoginPage';
import ProfilePage from '../page/profile/ProfilePage';
import ProjectFeedBackPage from '../page/feedback/ProjectFeedBackPage';
import ProjectPage from '../page/project/ProjectPage';
import MRequestPage from '../page/request/MRequestPage';
import React from 'react';
import HRequestPage from '../page/request/HRequestPage';

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
        path: '/mrequest',
        element: <MRequestPage/>,
    },
    {
        path: '/hrequest',
        element: <HRequestPage/>,
    },
]);

export default router;
