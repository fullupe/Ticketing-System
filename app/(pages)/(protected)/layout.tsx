
"use client"
import { Inter } from 'next/font/google'
import '../../globals.css'
import { useContext, useEffect } from 'react'
import AdminNavBar from '../../components/AdminNavBar'
import TicketContext from "../../contex/globalContext"
import {useRouter} from "next/navigation"

//const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({children}:{children: React.ReactNode}) {
  const {isAuth}=useContext(TicketContext)
  const router = useRouter()

useEffect(()=>{
  if(!isAuth){
       router.push("/login");

      } 

},[isAuth])
  

  return (
    <html lang="en">
      <body>
       
      <AdminNavBar/>
        {children}
     
    </body>
    </html>

  )
  
}
