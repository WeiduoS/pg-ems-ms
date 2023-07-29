import { createSlice, Draft } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Attendance from '../../model/Attendance';
import Absence from '../../model/Absence';

export interface AbsenceState {
    absence: Absence[];
    requestAbsence: Absence[];
}

const initialState: AbsenceState = {
    absence: [],
    requestAbsence: [],
};

export const absenceSlice = createSlice({
    name: 'absence',
    initialState,
    reducers: {
        addAbsenceByEmployeeId: (state, action: PayloadAction<Absence[]>) => {
            state.absence = action.payload;
        },
        addAbsenceByManagerId: (state, action: PayloadAction<Absence[]>) => {
            state.requestAbsence = action.payload;
        },
    },
});

export const { addAbsenceByEmployeeId, addAbsenceByManagerId } = absenceSlice.actions;
export default absenceSlice.reducer;
