import React from 'react';
import bannerImg from '../../../assets/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    const inlineStyle = {
        backgroundImage: `url(${bannerImg})`,
    };
    return (
        <div style={inlineStyle}
            className='bg-cover md:bg-center h-screen -mt-[60px] flex justify-center items-center bg-black bg-blend-overlay bg-opacity-50'>
            <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-0'>
            <h1 className=' text-5xl font-bold md:w-[600px] text-white leading-[60px] mb-6'>
                    Elevate your productivity and achieve more with our powerful task management tools.
                </h1>
                <Link to='/dashboard' className='bg-blue-600 px-6 py-2 rounded-md text-white'>Let’s Explore</Link>
            </div>
        </div>
    );
};

export default Banner;