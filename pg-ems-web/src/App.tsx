import React, { useEffect } from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import router from './route/Routes';
import { getProjectList, getProjectListByEmployeeId, getProjectListByManagerId } from './http/project-services';
import { addProjects, addProjectsByEmployeeId } from './store/slices/project-slice';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileByEmployeeId } from './http/profile-services';
import { setOriginalProfile, setProfile } from './store/slices/profile-slice';
import { getAttendanceByEmployeeId } from './http/attendance-services';
import { RootState } from './store/store';
import { addAttendanceByEmployeeId } from './store/slices/attendance-slice';
import { getAbsenceByEmployeeId, getAbsenceByManagerId } from './http/absence-services';
import { addAbsenceByEmployeeId, addAbsenceByManagerId } from './store/slices/absence-slice';
import { getAllVerificationReports } from './http/verification-report-services';
import { addVerificationReports } from './store/slices/verifiction-report-slice';
import { getCurrentUser } from './http/user-services';
import { setUser } from './store/slices/user-slice';


function App() {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);

    useEffect(() => {
        getCurrentUser().then((response) => {
            dispatch(setUser(response.data));
        });
    },[]);

    useEffect(() => {
        if(user.id) {
            if(user.authorities.map((e: any) => e.authority).includes('user')){
                getProjectListByEmployeeId(user.id).then((response) => {
                    dispatch(addProjectsByEmployeeId(response.data));
                });
            }
            if(user.authorities.map((e: any) => e.authority).includes('manager')) {
                getAbsenceByManagerId(user.id).then((response) => {
                    dispatch(addAbsenceByManagerId(response.data));
                });
                getProjectListByManagerId(user.id).then((response) => {
                    dispatch(addProjectsByEmployeeId(response.data));
                });
            }
            if(user.authorities.map((e: any) => e.authority).includes('hr') ||
                user.authorities.map((e: any) => e.authority).includes('hrmanager')) {
                getAllVerificationReports().then((response) => {
                    dispatch(addVerificationReports(response.data));
                });
                getProjectList().then((response) => {
                    dispatch(addProjects(response.data));
                });
            }
            getProfileByEmployeeId(user.id).then((response) =>{
                dispatch(setProfile(response.data));
                dispatch(setOriginalProfile(response.data));
            });
            getAttendanceByEmployeeId(user.id).then((response) => {
                dispatch(addAttendanceByEmployeeId(response.data));
            });
            getAbsenceByEmployeeId(user.id).then((response) => {
                dispatch(addAbsenceByEmployeeId(response.data));
            });
        }
    },[user]);

  return (
    <div id={'app-container'}>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
