import React from 'react';
import '../components/BusDetails.css'; // Add your styles here

const BusDetails = () => {
  return (
    <div className="bus-booking-container">
      {/* Header Section */}
      <header className="header-section">
        <h1>Why Choose ixigo for Bus Ticket Booking?</h1>
        <p>
          ixigo Bus Booking is powered by AbhiBus which is India's fastest-growing online ticket booking platform. 
          AbhiBus is the official ticketing partner of several State Road Transport Corporation (SRTC) operators and 
          over 3500+ private bus partners covering more than 100,000 bus routes.
        </p>
        <div className="benefits">
          <div className="benefit-item">
            <img src="https://th.bing.com/th?id=OIP.0eYZ-bfymwRJp6Pflz6hEQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="100,000+ Bus Routes" />
            <p>100,000+ Bus Routes</p>
          </div>
          <div className="benefit-item">
            <img src="https://th.bing.com/th/id/OIP.4CTeCwj6FukFkYeFuYYemQHaDv?rs=1&pid=ImgDetMain" alt="Fastest Bus Booking" />
            <p>Fastest Bus Booking</p>
          </div>
          <div className="benefit-item">
            <img src="data:image/jpeg;base64,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" alt="24/7 Customer Support" />
            <p>24/7 Customer Support</p>
          </div>
        </div>
      </header>

      {/* SRTC Section */}
      <section className="srtc-section">
        <h2>SRTC (State Road Transport Corporation) Bus Tickets Booking</h2>
        <div className="srtc-logos">
          <img src="https://th.bing.com/th/id/OIP.iUCZbNzPjh4RUGXP99ECyQHaDq?rs=1&pid=ImgDetMain" alt="UPSRTC" />
          <img src="HRTC-logo.png" alt="HRTC" />
          
          
          <img src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-d6sr3lc9ti9cp36jp9i36rh3p7-20161208021723.Medi.jpeg" alt="TSRTC" />
          <img src="https://th.bing.com/th/id/OIP.fsp1cc7RvMe0UTpIR-eEQgHaHk?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="APSRTC" />
        </div>
      </section>

      {/* Abhi Assured Section */}
      <section className="abhi-assured-section">
        <h2>Abhi Assured</h2>
        <div className="assurance-cards">
          <div className="assurance-card">
            <img src="refund-bus-cancel.png" alt="150% Refund for Bus Cancellation" />
            <p>Upto 150% Refund for Bus Cancellation</p>
          </div>
          <div className="assurance-card">
            <img src="refund-bad-service.png" alt="100% Refund for Bad Service Quality" />
            <p>Upto 100% Refund for Bad Service Quality</p>
          </div>
          <div className="assurance-card">
            <img src="refund-bus-delays.png" alt="100% Refund for Bus Delays" />
            <p>Upto 100% Refund for Bus Delays</p>
          </div>
          <div className="assurance-card">
            <img src="refund-change-plans.png" alt="100% Refund If You Change Plans" />
            <p>Upto 100% Refund If You Change Plans</p>
          </div>
        </div>
      </section>

      {/* Live Bus Tracking */}
      <section className="live-tracking-section">
        <h2>Live Bus Tracking</h2>
        <p>
          Travelers can track their bus in real-time using a bus tracking tool, guaranteeing that travelers don't miss their bus. 
          In order to provide you peace of mind and make your bus journey hassle-free, AbhiBus has live tracking feature that 
          regularly updates the estimated time of departure for bus arrival time, and delays of your bus details. 
          When you're going to your destination or when you need to board the bus at the right location, this live bus tracking feature is quite helpful.
        </p>
      </section>

      {/* Free Cancellation Policy */}
      <section className="cancellation-policy-section">
        <h2>Free Cancellation of Bus Tickets Policy</h2>
        <p>
          ixigo understands that last-minute changes can be challenging, and that’s why we offer flexible cancellation policies. 
          On ixigo platform, it’s simple to cancel your bus tickets and get the latest refund that is due to you. 
          You can now cancel your bus ticket instantly without having to wait for the payment process.
        </p>
      </section>

      {/* Top Tourist Bus Routes */}
      <section className="top-routes-section">
        <h2>Top Tourist Bus Routes</h2>
        <ul>
          <li>Delhi to Haridwar Bus</li>
          <li>Delhi to Rishikesh Bus</li>
          <li>Bangalore to Tirupati Bus</li>
          <li>Agra to Jaipur Bus</li>
          <li>Delhi to Amritsar Bus</li>
          <li>Delhi to Jammu Bus</li>
          <li>Mumbai to Shirdi Bus</li>
          <li>Chennai to Tirupati Bus</li>
          <li>Jaipur to Bikaner Bus</li>
          <li>Hyderabad to Tirupati Bus</li>
        </ul>
      </section>

      {/* Popular Routes */}
      <section className="popular-routes-section">
        <h2>Popular Bus Routes in India</h2>
        <ul>
          <li>Bangalore to Chennai Bus</li>
          <li>Chennai to Bangalore Bus</li>
          <li>Mumbai to Goa Bus</li>
          <li>Indore to Shirdi Bus</li>
          <li>Delhi to Jaipur Bus</li>
          <li>Delhi to Chandigarh Bus</li>
          <li>Pune to Hyderabad Bus</li>
        </ul>
      </section>

      
    </div>
  );
};

export default BusDetails;
