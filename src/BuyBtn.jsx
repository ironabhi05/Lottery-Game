import React from 'react'
import './App.css'
export default function BuyBtn({onClick}) {
    return (
        <>
            <button className='Btn' onClick={onClick}>Generat Ticket</button>
        </>
    )
}
