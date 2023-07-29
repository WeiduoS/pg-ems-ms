import './http';
import http from './http';
import Project from '../model/Project';
import Profile from '../model/Profile';

export const addOrUpdateProfile = (profile: Profile) => {
    return http.request({
        url: 'employee/update',
        method: 'post',
        data: profile
    });
};


export const getCurrentUser = () => {
    return http.request({
        url: 'authentication/user',
        method: 'get',
    });
};

