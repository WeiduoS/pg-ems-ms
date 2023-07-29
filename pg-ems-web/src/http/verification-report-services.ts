import './http';
import http from './http';
import Attendance from '../model/Attendance';
import Absence from '../model/Absence';
import Project from '../model/Project';
import VerificationReport from '../model/VerificationReport';


export const getAllVerificationReports = () => {
    return http.request({
        url: '/verification_report/all',
        method: 'get'
    });
};

export const addOrUpdateVerificationReport = (verificationReport: VerificationReport) => {
    return http.request({
        url: 'verification_report/update',
        method: 'post',
        data: verificationReport
    });
};


export const deleteVerificationReport = (verificationReport: VerificationReport) => {
    return http.request({
        url: 'verification_report/delete',
        method: 'post',
        data: verificationReport
    });
};



