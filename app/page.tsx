"use client"

import React, { useContext, useEffect, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import FormModal from './components/FormModal';
import TicketContext from "./contex/globalContext";
import ClientTicketBoard from './components/ClientTicketBoard';
import UpdateTicketModal from './components/UpdateTicketModal';

export default function Home() {

  const {setTicket,setIsVisible}=useContext(TicketContext)

  useEffect(()=>{

    let local:string | any =localStorage.getItem("TicketData")

    return setTicket(JSON.parse(local))

  },[])


  return (
    <main className="flex min-h-screen flex-col items-center px-1 py-20 md:px-24 w-full ">
      
      <button onClick={()=>setIsVisible(true)} className=" p-1 bg-gray-400 rounded-full h-20 w-20 ">
       <PlusCircleIcon className="text-gray-900 text-center hover:text-black"/>
       </button>

        Add New Ticket


<section className="flex w-full md:w-[80%]  items-centers justify-center mt-28 fixed h-full ">

     <ClientTicketBoard/>
   </section>

        <FormModal />

        <UpdateTicketModal/>

    </main>
  )
}
