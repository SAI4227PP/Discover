import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import './TrainResults.css'; // Import your CSS file

// Utility function to get an array of dates for the next n days
const getNextNDays = (n) => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    dates.push(date.toLocaleDateString()); // Use date.toISOString().split('T')[0] for ISO format if preferred
  }
  return dates;
};

const TrainResults = () => {
  const location = useLocation();
  const { source, destination, date, travelClass } = location.state;

  const [trains, setTrains] = useState([]);
  const [sortOption, setSortOption] = useState("priceAsc");
  const [runningDaysFilter, setRunningDaysFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [classFilter, setClassFilter] = useState(travelClass);
  const [expandedTrain, setExpandedTrain] = useState(null);
  const [expandedClass, setExpandedClass] = useState(null);

  // Generate availability data for the next 6 days
  const availabilityData = getNextNDays(6).reduce((acc, day) => {
    acc[day] = {
      "3A": Math.floor(Math.random() * 50) + " Seats", // Simulated data
      "2A": Math.floor(Math.random() * 10) + " Seats",
      "1A": Math.floor(Math.random() * 5) + " Seats",
      "SL": Math.floor(Math.random() * 100) + " Seats"
    };
    return acc;
  }, {});

  useEffect(() => {
    // Simulate fetching train data based on form inputs
    const fetchedTrains = [
      {
        trainNumber: "12138",
        trainName: "PUNJAB MAIL",
        runningDays: "SMTWTFS",
        departureStation: source,
        arrivalStation: destination,
        departureTime: "05:10",
        arrivalTime: "07:35",
        travelDuration: "26hr 25min",
        travelDate: date,
        classes: [
          { name: "3A", fare: 1735, status: "Available" },
          { name: "2A", fare: 2490, status: "Available" },
          { name: "1A", fare: 4230, status: "Available" },
          { name: "SL", fare: 665, status: "RAC" },
        ],
      },
      {
        trainNumber: "12139",
        trainName: "EXPRESS MAIL",
        runningDays: "SWTWTFS",
        departureStation: source,
        arrivalStation: destination,
        departureTime: "07:00",
        arrivalTime: "09:45",
        travelDuration: "25hr 45min",
        travelDate: date,
        classes: [
          { name: "3A", fare: 1600, status: "Available" },
          { name: "2A", fare: 2400, status: "Available" },
          { name: "1A", fare: 4100, status: "Available" },
          { name: "SL", fare: 600, status: "Available" },
        ],
      },
      {
        trainNumber: "12140",
        trainName: "SUPERFAST MAIL",
        runningDays: "SMTWT-S",
        departureStation: source,
        arrivalStation: destination,
        departureTime: "04:45",
        arrivalTime: "06:30",
        travelDuration: "27hr 45min",
        travelDate: date,
        classes: [
          { name: "3A", fare: 1800, status: "Available" },
          { name: "2A", fare: 2700, status: "Available" },
          { name: "1A", fare: 4500, status: "Available" },
          { name: "SL", fare: 700, status: "RAC" },
        ],
      },
      // Add more train data as needed
    ];

    setTrains(fetchedTrains);
  }, [source, destination, date]);

  const sortTrains = (trains) => {
    const trainsCopy = [...trains];
    switch (sortOption) {
      case "priceAsc":
        return trainsCopy.sort((a, b) => a.classes.find(cls => cls.name === classFilter).fare - b.classes.find(cls => cls.name === classFilter).fare);
      case "priceDesc":
        return trainsCopy.sort((a, b) => b.classes.find(cls => cls.name === classFilter).fare - a.classes.find(cls => cls.name === classFilter).fare);
      case "availability":
        return trainsCopy.sort((a, b) => parseInt(b.classes.find(cls => cls.name === classFilter).availability.split(" ")[1]) - parseInt(a.classes.find(cls => cls.name === classFilter).availability.split(" ")[1]));
      case "duration":
        return trainsCopy.sort((a, b) => {
          const parseDuration = (duration) => {
            const [hours, minutes] = duration.split('hr').map(part => part.replace('min', '').trim());
            return (parseInt(hours) * 60) + parseInt(minutes);
          };
          return parseDuration(a.travelDuration) - parseDuration(b.travelDuration);
        });
      default:
        return trainsCopy;
    }
  };

  const filterTrains = (trains) => {
    return trains.filter((train) => {
      return (
        (runningDaysFilter === "" || train.runningDays.includes(runningDaysFilter)) &&
        (availabilityFilter === "" || train.classes.some((trainClass) => trainClass.status === availabilityFilter)) &&
        (classFilter === "" || train.classes.some((trainClass) => trainClass.name === classFilter))
      );
    });
  };

  const sortedTrains = sortTrains(filterTrains([...trains]));

  const handleClassClick = (train, trainClass) => {
    if (expandedTrain === train && expandedClass === trainClass) {
      setExpandedTrain(null);
      setExpandedClass(null);
    } else {
      setExpandedTrain(train);
      setExpandedClass(trainClass);
    }
  };

  const handleBook = (day) => {
    // Handle booking logic here for a specific day
    alert(`Booking ${expandedClass.name} on ${expandedTrain.trainName} for ${day}`);
  };

  // Use a ref to detect clicks outside of the details box
  const detailsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setExpandedTrain(null);
        setExpandedClass(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      {/* Filters */}
      <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
        <div>
          <label htmlFor="runningDaysFilter">Running Days:</label>
          <input
            id="runningDaysFilter"
            type="text"
            placeholder="e.g. SMTWTFS"
            value={runningDaysFilter}
            onChange={(e) => setRunningDaysFilter(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>
        <div>
          <label htmlFor="availabilityFilter">Availability Status:</label>
          <select
            id="availabilityFilter"
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="">All</option>
            <option value="Available">Available</option>
            <option value="RAC">RAC</option>
            <option value="WL">Waitlist</option>
          </select>
        </div>
        <div>
          <label htmlFor="classFilter">Class:</label>
          <select
            id="classFilter"
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="SL">Sleeper (SL)</option>
            <option value="3A">Third AC (3A)</option>
            <option value="2A">Second AC (2A)</option>
            <option value="1A">First AC (1A)</option>
          </select>
        </div>
      </div>

      {/* Sorting Option */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="sortOption">Sort By:</label>
        <select
          id="sortOption"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        >
          <option value="priceAsc">Price (Low to High)</option>
          <option value="priceDesc">Price (High to Low)</option>
          <option value="availability">Availability</option>
          <option value="duration">Travel Duration</option>
        </select>
      </div>

      {/* Train Results */}
      {sortedTrains.map((train, index) => (
        <div key={index} style={{ marginBottom: "20px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "10px", position: "relative" }}>
          <h3>{train.trainNumber} {train.trainName}</h3>
          <p>Runs on: {train.runningDays}</p>
          <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
            <div>
              <strong>{train.departureStation}</strong> <br />
              <span>{train.departureTime}</span> <br />
              <span>{train.travelDate}</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <span>{train.travelDuration}</span>
            </div>
            <div>
              <strong>{train.arrivalStation}</strong> <br />
              <span>{train.arrivalTime}</span> <br />
              <span>{new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "10px" }}>
            {train.classes.map((trainClass, classIndex) => (
              <div
                key={classIndex}
                className={`train-class-card ${expandedTrain === train && expandedClass === trainClass ? 'expanded' : ''}`}
                style={{
                  padding: "10px",
                  backgroundColor: "#e8f5e9",
                  borderRadius: "10px",
                  textAlign: "center",
                  width: "150px",
                  position: "relative",
                  cursor: "pointer"
                }}
                onClick={() => handleClassClick(train, trainClass)}
              >
                <p>{trainClass.name}</p>
                <p>₹{trainClass.fare}</p>
                <p>{trainClass.status}</p>
              </div>
            ))}
          </div>
          {expandedTrain === train && expandedClass && (
            <div ref={detailsRef} style={{
              position: "absolute",
              top: "100%",
              left: 0,
              backgroundColor: "#ffffff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
              padding: "10px",
              zIndex: 10,
              width: "100%",
              marginTop: "10px",
              overflowX: "auto"
            }}>
              <h4>Availability for Next 6 Days</h4>
              <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
                {getNextNDays(6).map((day) => (
                  <div key={day} style={{ minWidth: "150px", padding: "10px", backgroundColor: "#f1f1f1", borderRadius: "5px", textAlign: "center" }}>
                    <strong>{day}</strong>
                    <p>{expandedClass.name}: {availabilityData[day][expandedClass.name]}</p>
                    <button
                      onClick={() => handleBook(day)}
                      style={{ padding: "5px", marginTop: "10px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TrainResults;
