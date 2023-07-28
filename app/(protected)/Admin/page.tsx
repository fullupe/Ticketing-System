"use client"

import React, { useContext, useEffect, useState } from 'react'

import TicketBoard from '../../components/TicketBoard'
import TicketContext from "../../contex/globalContext"


function Page() {

    const {setTicket}=useContext(TicketContext);

  
    useEffect(()=>{
  
      let local:string | any =localStorage.getItem("TicketData")
  
      return setTicket(JSON.parse(local))
  
    },[])
    

  return (
    <main className="flex min-h-screen flex-col items-center px-1  md:px-24 w-full ">

                <section className="flex w-full md:w-[80%]  items-center justify-center mt-28 fixed h-full ">
                  <TicketBoard/>
                </section>


  </main>
  )
}

export default Page