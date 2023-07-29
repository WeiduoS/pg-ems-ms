import './http';
import http from './http';
import Project from '../model/Project';
import Profile from '../model/Profile';

export const getProfileByEmployeeId = (employeeId: string) => {
    return http.request({
        url: '/employee/' + employeeId,
        method: 'get'
    });
};

export const addOrUpdateProfile = (profile: Profile) => {
    return http.request({
        url: 'employee/update',
        method: 'post',
        data: profile
    });
};

