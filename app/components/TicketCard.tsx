import React, { useContext } from 'react'
import TicketContext from "../contex/globalContext"

import { BuildingOffice2Icon, PencilSquareIcon, UserCircleIcon, WrenchScrewdriverIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { useDrag } from 'react-dnd'


type Props = {
    ticketItem:[] | any,
    isclient?:boolean
   
}

function TicketCard({ticketItem,isclient}: Props) {

const {setIsOpenTicketUpdate, setTargetTicket,setIsOpenEngUpdate, setTicket,setIsVisible}=useContext(TicketContext)


 const [{ isDragging }, drag] = useDrag(() => ({
    type: "ticket",
    item:{id:ticketItem.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })

   
  }))


  const handleDelete = (id:string)=>{
    setTicket((prev:[] | any)=>{

      const updateTicket = prev.map((ticket:[]|any)=>{
        if(ticket.id == id){
          return {...ticket, status:"close",}
        }
        return ticket;
      })

      localStorage.setItem("TicketData", JSON.stringify(updateTicket))

      return updateTicket;
    })


}

     const handleEdit =(id:string)=>{

    setIsOpenTicketUpdate(true)

    setTargetTicket(id)

  }
  

  const handleAddEng = (id:string)=>{

    setIsOpenEngUpdate(true)

    setTargetTicket(id)

    //alert(id)

  
  }

  return (
    <div ref={drag} className={`p-4 mt-2 shadow-md rounded-md cursor-grab ${isDragging ? "opacity-25" : "opacity-100"}`}>
            <div className="flex justify-end " >
                {
                  isclient && ticketItem.status ==="pendding"? (
                    <div onClick={()=>handleEdit(ticketItem.id)} className="bg-gray-300 shadow-md  rounded-full h-6 w-6 items-center justify-center flex text-gray-600 cursor-pointer">  
                    <PencilSquareIcon className="w-4 h-4"/>
                    </div>
                  ):(
                    <>
                    {
                      isclient || ticketItem.status ==="progress" || ticketItem.status ==="pendding" ? (
                          null
                      ):(
                <div onClick={()=>handleDelete(ticketItem.id)} className="bg-gray-400 shadow-md  rounded-full h-6 w-6 items-center justify-center flex text-gray-600 cursor-pointer">  
                <XCircleIcon className="w-6 h-6"/>
                </div>

                      )
                    }
                    </>
                  )
                }

            </div>
        <div>
        <BuildingOffice2Icon className="h-4"/>
        <p className="font-bold">{ticketItem.locations}</p>
        </div>

        <p className="text-[8px]">{new Date(ticketItem.createdAt).toString()}</p>
        
        <div className="flex space-x-1.5">
        <WrenchScrewdriverIcon className="w-5" />
        <p className="text-gray-800 text-sm">{ticketItem.problemDescriptions}</p>
        </div>



          {
            isclient ? (
        <div className="flex  w-full justify-end ">
          
            {
                ticketItem.asignedTo && (
                  <p className="text-sm italic ">{ticketItem.asignedTo}</p>

                )
            }

        </div>



            ):(
        <div className="flex  w-full justify-end ">
            {
                ticketItem.asignedTo ? (
                  <p className="text-sm italic ">{ticketItem.asignedTo}</p>

                ):(
                  <div onClick={()=>handleAddEng(ticketItem.id)} className="bg-gray-400 shadow-md  rounded-full h-6 w-6 items-center justify-center flex text-gray-600 cursor-pointer">  
                  <UserCircleIcon className="w-6 h-6"/>
                </div>

                )
            }

        </div>

            )

          }

        
        
    </div>
  )
}

export default TicketCard