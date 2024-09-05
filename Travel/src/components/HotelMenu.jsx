import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { hotelproducts } from '../assets/assets'; // Adjust the path as needed

const HotelMenu = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState({});
  const [sortType, setSortType] = useState('relevant');
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    try {
      // Assuming products are ordered by recency, slice to get latest 9
      setLatestProducts(hotelproducts.slice(0, 22));
    } catch (err) {
      setError('Failed to load products.');
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleFilter = (setter) => (e) => {
    const value = e.target.value;
    setter((prev) => {
      const updated = prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value];
      return updated;
    });
  };

  const filterProducts = useMemo(() => {
    let productsCopy = [...latestProducts];

    if (selectedPlaces.length > 0) {
      productsCopy = productsCopy.filter((item) => selectedPlaces.includes(item.places));
    }

    if (selectedLocations.length > 0) {
      productsCopy = productsCopy.filter((item) => selectedLocations.includes(item.location));
    }

    if (selectedCategories.length > 0) {
      productsCopy = productsCopy.filter((item) => selectedCategories.includes(item.category));
    }

    return productsCopy;
  }, [latestProducts, selectedPlaces, selectedLocations, selectedCategories]);

  const getFilteredAndSortedProducts = useMemo(() => {
    let productsCopy = [...filterProducts];

    switch (sortType) {
      case 'low-high':
        productsCopy.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'high-low':
        productsCopy.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default:
        break;
    }

    return productsCopy;
  }, [filterProducts, sortType]);

  if (loading) {
    return (
      <div className='text-center py-8 text-3xl'>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-center py-8 text-3xl text-red-600'>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className='my-10 flex flex-col sm:flex-row gap-6'>
      {/* Left Side: Filters */}
      <div className='min-w-60'>
        <div className='border border-gray-300 p-4 mb-4'>
          <p className='text-lg font-semibold mb-2'>Filters</p>

          {/* Category Filter */}
          <div className='mb-4'>
            <p className='text-sm font-medium mb-2'>Category</p>
            {['Goa', 'Rajasthan', 'Manipur', 'Kerala', 'Mumbai', 'Karnataka', 'Jammu', 'Delhi', 'Ooty'].map((category) => (
              <label key={category} className='block'>
                <input
                  type='checkbox'
                  value={category}
                  onChange={toggleFilter(setSelectedCategories)}
                  className='mr-2'
                />
                {category}
              </label>
            ))}
          </div>

          {/* Place Filter */}
          <div className='mb-4'>
            <p className='text-sm font-medium mb-2'>Places</p>
            {['Beach', 'City', 'Countryside'].map((place) => (
              <label key={place} className='block'>
                <input
                  type='checkbox'
                  value={place}
                  onChange={toggleFilter(setSelectedPlaces)}
                  className='mr-2'
                />
                {place}
              </label>
            ))}
          </div>

          {/* Location Filter */}
          <div>
            <p className='text-sm font-medium mb-2'>Locations</p>
            {['USA', 'Europe', 'Asia'].map((location) => (
              <label key={location} className='block'>
                <input
                  type='checkbox'
                  value={location}
                  onChange={toggleFilter(setSelectedLocations)}
                  className='mr-2'
                />
                {location}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Products and Sorting */}
      <div className='flex-1'>
        {/* Sorting Dropdown - Right Aligned */}
        <div className='flex justify-end mb-4'>
          <div className='flex items-center'>
            <label htmlFor='sort' className='text-sm font-medium text-gray-700 mr-2'>
              Sort by:
            </label>
            <select
              id='sort'
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className='border-2 border-gray-300 px-2 py-1 text-sm'
            >
              <option value='relevant'>Relevant</option>
              <option value='low-high'>Price: Low to High</option>
              <option value='high-low'>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {getFilteredAndSortedProducts.map((item) => (
            <div
              key={item.id}
              className='relative border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-lg'
            >
              <Link to={`/booking/${item.id}`}>
                <img
                  src={item.image.length > 0 ? item.image[0] : '/path/to/default-image.jpg'}
                  alt={item.name || 'Product image'}
                  className='w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110'
                />
              </Link>
              <div className='p-4'>
                <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
                <p className='text-gray-900 font-semibold mb-2'>${parseFloat(item.price).toFixed(2)}</p>
                <div className='relative'>
                  <p
                    id={`description-${item.id}`}
                    className={`text-gray-700 overflow-hidden ${expanded[item.id] ? 'line-clamp-none' : 'line-clamp-3'} transition-all duration-300`}
                  >
                    {item.description || 'This is a great product that offers amazing features.'}
                  </p>
                  <button
                    onClick={() => setExpanded((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                    className='text-blue-500 hover:underline focus:outline-none absolute bottom-2 right-2'
                    aria-expanded={expanded[item.id]}
                    aria-controls={`description-${item.id}`}
                  >
                    {expanded[item.id] ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelMenu;
