import React from 'react'

type Props = {
  title:string,
  bg:string,
  count:number,
}

const ClientTicketHeader = ({title, bg, count}: Props) => {


    return (
        <div className={`flex w-full ${bg}  h-12 space-x-2 px-1 py-1 rounded-md items-center text-gray-100 text-lg font-bold `}>
        <p className="flex-1">{title}</p>
        <p className="flex items-center justify-center h-8 text-center  text-white w-8 bg-blue-900 rounded-full">{count}</p>
    </div>
    )
}

export default ClientTicketHeader
