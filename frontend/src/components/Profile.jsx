import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge';
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog.jsx'

const skills=["HTML","CSS","JavaScript","ReactJS"];

const Profile = () => {
    const isResume = true;
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Navbar />
            <div className='max-w-5xl mx-auto bg-white border border-gray-500 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnO3Vs35ZQmdOKU1A1XVwaf-8vv9zM8muzTw&s" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>Full name</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates soluta asperiores, illo odio voluptatibus temporibus accusamus? Possimus, libero totam esse pariatur sapiente laborum, soluta quam alias qui aperiam explicabo.</p>
                        </div>
                        <Button onClick={()=>setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
                    </div>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>tvidushi1234@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>0000000000</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-2'>
                    {
                        skills.length !== 0 ? skills.map((item,index)=><Badge key={index}>{item}</Badge>):<span>NA</span>
                    }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a className='text-blue-500 w-full hover:underline cursor-pointer' target="blank" href='https://s3.resume.io/uploads/examples/resume/resume_pages/222/persistent-resource/student-resume-examples.jpg'> VidushiResume</a>:<span>NA</span>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <AppliedJobTable/>
            </div>
            <div>
                <UpdateProfileDialog open={open} setOpen={setOpen}/>
            </div>
        </div>
    )
}

export default Profile
