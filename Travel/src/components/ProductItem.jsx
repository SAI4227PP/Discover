import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { Link } from 'react-router-dom';


const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products) {
      // Assuming products are ordered by recency, slice to get latest 20
      setLatestProducts(products.slice(0, 20));
      setLoading(false);
    }
  }, [products]);

  

  if (loading) {
    return <div className='text-center py-8 text-3xl'>Loading...</div>;
  }

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'EXPLORE '} text2={'ALL THE WORLD'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 sm:w-1/2'>
          {/* Add description or leave it empty */}
        </p>
      </div>

      {/* Rendering Products */}
      <div className='container mx-auto p-4'>
        {/* Use grid layout with 3 columns and add ample space between items */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {latestProducts.map((item) => (
            <div
              key={item._id}
              className='border border-gray-300 rounded-lg shadow-md overflow-hidden'
            >
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-80 object-cover'  // Increased height
              />
              <div className='p-4'>
                <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
                <p className='text-gray-700'>
                  {item.description || 'This is a great product that offers amazing features.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
