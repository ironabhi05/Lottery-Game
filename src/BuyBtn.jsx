import React from 'react'
export default function BuyBtn({onClick}) {
    let style={
        backgroundColor: "red",
        border:'none',
        padding: '5px 10px',
        color: 'white',
        borderRadius:'7px',
        cursor: 'pointer',
        fontSize: '16px',
    }
    return (
        <>
            <button style={style} onClick={onClick}>Generat Ticket</button>
        </>
    )
}
