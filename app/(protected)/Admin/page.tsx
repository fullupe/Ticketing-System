"use client"

import React, { useContext, useEffect, useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import FormModal from '../../components/FormModal'
import TicketBoard from '../../components/TicketBoard'
import TicketContext from "../../contex/globalContext"
import AdminNavBar from '../../components/AdminNavBar'

function page() {


    const {ticket, setTicket}=useContext(TicketContext)

    const [isVisible, setIsVisible] = useState<boolean>(false)
  
  
    useEffect(()=>{
  
      let local:string | any =localStorage.getItem("TicketData")
  
      return setTicket(JSON.parse(local))
  
    },[])
  return (
    <main className="flex min-h-screen flex-col items-center px-1  md:px-24 w-full ">

                <section className="flex w-full md:w-[80%]  items-center justify-center mt-28 fixed h-full ">
                  <TicketBoard/>
                </section>



      {/* <FormModal/> */}


      



  </main>
  )
}

export default page