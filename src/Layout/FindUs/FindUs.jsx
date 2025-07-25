import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FindUs = () => {
    return (
        <div className='flex flex-col gap-3'>
            <Link to='https://www.facebook.com/md.limon.280500' className="btn hover:bg-blue-500"><FaFacebook></FaFacebook>Facebook</Link>
            <button className="btn hover:bg-blue-500"><FaTwitter></FaTwitter>Twitter</button>
            <button className="btn hover:bg-blue-500"><FaInstagram></FaInstagram>Instagram</button>
        </div>
    );
};

export default FindUs;