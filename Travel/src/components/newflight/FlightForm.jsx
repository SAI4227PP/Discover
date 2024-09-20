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
        <form onSubmit={handleSubmit} className="form">
          <div className="form-row">
            <div className="form-group">
              <select
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="select"
                required
              >
                <option value="">From</option>
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
              <select
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="select"
                required
              >
                <option value="">To</option>
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
            <div className="form-group date-search-container">
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input"
                min={new Date().toISOString().split('T')[0]}
                required
              />
              <button type="submit" className="button">
                Search
              </button>
            </div>
          </div>
          {message && <p className="message" aria-live="polite">{message}</p>}
        </form>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 45%;
          background-color: #f5f6f7;
          padding: 10px;
          font-family: 'Roboto', sans-serif;
        }
        .form-container {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 15px;
          box-shadow: white;
          width: 95%;
          max-width: 95%; /* Ensure the form container doesn’t get too wide */
          box-sizing: border-box; /* Include padding and border in the element's total width and height */
        }
        .form {
          display: flex;
          flex-direction: column;
        }
        .form-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 15px;
          
        }
        .form-group {
          flex: 1;
          min-width: 200px;
        }
        .date-search-container {
          display: flex;
          gap: 8px;
        }
        .select,
        .input {
          width: 100%;
          padding: 12px;
          border: 1px solid #bdc3c7;
          border-radius: 6px;
          font-size: 16px;
          color: #2c3e50;
        }
        .button {
          background-color: #3498db;
          color: #ffffff;
          border: none;
          padding: 14px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          transition: background-color 0.3s;
          width: auto; /* Ensure the button's width fits its content */
          align-self: center; /* Align the button vertically with the input */
        }
        .button:hover {
          background-color: #2980b9;
        }
        .message {
          color: #e74c3c;
          margin-top: 12px;
          text-align: center;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default FlightBooking;
