import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

const UpdateProfileDialog = ({open,setOpen}) => {
  return (
    <div>
      <Dialog open={open}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>UpdateProfile</DialogTitle>
            </DialogHeader>
            <form>
                <div className='grid gap-4 py-4'>
                    <div className='grid-cols-4 items-center gap-4'>
                        <Label htmlFor="name" className="text-right">Name</Label>
                        <Input id="name" name="name" className="cols-span-3"/>
                        <Button>Save</Button>
                    </div>
                </div>
            </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UpdateProfileDialog
