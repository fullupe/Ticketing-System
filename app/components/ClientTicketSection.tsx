import React, { useState } from 'react'
import ClientTicketHeader from './ClientTicketHeader'
import TicketCard from './TicketCard'

type Props = {
  status:string,
  index:number,
  TicketsPedding:[] ,
  TicketProgress:[],
  TicketCompleted:[],
}

const ClientTicketSection = ({status,
  index,
  TicketsPedding,
  TicketProgress,
  TicketCompleted,}: Props) => {

    let title="Pendding"
    let bg="bg-slate-600"
    let watermark = "Add New ticket"
    let TicketToMap=TicketsPedding

    
    if(status === "progress"){
      title="Progress"
      bg="bg-orange-600"
      watermark = "No progress Ticket"
     
      TicketToMap=TicketProgress
      
    }
    
    if(status === "completed"){
      title = "Completed";
      bg="bg-green-500";
      watermark = "No completed  ticket "
  
      TicketToMap =TicketCompleted;
    }

    const [isclient] = useState(true)

    return (
        <div   key={index} className="flex flex-col w-full h-[60%] ">

        <ClientTicketHeader title={title} bg={bg} count={TicketToMap?.length}/>


       <div  className={` flex h-screen  mt-8 flex-col overflow-auto mx-2 border-2 px-2 py-4 `} >
        {


          TicketToMap?.length > 0 ? (

            TicketToMap?.map((ticketItem:[] | any)=>(
              <TicketCard ticketItem={ticketItem} key={ticketItem.id} isclient={isclient}/>
            ))
            
            ):(
              <div className=" flex  h-full items-center justify-center  ">
                <p className=" capitalize text-sm p-4 text-slate-700 opacity-25 border-2 border-dotted border-gray-900 ">{watermark}</p>
              </div>
              ) 
        }

       </div>
    

      
    </div>
    )
}

export default ClientTicketSection
