import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller,setBestSeller] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    if (products) {
      try {
        setBestSeller(products.slice(0, 9)); // Get latest 9 products
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

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'Find Paradise '} text2={'Wherever You Go'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 sm:w-1/2'>
          {/* Add description or leave it empty */}
        </p>
      </div>

      <div className='overflow-x-auto p-4'>
        <div className='flex space-x-4'>
          {bestseller.map((item) => (
            <div
              key={item._id}
              className={`relative flex-shrink-0 w-80 border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-lg ${expanded[item._id] ? 'scale-102 z-40' : ''}`}
            >
              <img
                src={item.image}
                alt={item.name || 'Product image'}
                className='w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105'
              />
              <div className='p-4 relative'>
                <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
                <div className='relative'>
                  <p
                    className={`text-gray-700 overflow-hidden ${expanded[item._id] ? 'line-clamp-none' : 'line-clamp-3'} transition-all duration-300`}
                  >
                    {item.description || 'This is a great product that offers amazing features.'}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleExpand(item._id); }}
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

export default BestSeller;
