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