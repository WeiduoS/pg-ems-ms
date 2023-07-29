import './http';
import http from './http';
import Attendance from '../model/Attendance';


export const getAttendanceByEmployeeId = (employeeId: string) => {
    return http.request({
        url: '/attendance_record/employee',
        params: {
            employee_id: employeeId,
        },
        method: 'get'
    });
};

export const addOrUpdateAttendance = (attendance: Attendance) => {
    return http.request({
        url: 'attendance_record/update',
        method: 'post',
        data: attendance
    });
};

