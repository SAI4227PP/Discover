import React from 'react';

// Updated offers data without images
const offers = [
  {
    category: 'Buses',
    items: [
      {
        title: 'Discounted Regional Bus Passes',
        description: 'Save up to 30% on regional bus passes. Valid for routes across major cities and suburbs.',
        validity: 'September 1 - September 30, 2024',
        link: '#',
        bgImage: 'https://via.placeholder.com/600x400?text=Bus+Background'
      },
      {
        title: 'Weekend Getaway Bus Deals',
        description: 'Enjoy round-trip tickets at half price for weekend trips. Ideal for short getaways.',
        validity: 'Every weekend in September',
        link: '#',
        bgImage: 'https://via.placeholder.com/600x400?text=Weekend+Background'
      }
    ]
  },
  {
    category: 'Trains',
    items: [
      {
        title: 'Early Bird Discounts',
        description: 'Save 25% on train tickets when you book at least 30 days in advance.',
        validity: 'Ongoing',
        link: '#',
        bgImage: 'https://via.placeholder.com/600x400?text=Train+Background'
      },
      {
        title: 'Family Travel Packages',
        description: 'Children travel for free with every two adult tickets purchased.',
        validity: 'September 1 - September 15, 2024',
        link: '#',
        bgImage: 'https://via.placeholder.com/600x400?text=Family+Background'
      }
    ]
  },
  {
    category: 'Flights',
    items: [
      {
        title: 'Last-Minute Flight Deals',
        description: 'Up to 40% off on last-minute flights to popular destinations.',
        validity: 'Limited availability',
        link: '#',
        bgImage: 'https://via.placeholder.com/600x400?text=Flight+Background'
      },
      {
        title: 'International Flight Special',
        description: 'Get 20% off international flights with promo code: FLY20',
        validity: 'September 1 - September 30, 2024',
        link: '#',
        bgImage: 'https://via.placeholder.com/600x400?text=International+Background'
      }
    ]
  },
  {
    category: 'Vacations',
    items: [
      {
        title: 'All-Inclusive Resorts',
        description: 'Save up to 50% on all-inclusive resort packages. Includes meals, drinks, and activities.',
        validity: 'September 1 - September 30, 2024',
        link: '#',
        bgImage: 'https://via.placeholder.com/600x400?text=Resort+Background'
      },
      {
        title: 'City Breaks',
        description: '3 nights for the price of 2 in select cities. Includes accommodation and breakfast.',
        validity: 'September 1 - September 15, 2024',
        link: '#',
        bgImage: 'https://via.placeholder.com/600x400?text=City+Background'
      }
    ]
  },
  {
    category: 'Hotels',
    items: [
      {
        title: 'Stay Longer, Save More',
        description: 'Book 3 nights, get the 4th night free at participating hotels.',
        validity: 'September 1 - September 30, 2024',
        link: '#',
        bgImage: 'https://via.placeholder.com/600x400?text=Hotel+Background'
      },
      {
        title: 'Luxury Hotel Discounts',
        description: '25% off on luxury hotel stays. Perfect for a pampered getaway.',
        validity: 'September 1 - September 15, 2024',
        link: '#',
        bgImage: 'https://via.placeholder.com/600x400?text=Luxury+Background'
      }
    ]
  }
];

const OffersPage = () => {
  return (
    <div className="bg-[url('https://via.placeholder.com/1920x1080?text=Background+Image')] bg-cover bg-center min-h-screen">
      <header className="bg-blue-600 text-white py-4 bg-opacity-70">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Special Travel Offers</h1>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {offers.map((offerCategory) => (
          <div
            key={offerCategory.category}
            className="bg-white border border-gray-300 rounded-lg shadow-md mb-6 p-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-3 mb-4">
                {offerCategory.category}
              </h2>
            </div>
            <div className="space-y-4">
              {offerCategory.items.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gray-50 border border-gray-300 rounded-lg p-4 min-h-[250px] flex flex-col"
                  style={{ backgroundImage: `url(${item.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
                  <div className="relative z-10 p-4 rounded-lg bg-white bg-opacity-80">
                    <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 mb-2 text-center">{item.description}</p>
                    <p className="text-gray-600 mb-2 text-center">
                      <strong>Offer Validity:</strong> {item.validity}
                    </p>
                    <a
                      href={item.link}
                      className="text-blue-500 hover:underline text-center"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;
