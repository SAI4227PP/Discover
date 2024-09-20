import React from 'react';
import '../components/TrainDetails.css';  // Create a separate CSS file for styles if needed

const TrainDetails = () => {
  return (
    <div className="container">
      <h1>IRCTC Authorized Partner - Train Booking</h1>
      <p>
        Book IRCTC or Indian Railway train tickets online quickly and easily on ixigo's train mobile app or website using your IRCTC user ID and login password...
      </p>

      <h2>Easy & Fast IRCTC Login</h2>
      <p>
        On ixigo, you can register on IRCTC, navigate IRCTC’s next-generation login process, reset your IRCTC password, and more...
      </p>

      <h2>Create Your IRCTC Login ID and Password</h2>
      <ul>
        <li>Open the ixigo trains app...</li>
        {/* Add more list items here */}
      </ul>

      <h2>Recover Your IRCTC Login ID</h2>
      <p>If you need to recover your login, follow these steps...</p>

      <h2>Indian Railways Ticket Reservation</h2>
      <p>Use our train seat availability feature to find out the seat or berth availability in your train...</p>

      <h2>IRCTC Train Ticket Booking Online</h2>
      <ul>
        <li>Open the ixigo website or download the mobile app...</li>
        {/* Add more list items here */}
      </ul>

      <h2>Top Train Routes</h2>
      <div className="train-routes">
        <div>
          <img src="/images/goa-train.jpg" alt="Goa Train" />
          <p>From Mumbai - Bangalore - Delhi - Pune</p>
        </div>
        <div>
          <img src="/images/mumbai-train.jpg" alt="Mumbai Train" />
          <p>From Pune - Delhi - Ahmedabad - Surat</p>
        </div>
        {/* Add more train routes here */}
      </div>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <div className="faq">
        <h3>Q. How can I create an IRCTC account login ID?</h3>
        <p>A: To create a new IRCTC login ID, visit the official home page of IRCTC...</p>

        <h3>Q. How can I log into my IRCTC account?</h3>
        <p>A: As for IRCTC login, open the ixigo app...</p>

        {/* Add more FAQs here */}
      </div>
    </div>
  );
};

export default TrainDetails;
