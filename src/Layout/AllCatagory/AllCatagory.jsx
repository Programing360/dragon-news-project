import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sports from '../Sports/Sports';

const AllCatagory = () => {

    const [Catagory, setCatagory] = useState([])
    console.log(Catagory)
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(catagoryBtn => setCatagory(catagoryBtn.data.news_category))
    }, [])
    return (
        <div className='flex flex-col'>
            <h1 className="font-semibold">All Catagory {Catagory.length}</h1>
            <div>
                {
                    Catagory.map(singleCategory =>
                        <NavLink to={`/category/${singleCategory.category_id}`} key={singleCategory.category_id} className='btn bg-gray-100 my-3 w-full flex items-center' >{singleCategory.category_name}</NavLink>
                    )
                }
            </div>
            <Sports></Sports>
        </div>
    );
};

export default AllCatagory;