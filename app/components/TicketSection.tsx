"use client"
import React, { useContext} from 'react';
import { useDrop } from 'react-dnd';
import TicketContext from "../contex/globalContext"
import AddEngineerModal from './AddEngineerModal';
import TicketCard from './TicketCard';
import TicketHeader from './TicketHeader';


type Props = {
    status:string,
    index:number,
    TicketsPedding:[] ,
    TicketProgress:[],
    TicketCompleted:[],
}

function TicketSection({  
    status,
    index,
    TicketsPedding,
    TicketProgress,
    TicketCompleted,

 }: Props) {
    const {setTicket}=useContext(TicketContext)

    const [{ isOver}, drop] = useDrop(() => ({
      accept:"ticket",
      drop:(item:string | any)=>addTicketToSection(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }))
    
    let title="Pendding"
    let bg="bg-slate-600"
    let watermark = "No Pending ticket"
    let TicketToMap=TicketsPedding

    
    if(status === "progress"){
      title="Progress"
      bg="bg-orange-600"
      watermark = "Drop progress Ticket here.."
      TicketToMap=TicketProgress
      
    }
    
    if(status === "completed"){
      title = "Completed";
      bg="bg-green-500";
      watermark = "Drop completed  ticket  here.."
      TicketToMap =TicketCompleted;
    }

    
    
    const addTicketToSection = (id:any)=>{
      

      if(status=="progress"){

      
        setTicket((prev:[] | any)=>{

          const updateTicket = prev.map((ticket:[]|any)=>{
            if(ticket.id == id){
              return {...ticket, status:status,}
            }
            return ticket;
          })
  
          localStorage.setItem("TicketData", JSON.stringify(updateTicket))
  
          return updateTicket;
        })
        
        
      }else if(status=="completed"){

     

        setTicket((prev:[] | any)=>{

          const updateTicket = prev.map((ticket:[]|any)=>{
            if(ticket.id === id){
              return {...ticket, status:status}
            }
           
            return ticket;
          })
  
          localStorage.setItem("TicketData", JSON.stringify(updateTicket))
  
          return updateTicket;
        })

      }

      
    }
    
    return (
    <div   key={index} className="flex flex-col w-full h-[60%] bg-gray-200 rounded-sm overflow-hidden ">

        <TicketHeader title={title} bg={bg} count={TicketToMap?.length}/>


       <div ref={drop} className={` flex h-screen  mt-8 flex-col overflow-auto mx-2 ${isOver ? "bg-slate-300" : ""}`} >
        {


          TicketToMap?.length > 0 ? (

            TicketToMap?.map((ticketItem:[] | any)=>(
              <TicketCard ticketItem={ticketItem} key={ticketItem.id} />
            ))
            
            ):(
              <div className=" flex  h-full items-center justify-center  ">
                <p className=" capitalize text-sm p-4 text-slate-700 opacity-25 border-2 border-dotted border-gray-900 ">{watermark}</p>
              </div>
              ) 
        }

       </div>
       <AddEngineerModal/> 

      
    </div>
  )
}

export default TicketSection