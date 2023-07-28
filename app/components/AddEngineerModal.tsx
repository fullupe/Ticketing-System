"use client "

import React, { useContext, useState } from 'react'
import TicketContext from "../contex/globalContext"

type Props = {
   
   
}

function AddEngineerModal({}: Props) {

    const [assignedEng, setAssignedEng] = useState('')

    const {targetTicket,  setTicket,  isOpenEngUpdate, setIsOpenEngUpdate}=useContext(TicketContext)
    
    if(!isOpenEngUpdate) return null;


 


    const handleClose = (e:any)=>{
        //e.preventDefault();
        if(e.target.id === "wrap") setIsOpenEngUpdate(false)
     }

     const handleSubmit =  (e:any)=>{
        e.preventDefault()

       //setAssignedEng("")

       setTicket((prev:[] | any)=>{

        const updateTicket = prev.map((ticket:[]|any)=>{
          if(ticket.id == targetTicket){
            return {...ticket, asignedTo:assignedEng,}
          }
          return ticket;
        })
  
        localStorage.setItem("TicketData", JSON.stringify(updateTicket))
  
        return updateTicket;
      })
    
      setIsOpenEngUpdate(false)
    }


    const engineers = [{id:1,name:"William"}, {id:2,name:"Kenneth"}, {id:3, name:"George"},{id:4, name:"Sampson"},{id:5, name:"Phidelist"}]

  return (
    <div onClick={handleClose} id="wrap" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center flex">
        
        <div className="w-[600px] flex flex-col">

            <button onClick={()=>setIsOpenEngUpdate(false)} className=" place-self-end text-2xl text-white">x</button>

          <div className="bg-white p-2 rounded-lg h-full flex flex-col ">

           <p className="text-2xl font-bold tracking-[4px]">Assign Eng. </p>

           <form onSubmit={handleSubmit} className="py-2 px-4 my-2">
          

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="select">
                    Field Eng. 
                </label>
                <select  value={assignedEng} onChange={(e)=>setAssignedEng(e.target.value)} className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-blue-300" id="select">
                    <option>Select Name</option>
                    {
                        engineers.map((eng)=>(
                            <option key={eng.id} value={eng.name}>{eng.name}</option>

                        ))
                    }
                   
                </select>
            </div>
            
            <button  disabled={!assignedEng} type="submit" className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        </form>           


          </div>

        </div>
        
        </div>
  )
}

export default AddEngineerModal