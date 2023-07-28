import {useState, useEffect, useContext} from "react";
import TicketContext from "../contex/globalContext"

  export  const  useFetchData =()=>{

    const {ticket}=useContext(TicketContext)

    const [TicketsPedding, setTicketsPendding] = useState<[] | any>([])
    const [TicketProgress, setTicketProgress] = useState<[] | any>([])
    const [TicketCompleted, setTicketCompleted] = useState<[] | any>([])

    useEffect(() => {
    
        const filted_pedding  = ticket?.filter((val)=>val.status =="pendding")
        const filted_progress  = ticket?.filter((val)=>val.status =="progress")
        const filted_completed  = ticket?.filter((val)=>val.status =="completed")

        setTicketsPendding(filted_pedding)
        setTicketProgress(filted_progress)
        setTicketCompleted(filted_completed)
        
    }, [ticket])

    return {TicketsPedding,TicketProgress,TicketCompleted}

}