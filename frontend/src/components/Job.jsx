import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'


const Job = () => {
  const navigate = useNavigate();
  const jobId = "12bhcbjncdkncdj";
  return (
    <div className='p-5 rounded-medium shadow-xl bg-white border border-gray-100'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-600'>Two days ago</p>
        <Button variant="outline" className='rounded-full' size="icon"><Bookmark/></Button>
      </div>
      <div className='flex items-center gap-2 my-2'>
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"/>
          </Avatar>
        </Button>
        <div>
          <h1>Company Name</h1>
          <p>India</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-lg- my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores architecto voluptatibus ducimus alias nesciunt exercitationem laborum, quasi labore maiores iusto est</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge  className={"text-blue-700 font-bold"} variant="ghost">12 Positions</Badge>
        <Badge className={"text-red-700 font-bold"} variant="ghost">Part Time</Badge>
        <Badge className={"text-purple-700 font-bold"} variant="ghost">2 LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button variant="outline"onClick={()=>navigate(`/description/${jobId}`)}>Details</Button>
        <Button className="bg-purple-600">Save for Later</Button>
      </div>
    </div>
  )
}

export default Job
