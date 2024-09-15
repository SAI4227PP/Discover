import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/App.css'; // Import a CSS file for styling

const CLIENT_ID = 'sb7JOPog2jPLoszk6jCbrRw0Hi2YRAmL';
const CLIENT_SECRET = 'iqUPcMa4RRGLeYdV';

const formatHotelData = (hotel) => ({
  chainCode: hotel.chainCode || '',
  iataCode: hotel.iataCode || '',
  dupeId: hotel.dupeId || '',
  name: hotel.name || '',
  hotelId: hotel.hotelId || '',
  geoCode: {
    latitude: hotel.geoCode?.latitude || null,
    longitude: hotel.geoCode?.longitude || null,
  },
  address: {
    countryCode: hotel.address?.countryCode || '',
  },
  lastUpdate: hotel.lastUpdate || '',
  image: hotel.image || 'https://via.placeholder.com/150', // Placeholder image if not available
});

const Hotellist = () => {
  const [accessToken, setAccessToken] = useState('');
  const [cityCode, setCityCode] = useState('');
  const [hotelsByCity, setHotelsByCity] = useState([]);
  const [hotelsByGeocode, setHotelsByGeocode] = useState([]);
  const [hotelsByIds, setHotelsByIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await axios.post(
          'https://test.api.amadeus.com/v1/security/oauth2/token',
          new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
          }),
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        setAccessToken(response.data.access_token);
      } catch (error) {
        setError('Error fetching access token');
        console.error('Error fetching access token:', error);
      }
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (!accessToken) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const [hotelsByGeocodeResponse, hotelsByIdsResponse] = await Promise.all([
          axios.get(
            'https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-geocode',
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/vnd.amadeus+json',
              },
              params: {
                latitude: 34.0522,
                longitude: -118.2437,
                radius: 5000,
              }
            }
          ),
          axios.get(
            'https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-hotels',
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/vnd.amadeus+json',
              },
              params: { hotelIds: 'ACPAR419' }
            }
          )
        ]);

        setHotelsByGeocode(hotelsByGeocodeResponse.data.data.map(formatHotelData));
        setHotelsByIds(hotelsByIdsResponse.data.data.map(formatHotelData));

      } catch (error) {
        setError('Error fetching hotels data');
        console.error('Error fetching hotels data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [accessToken]);

  const handleCitySubmit = async (e) => {
    e.preventDefault();
    if (!cityCode.trim()) {
      setFormError('City code is required');
      return;
    }

    setLoading(true);
    setFormError('');
    try {
      const response = await axios.get(
        'https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/vnd.amadeus+json',
          },
          params: { cityCode: cityCode.trim() }
        }
      );
      setHotelsByCity(response.data.data.map(formatHotelData));
    } catch (error) {
      setError('Error fetching hotels by city');
      console.error('Error fetching hotels by city:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Hotel List</h1>

      <form onSubmit={handleCitySubmit}>
        <label>
          Enter City Code:
          <input
            type="text"
            value={cityCode}
            onChange={(e) => setCityCode(e.target.value)}
            placeholder="e.g., LAX"
          />
        </label>
        <button type="submit">Search Hotels</button>
        {formError && <p style={{ color: 'red' }}>{formError}</p>}
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h2>Hotels by City</h2>
      <div className="hotel-container">
        {hotelsByCity.length > 0 ? (
          hotelsByCity.map(hotel => (
            <div className="hotel-card" key={hotel.hotelId}>
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p>{hotel.address.countryCode}</p>
                <p>Lat: {hotel.geoCode.latitude}, Long: {hotel.geoCode.longitude}</p>
                <p>Last Updated: {new Date(hotel.lastUpdate).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hotels found for the city.</p>
        )}
      </div>

      <h2>Hotels by Geocode</h2>
      <div className="hotel-container">
        {hotelsByGeocode.length > 0 ? (
          hotelsByGeocode.map(hotel => (
            <div className="hotel-card" key={hotel.hotelId}>
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p>{hotel.address.countryCode}</p>
                <p>Lat: {hotel.geoCode.latitude}, Long: {hotel.geoCode.longitude}</p>
                <p>Last Updated: {new Date(hotel.lastUpdate).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hotels found for the geocode.</p>
        )}
      </div>

      <h2>Hotels by IDs</h2>
      <div className="hotel-container">
        {hotelsByIds.length > 0 ? (
          hotelsByIds.map(hotel => (
            <div className="hotel-card" key={hotel.hotelId}>
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p>{hotel.address.countryCode}</p>
                <p>Lat: {hotel.geoCode.latitude}, Long: {hotel.geoCode.longitude}</p>
                <p>Last Updated: {new Date(hotel.lastUpdate).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hotels found for the IDs.</p>
        )}
      </div>
    </div>
  );
};

export default Hotellist;
