// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setAllJobs } from "../../redux/jobSlice.js";
// import { JOB_API_END_POINT } from "../../utils/constant";
// import { useEffect, useRef } from "react";

// const useGetAllJobs = () => {
//     const dispatch = useDispatch();
//     const { token } = useSelector(store => store.auth);
//     const {searchedQuery } = useSelector(store=>store.job);
//     const cancelTokenRef = useRef();

//     useEffect(() => {
//         const fetchAllJobs = async () => {
//             cancelTokenRef.current = axios.CancelToken.source();

//             if (!token) return;
//             try {
//                 const res = await axios.get(
//                     `${JOB_API_END_POINT}/get?keyword=${searchedQuery || ""}`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`
//                         },
//                         withCredentials: true,
//                         cancelToken: cancelTokenRef.current.token
//                     }
//                 );
//                 if(res.data.success) {
//                     dispatch(setAllJobs(res.data.jobs));
//                 }
//             } catch (error) {
//                 // console.log(error);
//                 if (!axios.isCancel(error)) {
//                     console.log(error);
//                 }
//             }
//         }
//         fetchAllJobs();

//         return () => {
//             if (cancelTokenRef.current) {
//                 cancelTokenRef.current.cancel('Operation canceled due to component unmount or dependency change');
//             }
//         };

//     },[token, searchedQuery, dispatch])
// }

// export default useGetAllJobs;


import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllJobs } from "../../redux/jobSlice.js";
import { JOB_API_END_POINT } from "../../utils/constant";
import { useEffect } from "react";

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get`,{withCredentials:true})
                if(res.data.success){
                    dispatch(setAllJobs(res.data.job));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs();
    },[])
}

export default useGetAllJobs;