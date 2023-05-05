import React, { useState } from 'react';
import './TicketBookingForm.css'; // Import CSS file

function TicketBookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showDate, setShowDate] = useState('');
  const [numTickets, setNumTickets] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book Your Tickets</h2>
      <label>
        Show name:
        <input type="text" placeholder="Enter your Showname" />
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
      </label>
      <label>
        Show Date:
        <input type="date" value={showDate} onChange={(e) => setShowDate(e.target.value)} required />
      </label>
      <label>
        Number of Tickets:
        <input type="number" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} placeholder="Enter number of tickets" min="1" required />
      </label>
      <button type="submit">Book Tickets</button>
    </form>
  );
}

export default TicketBookingForm;
