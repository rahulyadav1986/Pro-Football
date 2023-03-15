import Guest from '@/components/Auth/Guest';
import User from '@/components/Auth/User';
import React, { Suspense, useState } from 'react'
import { useSession } from "next-auth/react"
const Layout = ({children})=>{
  const {data:session} = useSession();
  return(
    session ? <User children={children} /> : <Guest children={children} />
  )
  
}

export default Layout;

