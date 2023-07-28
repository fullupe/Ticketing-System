"use client"

import {  MapPinIcon} from '@heroicons/react/24/solid';
import React, { useContext, useEffect, useState } from 'react';

import DashBoradHeader from '../../components/DashBoradHeader';
import TicketContext from "../../contex/globalContext"
import { usePagination } from '@mantine/hooks';

const TicketStatus = [ "pendding","progress","completed"]


const TICKET_PER_PAGE = 5;

function Dashboard() {
  const [TicketsPedding, setTicketsPendding] = useState<[] | any>([])
  const [TicketProgress, setTicketProgress] = useState<[] | any>([])
  const [TicketCompleted, setTicketCompleted] = useState<[] | any>([])

    const {ticket, setTicket} =useContext(TicketContext)
    


    useEffect(()=>{
        let local:string | any =localStorage.getItem("TicketData")
         setTicket(JSON.parse(local))
    
      },[])



    useEffect(() => {
    
        const filted_pedding  = ticket.filter((val)=>val.status =="pendding")
        const filted_progress  = ticket.filter((val)=>val.status =="progress")
        const filted_completed  = ticket.filter((val)=>val.status =="completed")

        setTicketsPendding(filted_pedding)
        setTicketProgress(filted_progress)
        setTicketCompleted(filted_completed)
        
    }, [ticket])





 //console.log("dash",ticket)

    


 const [visibleResult, setVisibleResult]=useState(
  ticket.slice(0, TICKET_PER_PAGE));

  const pagination = usePagination({
    total: Math.ceil(ticket.length / TICKET_PER_PAGE), 
    initialPage:1,
    onChange(page){
      const start = (page -1) * TICKET_PER_PAGE;
      const end = start + TICKET_PER_PAGE;
      setVisibleResult(ticket.slice(start,end))
    },
  })




  return (
    <div className="flex flex-col h-screen justify-centerl py-20 items-center  ">

      

        <div className="flex gap-4 w-[80%] items-center justify-center my-4">
        {
          TicketStatus.map((status,index)=>(
            <DashBoradHeader ticket={ticket} key={index} status={status}  TicketsPedding={TicketsPedding} TicketProgress={TicketProgress} TicketCompleted={TicketCompleted}/>
          ))
        }

        </div>


        <div className="w-[90%] mx-auto bg-white rounded p-6 mt-8 shadow-md">
        <table className="w-full">
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2 pt-6 flex items-center justify-center">

                      <MapPinIcon className="h-6 w-6 text-gray-500"/>
                      
                      Location</th>

                    <th className="px-4 py-2">  Problem Des.</th>
                    
                    <th className="px-4 py-2">
                      {/* <span><ClockIcon className="h-6 w-6 text-gray-500"/></span> */}
                      
                      CreatedAt</th>

                    <th className="px-4 py-2">Eng Name</th>

                    <th className="px-4 py-2 "> 
                    {/* <span><SignalIcon className="h-6 w-6 text-gray-500"/></span> */}
                    
                    Status</th>
                    <th className="px-4 py-2">CompletedAt</th>
                </tr>
            </thead>
            <tbody>

                {
                  visibleResult.map((items:any,index:number)=>(

                <tr key={index}>
                    <td className="border px-4 py-2">{index+1}</td>
                    <td className="border px-4 py-2">{items.locations}</td>
                    <td className="border px-4 py-2">{items.problemDescriptions}</td>
                    <td className="border px-4 py-2">{new Date(items.createdAt).toLocaleString()}</td>
                    <td className="border px-4 py-2">{items.asignedTo}</td>
                    <td className="border px-4 py-2">{items.status}</td>
                    <td className="border px-4 py-2">-</td>
                </tr>

                  ))  
                }
            </tbody>
        </table>
        <div className="flex gap-4 justify-center items-center my-4">
                {
                  pagination.range.map((range:any)=>(
                    range =='dots' ? <button key={range}>...</button> :
                    <button className={pagination.active == range ? "bg-gray-900 cursor-pointer p-1 text-white rounded-md" : ""} key={range} onClick={()=>pagination.setPage(range)}>{range}</button>

                  ))
                }
                
        </div>
    </div>


    </div>
  )
}

export default Dashboard