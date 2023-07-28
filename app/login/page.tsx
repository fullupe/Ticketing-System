"use client"
import React, { useContext, useState } from 'react'
import TicketContext from "../contex/globalContext"
import {useRouter} from "next/navigation"
import { toast } from 'react-toastify';

type Props = {}

function Page({}: Props) {
    const router = useRouter()
    const [password, setPassword]=useState('')

    const {isAuth,setIsAuth}=useContext(TicketContext)



    const SECRET = JSON.parse(localStorage.getItem("Secret")||"") 


    const handleLogin =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(SECRET == password){
            setIsAuth(true)
            router.push("/Admin")
        }

        toast.warning("wrong password")
    }

    if(isAuth)router.push("/Admin")
    
  return (
    <body className="flex items-center justify-center min-h-screen">
    <form onSubmit={handleLogin} className="bg-gray-50 p-8 shadow-md rounded max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 uppercas italic tracking-[4px]">Login</h1>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                id="password" type="password" placeholder="Enter your password"/>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Login
        </button>
    </form>
</body>
  )
}

export default Page