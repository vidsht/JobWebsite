import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        singleJob:null,
        allAdminJobs:[],
        seachJobByText:"",
        allAppliedJobs:[],
        searchedQuery:""
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs:(state,action)=>{
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText:(state,action)=>{
            state.seachJobByText=action.payload;
        },
        setAllAppliedJobs:(state,action)=>{
            state.allAppliedJobs=action.payload;
        },
        setSearchedQuery:(state,action)=>{
            state.searchedQuery = action.payload;
        }
    },
 });

 export const { setAllJobs, setSingleJob, setAllAdminJobs, setAllAppliedJobs, setSearchedQuery, setSearchJobByText} = jobSlice.actions;
 export default jobSlice.reducer;                                                                                                       