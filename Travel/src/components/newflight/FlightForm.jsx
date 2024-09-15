import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlightBooking = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    if (from === to) {
      setMessage('No route available: Departure and destination are the same.');
    } else if (date < today) {
      setMessage('Invalid date: The date cannot be in the past.');
    } else {
      setMessage(`Searching flights from ${from} to ${to} on ${date}`);
      navigate('/FlightList', { state: { from, to, date } });
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="heading">Book a Flight</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="from" className="label">From:</label>
            <select
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="select"
              required
            >
              <option value="">Select Airport</option>
              {/* Dummy airport options */}
              <option value="DEL">Indira Gandhi International Airport (DEL), Delhi</option>
              <option value="BOM">Chhatrapati Shivaji Maharaj International Airport (BOM), Mumbai</option>
              <option value="BLR">Kempegowda International Airport (BLR), Bangalore</option>
              <option value="MAA">Chennai International Airport (MAA), Chennai</option>
              <option value="CCU">Netaji Subhas Chandra Bose International Airport (CCU), Kolkata</option>
              <option value="HYD">Rajiv Gandhi International Airport (HYD), Hyderabad</option>
              <option value="AMD">Sardar Vallabhbhai Patel International Airport (AMD), Ahmedabad</option>
              <option value="PNQ">Pune Airport (PNQ), Pune</option>
              <option value="COK">Cochin International Airport (COK), Kochi</option>
              <option value="GOI">Goa International Airport (GOI), Goa</option>
              <option value="JAI">Jaipur International Airport (JAI), Jaipur</option>
              <option value="VNS">Lal Bahadur Shastri Airport (VNS), Varanasi</option>
              <option value="IXC">Chandigarh International Airport (IXC), Chandigarh</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="to" className="label">To:</label>
            <select
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="select"
              required
            >
              <option value="">Select Airport</option>
              {/* Dummy airport options */}
              <option value="DEL">Indira Gandhi International Airport (DEL), Delhi</option>
              <option value="BOM">Chhatrapati Shivaji Maharaj International Airport (BOM), Mumbai</option>
              <option value="BLR">Kempegowda International Airport (BLR), Bangalore</option>
              <option value="MAA">Chennai International Airport (MAA), Chennai</option>
              <option value="CCU">Netaji Subhas Chandra Bose International Airport (CCU), Kolkata</option>
              <option value="HYD">Rajiv Gandhi International Airport (HYD), Hyderabad</option>
              <option value="AMD">Sardar Vallabhbhai Patel International Airport (AMD), Ahmedabad</option>
              <option value="PNQ">Pune Airport (PNQ), Pune</option>
              <option value="COK">Cochin International Airport (COK), Kochi</option>
              <option value="GOI">Goa International Airport (GOI), Goa</option>
              <option value="JAI">Jaipur International Airport (JAI), Jaipur</option>
              <option value="VNS">Lal Bahadur Shastri Airport (VNS), Varanasi</option>
              <option value="IXC">Chandigarh International Airport (IXC), Chandigarh</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date" className="label">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input"
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="button">
              Search Flights
            </button>
          </div>
          {message && <p className="message" aria-live="polite">{message}</p>}
        </form>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f0f2f5;
          padding: 0 20px;
        }
        .form-container {
          background-color: #ffffff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
        }
        .heading {
          margin-bottom: 20px;
          font-size: 28px;
          font-weight: bold;
          color: #333;
          text-align: center;
        }
        .form {
          display: flex;
          flex-direction: column;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .label {
          display: block;
          margin-bottom: 8px;
          font-size: 16px;
          font-weight: 500;
          color: #333;
        }
        .select,
        .input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
        }
        .button {
          background-color: #007bff;
          color: #ffffff;
          border: none;
          padding: 12px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          transition: background-color 0.3s;
        }
        .button:hover {
          background-color: #0056b3;
        }
        .message {
          color: #d9534f;
          margin-top: 10px;
          text-align: center;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default FlightBooking;
