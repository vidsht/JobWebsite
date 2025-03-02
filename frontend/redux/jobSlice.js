import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        AllJobs: [],
        singleJob:null,
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.AllJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state,singleJob = action.payload;
        }
    },
 });

 export const { setAllJobs, setSingleJob } = jobSlice.actions;
 export default jobSlice.reducer;