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
      className="p-6 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg mt-10"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Book Your Train</h2>

      <div className="mb-4">
        <label htmlFor="source" className="block text-sm font-medium text-gray-700">
          Source Station:
        </label>
        <select
          id="source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>Select a station</option>
          {stations.map((station) => (
            <option key={station} value={station}>
              {station}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
          Destination Station:
        </label>
        <select
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>Select a station</option>
          {stations.map((station) => (
            <option key={station} value={station}>
              {station}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Travel Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="class" className="block text-sm font-medium text-gray-700">
          Class:
        </label>
        <select
          id="class"
          value={travelClass}
          onChange={(e) => setTravelClass(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="SL">Sleeper (SL)</option>
          <option value="3A">Third AC (3A)</option>
          <option value="2A">Second AC (2A)</option>
          <option value="1A">First AC (1A)</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      >
        Search Trains
      </button>
    </form>
  );
};

export default TrainForm;
