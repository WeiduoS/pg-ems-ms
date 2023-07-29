import axios from 'axios';
import Project from '../model/Project';

const http = axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: 'http://ec2-54-152-254-1.compute-1.amazonaws.com:8080',
    timeout: 5000
});

http.interceptors.request.use((config) => {
    return config;
    },(error) => {
    return Promise.reject(error);
});

http.interceptors.response.use((response) => {
    return response;
},(error) => {
    return Promise.reject(error);
});

export const getProjectListByUser = () => {
    return http.request({
        url: '/project/all',
        method: 'get'
    });
};


export default http;
