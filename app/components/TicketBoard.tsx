import React from 'react'
import TicketSection from './TicketSection'
import {useFetchData} from "../hooks/useFetchData"

type Props = {}

function TicketBoard({}: Props) {

    const {TicketsPedding,TicketProgress,TicketCompleted} = useFetchData()

    const TicketStatus = [ "pendding","progress","completed"]

  return (
    <div className="flex flex-col h-screen w-full">

   
    <div className=" flex  gap-3 w-full bg-red-900h p-2  ">
        {
            TicketStatus.map((status, index)=>(

                <TicketSection 
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

export default TicketBoard