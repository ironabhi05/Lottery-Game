import './App.css'
import { useEffect } from 'react';
import Lottary from './Lottary'

import Ticket from './Ticket'
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
    <div className="container">
      <div className="giftCard">
        <h1>Term & Conditions</h1>
        <ul>
          <li>Do not share your ticket with anyone</li>
          <li>Each ticket provides one entry into the lottery.</li>
          <li>If you win, you will be contacted via email</li>
          <li>Only one winner will be selected</li>
          <li>Winners will be selected at random using a verified and fair method.</li>
        </ul>
      </div>
      <div className="jackpot">
      </div>
      <div className="winnerCard">
      </div>
      <div className="priceCard">
      </div>
      <div className="wheel"></div>

    <div className="main">
      <Lottary n={4} winningSum={18}/>
      </div>
  
      </div>
    </>
  )
}

export default App
