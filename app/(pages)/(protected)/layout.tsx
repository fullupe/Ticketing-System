
"use client"
import { Inter } from 'next/font/google'
import { useContext } from 'react'
import AdminNavBar from '../../components/AdminNavBar'
import TicketContext from "../../contex/globalContext"
import {useRouter} from "next/navigation"

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {isAuth,setIsAuth}=useContext(TicketContext)
  const router = useRouter()

  if(!isAuth){
    router.push("/login")

    return <></>
  } 

  return (
    <html lang="en">
      <body>
      <AdminNavBar/>
        {children}
    </body>
    </html>

  )
}
