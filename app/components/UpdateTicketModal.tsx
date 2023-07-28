import React, { useContext, useEffect, useState } from 'react';
import TicketContext from "../contex/globalContext"
import { toast } from 'react-toastify';

type Props = {}

function UpdateTicketModal({}: Props) {
    const {ticket,isOpenTicketUpdate,setIsOpenTicketUpdate,targetTicket, setTicket,}=useContext(TicketContext)


    if(!isOpenTicketUpdate) return null;

    const handleClose =(e:any)=>{
        if(e.target.id === "wrap") setIsOpenTicketUpdate(false)
        
    }

  
    const [problemDescriptions, setProblemDescriptions] = useState('')


    useEffect(()=>{
        ticket.map((ticket)=>{
            if(ticket.id == targetTicket){
                setProblemDescriptions(ticket.problemDescriptions)
            }
        })

    },[isOpenTicketUpdate])


    const handleUpdate = (e:any)=>{
        e.preventDefault()
        
        
        setTicket((prev:[] | any)=>{
            
            const updateTicket = prev.map((ticket:[]|any)=>{
                if(ticket.id == targetTicket){
                    
                    return {...ticket, problemDescriptions}
                }
                return ticket;
            })
            
            localStorage.setItem("TicketData", JSON.stringify(updateTicket))
            
            return updateTicket;
        })

        setIsOpenTicketUpdate(false)

        toast.success("Ticket Updated")
        
        


    }

  return (
    <div onClick={handleClose} id="wrap" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center flex">
        
        <div className="w-[600px] flex flex-col">

            <button onClick={()=>setIsOpenTicketUpdate(false)} className=" place-self-end text-2xl text-white">x</button>

          <div className="bg-white p-2 rounded-lg h-full flex flex-col ">

           <p className="text-2xl font-bold tracking-[4px]"> Ticket Edit Form</p>

           <form onSubmit={handleUpdate} className="py-2 px-4 my-2">
         
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="textarea">
                    Edit Problem Description
                </label>
                <textarea value={problemDescriptions} onChange={(e)=>setProblemDescriptions(e.target.value)} className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-blue-300" id="textarea" placeholder="Type Here..." rows={4}></textarea>
            </div>
        
                <button  type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Update
                </button>

             
                    
            


        </form>           


          </div>

        </div>
        
        </div>
  )
}

export default UpdateTicketModal