import { createContext, useContext , useEffect, useState } from 'react'
export const INITIAL_USER = {
    ID: '',
    name:'',
    username: '',
    email:'',
    imageUrl:'',
    bio:''
}


const AuthContext = () => {
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext