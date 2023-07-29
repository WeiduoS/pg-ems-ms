import { createSlice, Draft } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Project from '../../model/Project';
import Profile from '../../model/Profile';
import User from '../../model/User';

export interface UserState {
    user: User
}

const initialState: UserState = {
    user: {
        id: '',
        username: '',
        authorities: []
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
