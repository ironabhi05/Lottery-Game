import React from 'react'
import { useState } from 'react'
import { genTicket, sum } from './helper'
import Ticket from './Ticket'
import Wisess from './Wisess'
import BuyBtn from './BuyBtn'
import './Lottary.css'
import "aos/dist/aos.css";
import AOS from "aos";

export default function Lottary({ n = 3, winningSum = 15 }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n))
    }
    return (
        <div className='screen' >
            <Ticket ticket={ticket} />
            <br />
            <div className="BtnDiv">
                <BuyBtn onClick={buyTicket} />
            </div>
            <div className="wisess">
                <span>{isWinning ? <Wisess /> : ' '}</span>
            </div>
        </div>
    );
}
