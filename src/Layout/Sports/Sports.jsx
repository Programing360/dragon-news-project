import moment from 'moment';
import React, { useEffect, useState } from 'react';

const Sports = () => {

    const [sport, setSport] = useState([])
    const time = moment().format(" MMMM Do YYYY")
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/category/04')
            .then(res => res.json())
            .then(data => setSport(data.data))
    }, [])


    return (
        <div>
            <h1 className='font-bold'>Sports</h1>
            {
                sport.map(sport => <div className="card bg-base-100 shadow-sm mt-4">
                    <figure className="px-2 pt-3">
                        <img
                            src={sport.image_url}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-lg font-semibold">{sport.title}</h2>
                       
                        <div className="flex gap-15 ">
                            <h3 className='font-semibold'>Sport</h3>
                            <h3>{time}</h3>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Sports;