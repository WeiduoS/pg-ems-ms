import { createSlice, Draft } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Project from '../../model/Project';

export interface ProjectState {
    projects: Project[];
}

const initialState: ProjectState = {
    projects: [],
};

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        addProjectsByEmployeeId: (state, action: PayloadAction<Project[]>) => {
            state.projects = action.payload;
        },
        updateProjects: (state, action: PayloadAction<Project[]>) => {
            state.projects = action.payload;
        },
        addProjects: (state, action) => {
            state.projects = action.payload;
        }
    },
});

export const { addProjectsByEmployeeId, updateProjects, addProjects} = projectSlice.actions;
export default projectSlice.reducer;
