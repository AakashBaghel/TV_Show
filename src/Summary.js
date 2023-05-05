import React, { useState,useEffect } from 'react';
import axios from 'axios';
import TicketBookingForm from './TicketBookingForm';
import { NavLink } from 'react-router-dom';

function Summary() {
  const [showName, setShowName] = useState('');
  const [summary, setSummary] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${showName}`);
      const data = response.data;
      const summaries = data.map((item) => item.show.summary);
      const combinedSummary = summaries.join('\n');
      setSummary(combinedSummary);

    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setShowName(event.target.value);
  };

  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className='container'>
      <img width={400} src='./TvShowImg.webp'/>
    <div clasName="border">
      
  choose the tv show name and Paste it in search bar
  </div>
  <table border={1}>
  {
    
  users.map((item)=>
      <tr>
      <td className="CName">{item.show.name} </td>
      </tr>)
      
}</table>


  <div>
    
     <input type="text" value={showName} onChange={handleInputChange} />
     
     <NavLink
              to="/TicketBookingForm"
              className="navbar-link "
              onClick={() => <TicketBookingForm> </TicketBookingForm>}>
              <button className='button'>
                Click here for Tickets
              </button>
            </NavLink>
      <span>
        {" "}
      </span>
      <button className='button' onClick={handleClick}>Show Summary</button>
      {summary && <p className='summary'>{summary}</p>}<span>
        {" "}
      </span>
      
    </div>
    </div>
  );
}
export default Summary;