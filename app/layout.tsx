"use client"

import './globals.css'
//import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import TicketContext from "../app/contex/globalContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { useEffect, useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';





const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {

    if(!localStorage.getItem("TicketData")){

    localStorage.setItem("TicketData",JSON.stringify([]))
        }

    if(!localStorage.getItem("Secret")){

    localStorage.setItem("Secret",JSON.stringify("password@password"))
        }

  
 }, [])

  const [ticket, setTicket] = useState<[] | any>([])

  const [isOpenEngUpdate, setIsOpenEngUpdate] = useState(false)

  const [runUpDate, setRunUpDate] = useState(false)

  const [targetTicket, setTargetTicket]=useState<string>('')

  const [isAuth, setIsAuth]=useState(false)

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const [isOpenTicketUpdate,setIsOpenTicketUpdate]=useState<boolean>(false)

  return (
    
    <html lang="en">

      <body >
    <TicketContext.Provider value={{ticket, setTicket,setIsOpenEngUpdate,isOpenEngUpdate,runUpDate, setRunUpDate, targetTicket, setTargetTicket,isAuth, setIsAuth,isVisible, setIsVisible,isOpenTicketUpdate,setIsOpenTicketUpdate}}>
      
      <DndProvider backend={HTML5Backend}>

      <ToastContainer />
        {children}

    </DndProvider>
    </TicketContext.Provider>
      </body>
    </html>

  )
}
