import React from 'react'
import TicketNum from './TicketNum'
import './Ticket.css'
export default function Ticket({ticket}) {
  return (
    <div className='Ticket'>
        <span className='numbers'><TicketNum num={ticket[0]} /></span>
        <span className='numbers'><TicketNum num={ticket[1]} /></span>
        <span className='numbers'><TicketNum num={ticket[2]} /></span>
        <span className='numbers'><TicketNum num={ticket[3]} /></span>
        {/* {
            ticket.map((num, idx)=>(
                <TicketNum num={num} key={idx} />
            ))
        } */}
    </div>
  )
}
