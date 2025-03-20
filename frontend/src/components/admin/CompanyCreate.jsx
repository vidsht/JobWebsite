import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '../../../utils/constant'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '../../../redux/companySlice'
import { toast } from 'sonner'

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const registeredNewCompany = async () => {
        try{
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`,{
                name},{
                    headers:{
                        'Content-Type':'application/json'
                        },
                        withCredentials:true
            }); 
            if(res.data.success){
                dispatch(setSingleCompany(res.data.company));
                toast.success(res?.data?.message);
                const companyid = res?.data?.company?._id;
                navigate(`/admin/companies/${companyid}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
      <div>
        <Navbar/>
        </div>
        <div className='max-w-4xl mx-auto'>
            <div className='my-10'>
                <h1 className='font-bold text-2xl'>Your Company Name</h1>
                <p className='text-gray-500'>What would you like to be your company name? You can change this later</p>
            </div>
            <Label>Company Name</Label>
            <Input
            type="text"
            className="my-2"
            placeholder="Google, Adobe etc."
            onChange={(e)=>setName(e.target.value)}
            />
            <div className='flex items-center gap-2 my-10'>
                <Button variant="outline" onClick={()=>navigate("/admin/companies")}>Cancel</Button>
                <Button onClick={registeredNewCompany}>Continue</Button>
            </div>
        </div>
    </div>
  )
}

export default CompanyCreate
