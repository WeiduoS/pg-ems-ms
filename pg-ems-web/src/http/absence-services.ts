import './http';
import http from './http';
import Attendance from '../model/Attendance';
import Absence from '../model/Absence';


export const getAbsenceByEmployeeId = (employeeId: string) => {
    return http.request({
        url: '/absent_request/employee',
        params: {
            employee_id: employeeId,
        },
        method: 'get'
    });
};

export const getAbsenceByManagerId = (managerId: string) => {
    return http.request({
        url: '/absent_request/manager',
        params: {
            manager_id: managerId,
        },
        method: 'get'
    });
};

export const deleteAbsenceByManagerId = (absence: Absence) => {
    return http.request({
        url: '/absent_request/delete',
        method: 'post',
        data: absence
    });
};

export const addOrUpdateAbsence = (absence: Absence) => {
    return http.request({
        url: 'absent_request/update',
        method: 'post',
        data: absence
    });
};


