import { createSlice, Draft } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Attendance from '../../model/Attendance';

export interface AttendanceState {
    attendance: Attendance[];
}

const initialState: AttendanceState = {
    attendance: [],
};

export const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        addAttendanceByEmployeeId: (state, action: PayloadAction<Attendance[]>) => {
            state.attendance = action.payload;
        },
    },
});

export const { addAttendanceByEmployeeId } = attendanceSlice.actions;
export default attendanceSlice.reducer;
