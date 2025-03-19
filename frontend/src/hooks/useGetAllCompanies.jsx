import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { COMPANY_API_END_POINT } from "../../utils/constant";
import { useEffect, useRef } from "react";
import { setCompanies} from "../../redux/companySlice.js";

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(store => store.auth);
    const cancelTokenRef = useRef();
    useEffect(() => {

        cancelTokenRef.current = axios.CancelToken.source();
        const fetchCompanies = async () => {
            if (!token) return;

            try {
                const res = await axios.get(
                    `${COMPANY_API_END_POINT}/get`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                        withCredentials: true,
                        cancelToken: cancelTokenRef.current.token
                    }
                );
                if(res.data.success){
                    dispatch(setCompanies(res.data.companies));
                }
            } catch (error) {
                // console.log(error);
                if (!axios.isCancel(error)) {
                    console.log(error);
                }
            }
        }
        fetchCompanies();
        return () => {
            if (cancelTokenRef.current) {
                cancelTokenRef.current.cancel('Operation canceled due to component unmount or dependency change');
            }
        };
    },[token, dispatch])
}

export default useGetAllCompanies;