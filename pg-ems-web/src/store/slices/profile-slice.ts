import { createSlice, Draft } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Project from '../../model/Project';
import Profile from '../../model/Profile';

export interface ProfileState {
    profile: Profile;
    original: Profile
}

const initialState: ProfileState = {
    profile: {
        employeeId: '',
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
    },
    original: {
        employeeId: '',
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
    },
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<Profile>) => {
            state.profile = action.payload;
        },
        setOriginalProfile: (state, action: PayloadAction<Profile>) => {
            state.original = action.payload;
        },
    },
});

export const { setProfile, setOriginalProfile } = profileSlice.actions;
export default profileSlice.reducer;
