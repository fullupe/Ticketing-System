"use client"
import React, { useState,useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

import TicketContext from "../contex/globalContext"
import { toast } from 'react-toastify';



function FormModal():React.JSX.Element | null {

    const {setTargetTicket, setTicket, isVisible, setIsVisible}=useContext(TicketContext)
    const [locations, setLocations] = useState('')
    const [problemDescriptions, setProblemDescriptions] = useState('')


    
    
    
    const handleClose =(e:any)=>{
        if(e.target.id === "wrap") setIsVisible(false)
        setTargetTicket('')
    }
    
    const location = ["Tema-Main", "Dome-Pillar2","Spintex-Base-1", "Spintex-Base-2","Kasoa-Base-1", "Kasoa-Base-2","Achimota-Main","Achimota-Base-2"]
    
    
    
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        
        const NewTicket ={
            id:uuidv4(),
            status:"pendding",
            asignedTo:"",
            createdAt:Date.now(),
            locations,
            problemDescriptions,
        }
        
        setTicket((prevTicket:[])=>{
            
            const tickets = [...prevTicket, NewTicket];
            
            localStorage.setItem("TicketData",JSON.stringify(tickets));
            
            return tickets
            
        })
        
        setProblemDescriptions("");
        setLocations("")
        
        setTargetTicket('')
        
        toast.success("New Ticket Added")
        
        
    }
    
    if(!isVisible) return null;
    
    return (
    <div onClick={handleClose} id="wrap" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center flex">
        
        <div className="w-[600px] flex flex-col">

            <button onClick={()=>setIsVisible(false)} className=" place-self-end text-2xl text-white">x</button>

          <div className="bg-white p-2 rounded-lg h-full flex flex-col ">

           <p className="text-2xl font-bold tracking-[4px]">
              
                    Ticket Form 
             
               
               </p>

           <form onSubmit={handleSubmit} className="py-2 px-4 my-2">
         
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="select">
                    Location
                </label>
                <select  value={locations} onChange={(e)=>setLocations(e.target.value)} className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-blue-300" id="select">
                    <option>Select Location</option>
                    {
                        location.map((loc,index)=>(
                            <option key={index} value={loc}>{loc}</option>

                        ))
                    }
                   
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="textarea">
                    Problem Description
                </label>
                <textarea value={problemDescriptions} onChange={(e)=>setProblemDescriptions(e.target.value)} className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-blue-300" id="textarea" placeholder="Type Here..." rows={4}></textarea>
            </div>
    
            <button  type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
                
         </form>           


          </div>

        </div>
        
        </div>
  )
}

export default FormModal