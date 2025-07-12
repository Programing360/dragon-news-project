import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='flex flex-col gap-3'>
            <button className="btn hover:bg-blue-500"><FaFacebook></FaFacebook> Facebook</button>
            <button className="btn hover:bg-blue-500"><FaTwitter></FaTwitter>Twitter</button>
            <button className="btn hover:bg-blue-500"><FaInstagram></FaInstagram>Instagram</button>
        </div>
    );
};

export default FindUs;