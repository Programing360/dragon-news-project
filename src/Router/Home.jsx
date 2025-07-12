import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
const Home = () => {
    const time = moment().format("dddd, MMMM Do YYYY")
    return (
        <div className='container mx-auto gap-3 flex flex-col items-center justify-center'>
            <img className='w-[300px] mx-auto' src={logo} alt="" />
            <p className='text-sky-950 text-shadow-2xs text-shadow-sky-300'>Journalisim without Fear or Favore</p>
            <p>
                {time}
            </p>
            <div className='flex items-center bg-gray-300 p-2 gap-2'>
                <button className='btn bg-amber-600'>Latest</button>
                <Marquee speed={100}>
                    <Link to="/">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, ab dolore, blanditiis dolores porro doloremque accusantium itaque.</p>
                    </Link>
                    <Link to="/">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, ab dolore, blanditiis dolores porro doloremque accusantium itaque.</p>
                </Link>
                <Link to="/">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, ab dolore, blanditiis dolores porro doloremque accusantium itaque.</p>
                </Link>
                </Marquee>
            </div>
        </div>
    );
};

export default Home;