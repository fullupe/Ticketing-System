import React from 'react'

import ClientTicketSection from './ClientTicketSection'

import {useFetchData} from "../hooks/useFetchData"

type Props = {}

const ClientTicketBoard = (props: Props) => {


  const {TicketsPedding,TicketProgress,TicketCompleted} = useFetchData()


    const TicketStatus = [ "pendding","progress","completed"]
  return (
    <div className="flex flex-col h-screen w-full">

   
    <div className=" flex  gap-3 w-full bg-red-900h p-2   ">
        {
            TicketStatus.map((status, index)=>(

                <ClientTicketSection 
                key={index}
                index={index} 
                status={status}

                TicketsPedding={TicketsPedding}
                TicketProgress={TicketProgress}
                TicketCompleted={TicketCompleted}
                 />
            ))
        }

    </div>
    
    </div>
  )
}

export default ClientTicketBoard