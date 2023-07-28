import React from 'react'

type Props = {
    status:string
    TicketCompleted:[] 
    TicketProgress:[]
    TicketsPedding:[]
    ticket:[] | any

}

function DashBoradHeader({status, ticket, TicketsPedding,TicketProgress,TicketCompleted}: Props) {

    let title="Pendding"
    let bg="bg-slate-600"
    let progress = TicketsPedding.length
    let TicketCount=TicketsPedding

    if(status == "progress"){
      title="Progress"
      bg="bg-green-600"
      progress = TicketProgress.length
      TicketCount=TicketProgress
    }

    if(status == "completed"){
      title="Completed"
      bg="bg-orange-600"
      progress = TicketCompleted.length
    TicketCount=TicketCompleted
    }



  return (
    <div className={`flex flex-col w-[290px] ${bg}  h-28 px-1 pr-2  pt-1 rounded-md items-centerd text-gray-100 text-lg font-bold`}>

        <div className="flex-1 ">
        <div className="flex gap-3">
        <p className="flex-1">{status}</p>
        <p className="flex items-center justify-center h-8 text-center  text-white w-8 bg-blue-900 rounded-full">{TicketCount.length}</p>
        </div>
        </div>

        <div className="flex items-center w-[280px] bg-gray-800 border-2 border-dotted h-6 mb-2 bg-transparent rounded-full ">
            <div style={{width:`${280/ticket.length*progress}px`}} className={`flex  bg-yellow-100 h-5 z-10 rounded-full overflow-hidden absolutel`}>
                
            </div>

        </div>

    </div>
  )
}

export default DashBoradHeader