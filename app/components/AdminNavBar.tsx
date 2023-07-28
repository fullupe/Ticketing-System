import Link from 'next/link'
import React, { useContext} from 'react'
import TicketContext from "../contex/globalContext"
import { usePathname} from 'next/navigation'

type Props = {}

export default function AdminNavBar({}: Props) {

    const pathname = usePathname()

    const {isAuth,setIsAuth}=useContext(TicketContext)

    const handlelogOut = () => {
        setIsAuth(false)
    }

   

  return (
    <div className="flex w-full  h-14 justify-center fixed mt-2 ">
        <div className="flex h-full w-full md:w-[80%]  rounded-full items-center justify-between bg-gray-200 border-2  px-8 shadow-2xl">
            <div className="flex space-x-2 text-gray-200">
                <Link href="/dashboard" className={`p-1 px-1.5  ${pathname==="/dashboard" ? "underline": ""}  text-black rounded-lg cursor-pointer hover:underline decoration-4`}>DashBoard</Link>
                <Link href="/admin" className={`p-1 px-1.5      ${pathname==="/admin" ? "underline": ""} text-black rounded-lg cursor-pointer hover:underline decoration-4`}>Admin</Link>
            </div>
            <div className="flex space-x-2 text-gray-200">
                {
                    isAuth ? (

                        <p onClick={handlelogOut} className="p-1 px-1.5 bg-gray-600d text-black rounded-lg cursor-pointer hover:underline decoration-4">LogOut</p>
                        ):(
                        <Link href="/login" className="p-1 px-1.5 bg-gray-600d text-black rounded-lg cursor-pointer hover:underline decoration-4">SigIn</Link>
                    )
                }
            </div>

       
        </div>
    </div>
  )
}