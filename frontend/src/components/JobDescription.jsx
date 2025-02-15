import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button';

const JobDescription = () => {
    const isApplied = true;
  return (
    <div className='mx-w-5xl mx-auto my-10'>
      <div className='flex items-center justify-between'>
        <div>
            <h1 className='font-bold text-xl'>Title</h1>
            <div>
                <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>12 Positions</Badge>
                <Badge className={"text-red-600 font-bold"} variant={"ghost"}>12 Positions</Badge>
                <Badge className={"text-ingigo-600 font-bold"} variant={"ghost"}>12 Positions</Badge>
            </div>
        </div>
        <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed': 'bg-indigo-600 hover:bg-indigo-700'}`}>{isApplied ? "Already Applied" : "Apply Now"}</Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
      <div>
        <h1 className='font-bold my-1'>Role:<span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
        <h1 className='font-bold my-1'>Location:<span className='pl-4 font-normal text-gray-800'>Hyderabad</span></h1>
        <h1 className='font-bold my-1'>Description:<span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span></h1>
        <h1 className='font-bold my-1'>Experience:<span className='pl-4 font-normal text-gray-800'>2 years</span></h1>
        <h1 className='font-bold my-1'>Salary:<span className='pl-4 font-normal text-gray-800'>12 LPA</span></h1>
        <h1 className='font-bold my-1'>Total Applicants:<span className='pl-4 font-normal text-gray-800'>4</span></h1>
        <h1 className='font-bold my-1'>Posted Date:<span className='pl-4 font-normal text-gray-800'>28-2-25</span></h1>
      </div>
    </div>
  )
}

export default JobDescription
