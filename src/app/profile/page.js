"use client"

import { useSearchParams } from 'next/navigation';
import React from 'react';
import User from './User';

const ProfilePage = () => {
  const searchParams = useSearchParams();
  // console.log(searchParams);
  const id = searchParams.get('id');
  // console.log(id);

    return (
      <>
        <div>
          <h1 className='text-3xl font-semibold'>Profile Page</h1>
          <p>Your Id: {id}</p>
        </div>
        <User />
      </>
    );
};

export default ProfilePage;