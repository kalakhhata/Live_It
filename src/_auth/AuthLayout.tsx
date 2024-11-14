import { Section } from 'lucide-react';
import React from 'react'
import {Outlet , Navigate} from "react-router-dom"

function AuthLayout() {
  const Authenticated =true;
  return (
    <>
      {Authenticated ? (<Navigate to="/" />) : (<><section><Outlet /></section></>)}
    </>
  )
}

export default AuthLayout