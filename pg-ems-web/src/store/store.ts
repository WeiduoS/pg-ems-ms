import { configureStore } from '@reduxjs/toolkit';
import absenceSlice from './slices/absence-slice';
import attendanceSlice from './slices/attendance-slice';
import projectSlice from './slices/project-slice';
import profileSlice from './slices/profile-slice';
import userSlice from './slices/user-slice';
import verificationReportSlice from './slices/verifiction-report-slice';

export const store = configureStore({
    reducer: {
        project: projectSlice,
        profile: profileSlice,
        user: userSlice,
        attendance: attendanceSlice,
        absence: absenceSlice,
        verificationReport: verificationReportSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
