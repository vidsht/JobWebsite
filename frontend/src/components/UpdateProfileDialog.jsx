import React from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useState } from 'react'
import { Loader2, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { Await } from 'react-router-dom'
import { USER_API_END_POINT } from '../../utils/constant.js'
import { setUser } from '../../redux/authSlice'
import axios from 'axios'

const UpdateProfileDialog = ({open,setOpen}) => {
  const [loading, setLoading] = useState(false);
  const {user} = useSelector(store => store.auth) ;
  const [input, setInput] = useState({
    fullName: user?.fullName || "",
    email:user?.email || "",
    phoneNumber:user?.phoneNumber || "",
    bio:user?.bio || "",
    skills:user?.profile?.skills?.map(skill=>skill) || "",
    file:user?.profile?.resume || ""
  });
  const dispatch = useDispatch();
  const changeEventHandler =(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
  }
  const fileChangeHandler =(e)=>{
    const file = e.target.files?.[0];
    setInput({...input,file});
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fullName', input.fullName);
    formData.append('email', input.email);
    formData.append('phoneNumber', input.phoneNumber);
    formData.append('bio', input.bio);
    formData.append('skills', input.skills);
    if (input.file) {
      formData.append('file', input.file);
    }
    try {
      setLoading(true);
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`,
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          withCredentials: true
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
    setOpen(false);
    console.log(input);
  }
  return (
    <div>
      <Dialog open={open}>
        <DialogContent className="sm:mx-w-[425px]" onInteractionOutside={() => setOpen(false)}>
            <DialogHeader>
                <DialogTitle>UpdateProfile</DialogTitle>
                <Button variant="ghost" className="ml-auto" onClick={() => setOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
            </DialogHeader>
            <form onSubmit={submitHandler}>
                <div className='grid gap-4 py-4'>
                    <div className='grid-cols-4 items-center gap-4'>
                        <Label htmlFor="fullName" className="text-right">Name</Label>
                        <Input id="fullName" name="fullName" value={input.fullName} onChange={changeEventHandler} className="cols-span-3"/>
                    </div>
                    <div className='grid-cols-4 items-center gap-4'>
                        <Label htmlFor="email" className="text-right">Email</Label>
                        <Input id="email" name="email" value={input.email} onChange={changeEventHandler} className="cols-span-3"/>
                    </div>
                    <div className='grid-cols-4 items-center gap-4'>
                        <Label htmlFor="phoneNumber" className="text-right">Number</Label>
                        <Input id="phoneNumber" name="phoneNumber" value={input.phoneNumber} onChange={changeEventHandler} className="cols-span-3"/>
                    </div>
                    <div className='grid-cols-4 items-center gap-4'>
                        <Label htmlFor="bio" className="text-right">Bio</Label>
                        <Input id="bio" name="bio" value={input.bio} onChange={changeEventHandler} className="cols-span-3"/>
                    </div>
                    <div className='grid-cols-4 items-center gap-4'>
                        <Label htmlFor="skills" className="text-right">Skills</Label>
                        <Input id="skills" name="skills" value={input.skills} onChange={changeEventHandler} className="cols-span-3"/>
                    </div>
                    <div className='grid-cols-4 items-center gap-4'>
                        <Label htmlFor="file" className="text-right">Resume</Label>
                        <Input id="file" name="file" type="file" onChange={fileChangeHandler} className="cols-span-3"/>
                    </div>
                </div>
                <DialogFooter>
                  {loading ? <Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin'/>Please Wait</Button>:<Button>Update</Button>}
                </DialogFooter>
            </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UpdateProfileDialog
