'use client'
import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaLeftLong } from 'react-icons/fa6';
import { IoNotificationsCircleOutline } from 'react-icons/io5';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  company:{
    name:string;
  }
  address: {
    zipcode:number
  }
}

const UserData = () => {
    const [loader, setLoader] = useState<boolean>(true);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data);
            setLoader(false);
        });
    },[]);

    if(loader) return <h3>Data loading...</h3>
  return (
    <div className='flex min-h-screen flex-col items-center bg-gray-100 justify-center space-y-6 dark:bg-[#102A43] dark:text-white'>
        <div className="sticky top-0 z-20 w-full bg-white border-b border-[#d5d5d5] px-5 flex items-center justify-between">
            <h2 className="text-[22px] font-bold py-6">Sellers Information</h2>
            <div className="flex items-center gap-3">
                {/* <Field className="max-w-sm">
                <InputGroup>
                    <InputGroupInput id="inline-start-input" placeholder="Search..." />
                    <InputGroupAddon align="inline-end">
                    <SearchIcon className="text-muted-foreground" />
                    </InputGroupAddon>
                </InputGroup>
                </Field> */} 
                <div className='flex items-center cursor-pointer'>
                    <Link href="/user/category">
                    <FaLeftLong className='text-primary inline mr-2' />
                    Back to Home</Link>
                </div>
                <IoNotificationsCircleOutline className="w-10 h-10"/>
            </div>
        </div>
        <div className="overflow-x-auto shadow-md rounded-lg mb-10 mt-3">
            <table className="w-full text-left bg-white border-collapse">
                <thead className="bg-[#9A9A9A] text-[#ededed]">
                    <tr className='bg-primary'>
                        <th className="p-3">No.</th>
                        <th className="p-3">Name</th>
                        <th className="pr-3">Email</th>
                        <th className="pr-3">Company</th>
                        <th className="pr-3">Username</th>
                        <th className="pr-3">Shop ID</th>
                    </tr>
                </thead>
                 <tbody>
                    {users.map((user, index) => (
                        <tr key={ index } className="border-b hover:bg-gray-50">
                            <td className="p-3 font-medium tracking-tight text-sm py-4">{user.id}</td>
                            <td className="pr-3 tracking-tight text-sm">{user.name}</td>
                            <td className="pr-3 text-sm tracking-tighter">{user.email}</td>
                            <td className="pr-3 tracking-tight text-sm">{user.company.name}</td>
                            <td className="pr-3 capitalize tracking-tighter text-sm">{user.username}</td>
                            <td className="pr-3 capitalize tracking-tighter text-sm">{user.address.zipcode}</td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default UserData;