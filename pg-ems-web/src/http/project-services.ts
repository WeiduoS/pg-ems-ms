import './http';
import http from './http';
import Project from '../model/Project';


export const getProjectList = () => {
    return http.request({
        url: '/project/all',
        method: 'get'
    });
};

export const getProjectListByEmployeeId = (employeeId: string) => {
    return http.request({
        url: '/project/employee',
        params: {
            employee_id: employeeId,
        },
        method: 'get'
    });
};

export const getProjectListByManagerId = (managerId: string) => {
    return http.request({
        url: '/project/manager',
        params: {
            manager_id: managerId,
        },
        method: 'get'
    });
};

export const addOrUpdateProjects = (projects: Project[]) => {
    return http.request({
        url: 'project/update',
        method: 'post',
        data: projects
    });
};
