import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead classname="text-right">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          {
            [1,2,3,4].map((item,index)=>(
              <TableRow key={index}>
                <TableCell>27-12-2024</TableCell>
                <TableCell>Frontend Developer</TableCell>
                <TableCell>Microsoft</TableCell>
                <TableCell><Badge>Selected</Badge></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
