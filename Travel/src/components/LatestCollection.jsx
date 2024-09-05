import React, { useContext, useEffect, useState, useRef } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    if (products) {
      try {
        // Assuming products are ordered by recency, slice to get latest 9
        setLatestProducts(products.slice(0, 9));
      } catch (err) {
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    }
  }, [products]);

  const toggleExpand = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const refs = useRef({});

  useEffect(() => {
    latestProducts.forEach((item) => {
      const descElement = refs.current[`desc-${item._id}`];
      const buttonElement = refs.current[`button-${item._id}`];

      if (descElement && buttonElement) {
        const descRect = descElement.getBoundingClientRect();
        const containerRect = descElement.parentElement.getBoundingClientRect();
        const bottomSpace = containerRect.bottom - descRect.bottom;

        if (expanded[item._id]) {
          buttonElement.style.position = 'static';
          buttonElement.style.marginTop = '10px';
        } else {
          buttonElement.style.position = 'absolute';
          buttonElement.style.bottom = `${bottomSpace + 10}px`;
          buttonElement.style.right = '10px';
        }
      }
    });
  }, [latestProducts, expanded]);

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
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'EXPLORE '} text2={'ALL THE WORLD'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 sm:w-1/2'>
          {/* Add description or leave it empty */}
        </p>
      </div>

      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {latestProducts.map((item) => (
            <div
              key={item._id}
              className='relative border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-lg'
            >
              <img
                src={item.image}
                alt={item.name || 'Product image'}
                className='w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110'
              />
              <div className='p-4 relative'>
                <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
                <div className='relative'>
                  <p
                    ref={(el) => (refs.current[`desc-${item._id}`] = el)}
                    className={`text-gray-700 overflow-hidden ${expanded[item._id] ? 'line-clamp-none' : 'line-clamp-3'} transition-all duration-300`}
                  >
                    {item.description || 'This is a great product that offers amazing features.'}
                  </p>
                  <button
                    ref={(el) => (refs.current[`button-${item._id}`] = el)}
                    onClick={() => toggleExpand(item._id)}
                    className='text-blue-500 hover:underline focus:outline-none absolute'
                    style={{
                      right: '10px',
                      bottom: expanded[item._id] ? '10px' : '2px',
                      position: expanded[item._id] ? 'static' : 'absolute',
                    }}
                  >
                    {expanded[item._id] ? 'Read Less' : 'Read More'}
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

export default LatestCollection;
