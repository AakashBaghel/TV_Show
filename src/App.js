import React, { useEffect, useState } from "react"

import {BrowserRouter , Router, Route, Routes, NavLink} from "react-router-dom"
import Home from "./Home";
import Summary from "./Summary";
import TicketBookingForm from "./TicketBookingForm";

const App = () => {
  
  return (
    <div>
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          </Route >
          <Route path="/summary" element={<Summary/>}>
          </Route >
          <Route path="/TicketBookingForm" element={<TicketBookingForm/>}>
          </Route >
          </Routes></BrowserRouter>
      </div>
  );
}

export default App;