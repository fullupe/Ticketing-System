"use client"
import React, { createContext,Dispatch, SetStateAction } from 'react'


type ticket={
    id: string;
    status: string;
    createdAt: number;
    locations: string;
    asignedTo:string
    problemDescriptions: string;
}

type TicketContextType={
   
    ticket:ticket[];
    setTicket:(tiket:{}) =>void;

    isOpenEngUpdate:boolean;
    setIsOpenEngUpdate:(isOpenEngUpdate:boolean)=>void;



    runUpDate:boolean;
    setRunUpDate:(runUpDate:boolean)=>void;

    targetTicket:string;
    setTargetTicket:(targetTicket:string)=>void;

    isAuth:boolean;
    setIsAuth:(isAuth:boolean)=>void;

    isVisible:boolean; 
    setIsVisible:(isVisible:boolean)=>void;

    isOpenTicketUpdate:boolean,
    setIsOpenTicketUpdate:(isOpenTicketUpdate:boolean)=>void,

   

}

 export const TicketContext = createContext<TicketContextType>({
   
    ticket:[],
    setTicket:() =>[],

    isOpenEngUpdate:false,
    setIsOpenEngUpdate:()=>{},

    isOpenTicketUpdate:false,
    setIsOpenTicketUpdate:()=>{},

    runUpDate:false,
    setRunUpDate:()=>{},

    targetTicket:"",
    setTargetTicket:()=>"",

    isAuth:false,
    setIsAuth:()=>{},

    isVisible:false,
    setIsVisible:()=>{},
})

export const TicketProvider = TicketContext.Provider;


export default TicketContext;
