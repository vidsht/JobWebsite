import React, { useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent  } from '../ui/popover';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { LogOut, User2 } from 'lucide-react';

const Navbar = () => {
    let [user,setUser]=useState(false);
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-6xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-red-600'>Portal</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Button variant="outline">Login</Button>
                                <Button className="bg-purple-600 hover:bg-purple-600">Signup</Button>
                            </div>
                        ):(

                    <Popover> 
                        <PopoverTrigger asChild>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className="w-88">
                            <div className='flex gap-2 space-y-2'>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                                <div>
                                <h4 className='font-medium'>Vidushi Tiwari</h4>
                                <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div className='flex flex-col text-grey-600'>
                                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                    <User2/>
                                    <Button variant="link">View Profile</Button>
                                </div>
                                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                    <LogOut/>
                                    <Button variant="link">Logout</Button></div>
                            </div>
                        </PopoverContent>
                    </Popover> 
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;