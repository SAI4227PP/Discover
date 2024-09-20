import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const NavItem = ({ to, imgSrc, text, onClick }) => (
    <NavLink
        to={to}
        className='flex items-center gap-2 py-2 pl-6 transition-colors duration-300 hover:bg-gray-100'
        onClick={onClick}
    >
        <img src={imgSrc} className='w-8' alt={text} />
        <p className='text-gray-700'>{text}</p>
    </NavLink>
);

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, isLoggedIn, logout } = useContext(ShopContext);

    const handleClickOutside = (e) => {
        if (!e.target.closest('.profile-dropdown')) {
            setVisible(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className='flex items-center justify-between py-5 font-medium'>
            <img src={assets.logo} className='w-36' alt="Company Logo" />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavItem to='/' imgSrc={assets.bus} text="Buses" />
                <NavItem to='/Trains' imgSrc={assets.train} text="Trains" />
                <NavItem to='/Flights' imgSrc={assets.airplane} text="Flights" />
                <NavItem to='/vacation' imgSrc={assets.summer} text="Vacation" />
                <NavItem to='/Hotels' imgSrc={assets.building} text="Hotels" />
                <NavItem to='/Offers' imgSrc={assets.discount} text="Offers" />
                <NavItem to='/TrackTicket' imgSrc={assets.ticket} text="TrackTicket" />
                <NavItem to='/CustomerSupport' imgSrc={assets.customer} text="Need Help ?" />
            </ul>

            <div className='flex items-center gap-6'>
                <div className='relative group'>
                    <img
                        className='w-5 cursor-pointer'
                        src={assets.profile_icon}
                        alt="Profile"
                    />
                    <div className='absolute right-0 hidden group-hover:block bg-slate-100 text-gray-500 rounded shadow-lg'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5'>
                            <p className='cursor-pointer hover:text-black'>My profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            {isLoggedIn ? (
                                <p className='cursor-pointer hover:text-black' onClick={logout}>Logout</p>
                            ) : (
                                <Link to='/login'>
                                    <p className='cursor-pointer hover:text-black'>Login/signup</p>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5' alt="Cart" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                        10
                    </p>
                </Link>
                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    className='w-5 cursor-pointer sm:hidden'
                    alt="Menu"
                />
            </div>

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div
                        onClick={() => setVisible(false)}
                        className='flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-300'
                    >
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Close Menu" />
                        <p>Back</p>
                    </div>
                    <NavItem to='/' imgSrc={assets.bus} text="Buses" onClick={() => setVisible(false)} />
                    <NavItem to='/Trains' imgSrc={assets.train} text="Trains" onClick={() => setVisible(false)} />
                    <NavItem to='/Flights' imgSrc={assets.airplane} text="Flights" onClick={() => setVisible(false)} />
                    <NavItem to='/vacation' imgSrc={assets.summer} text="Vacation" onClick={() => setVisible(false)} />
                    <NavItem to='/Offers' imgSrc={assets.discount} text="Offers" onClick={() => setVisible(false)} />
                    <NavItem to='/TrackTicket' imgSrc={assets.ticket} text="TrackTicket" onClick={() => setVisible(false)} />
                    <NavItem to='/Support' imgSrc={assets.support_img} text="Support" onClick={() => setVisible(false)} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
