import { createSlice, Draft } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Attendance from '../../model/Attendance';
import Absence from '../../model/Absence';
import VerificationReport from '../../model/VerificationReport';

export interface VerificationReportState {
    verificationReports: VerificationReport[];
}

const initialState: VerificationReportState = {
    verificationReports: [],
};

export const verificationReportSlice = createSlice({
    name: 'verification-report',
    initialState,
    reducers: {
        addVerificationReports: (state, action: PayloadAction<VerificationReport[]>) => {
            state.verificationReports = action.payload;
        },
    },
});

export const { addVerificationReports } = verificationReportSlice.actions;
export default verificationReportSlice.reducer;
