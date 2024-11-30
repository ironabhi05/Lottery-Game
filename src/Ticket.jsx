import React from 'react'
import TicketNum from './TicketNum'
import './Ticket.css'
let style={
    width:'30px',
    height:'auto',
    padding:'5px',
    fontSize:'3rem',
    borderRadius:'10px',
    backgroundColor:'red',
    border:'1px solid black',
}
export default function Ticket({ticket}) {
  return (
    <div className='Ticket'>
        <span style={style}><TicketNum num={ticket[0]} /></span>
        <span style={style}><TicketNum num={ticket[1]} /></span>
        <span style={style}><TicketNum num={ticket[2]} /></span>
        <span style={style}><TicketNum num={ticket[3]} /></span>
        {/* {
            ticket.map((num, idx)=>(
                <TicketNum num={num} key={idx} />
            ))
        } */}
    </div>
  )
}
