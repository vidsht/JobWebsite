import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { USER_API_END_POINT } from '../../../utils/constant.js';
import axios from 'axios';
import { toast } from 'sonner';


const Login = () => {
        const [input,setInput]=useState({
            email:"",
            password:"",
            role:"",
        });
        const navigate = useNavigate();
        const changeEventHandler = (e) => {
            setInput({...input, [e.target.anme]: e.target.value});  
        }
        const submitHandler =async(e) => {
            e.preventDefault();
            try{
                const res = await axios.post(`${USER_API_END_POINT}/register`, input,{
                    headers:{
                        "Content-Type":"application/json"
                    },
                    withCredentials:true
                });
                if(res.data.success){
                    navigate("/home");
                    toast.success(res.data.message)
                }
            } catch(error){
                console.log(error);
                toast.error(error.response.data.message)
            }
        }

    return (
        <div>
            <Navbar/>
            <div className='flex items-center justify-center max-w-7xl mx-auto'>   
                <form onSubmit={submitHandler} action="" className='w-1/2 border border-purple-500 rounded-md p-4 my-10'>
                    <h1 className='font-vold text-xl mb-5'>Login</h1>
                    <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="vidushitiwari122@gmail.com" name="email" value={input.email} onChange={changeEventHandler}/>
                    </div>
                    <div>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Enter Password" name="password" value={input.password} onChange={changeEventHandler}/>
                    </div>
                    <div className='flex items-center justify-between mt-5'> 
                        <RadioGroup className="flex items-center gap-4 my-1/2">
                            <div className='flex items-center space-x-2'>
                                <Input 
                                    type="radio" 
                                    name="role" 
                                    value="student" 
                                    checked={input.role == "student"} 
                                    onChange={changeEventHandler} 
                                    className="cursor-pointer"
                                />  
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <Input 
                                    type="radio" 
                                    name="role" 
                                    value="recruiter" 
                                    checked={input.role == "recruiter"} 
                                    onChange={changeEventHandler} 
                                    className="cursor-pointer"
                                /> 
                                    <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button type="submit" className='w-full m-4'>Login</Button>
                    <span className='text-sm'>Don't have an Account? <Link to="/signup" className='text-blue-600 text-sm'>Signup</Link></span>
                    </form>    
            </div>
        </div>
    );
};

export default Login;