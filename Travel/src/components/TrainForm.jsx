import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Example list of Indian train stations
const stations = [
  "New Delhi",
  "Mumbai CST",
  "Kolkata",
  "Chennai Egmore",
  "Bangalore City",
  "Hyderabad",
  "Pune",
  "Jaipur",
  "Ahmedabad",
  "Lucknow",
  "Kanpur",
  "Patna",
  "Nagpur",
  "Guwahati",
  "Bhopal",
  "Varanasi",
  "Amritsar",
  "Agra",
  "Indore",
  "Rajkot",
  "Surat"
];

const TrainForm = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelClass, setTravelClass] = useState("SL");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!source || !destination || !date) {
      alert("Please fill in all fields.");
      return;
    }

    // Redirect to TrainResults page with form data
    navigate("/TrainResult", { state: { source, destination, date, travelClass } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg mt-10"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Book Your Train</h2>

      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1">
          <select
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            aria-label="Source Station"
          >
            <option value="" disabled>Select Source Station</option>
            {stations.map((station) => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <select
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            aria-label="Destination Station"
          >
            <option value="" disabled>Select Destination Station</option>
            {stations.map((station) => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            aria-label="Travel Date"
          />
        </div>

        <div className="flex-1">
          <select
            id="class"
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            aria-label="Travel Class"
          >
            <option value="SL">Sleeper (SL)</option>
            <option value="3A">Third AC (3A)</option>
            <option value="2A">Second AC (2A)</option>
            <option value="1A">First AC (1A)</option>
          </select>
        </div>

        <div className="flex-none">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default TrainForm;
