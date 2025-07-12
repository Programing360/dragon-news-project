import React from 'react';
import { FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
const NewsCard = ({ news }) => {
    // console.log(news)
    return (
        <div className="bg-base-100 shadow-xl cards rounded-xl overflow-hidden p-4 mb-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={news.author?.img || "https://i.pravatar.cc/100"} alt="author" />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold text-base">{news.author?.name || "Unknown Author"}</h2>
                        <p className="text-sm text-gray-500">{news.author?.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-2 text-xl text-gray-500">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Title & Image */}
            <h3 className="font-bold text-lg mb-3">{news.title}</h3>
            <img src={news.image_url } alt="news" className=" h-48 object-cover rounded-md" />

            {/* Details */}
            <p className="text-sm text-gray-700 mt-3">
                {news.details.slice(0, 150)}...
                <Link to={`/news/${news._id}`} className="text-blue-600 font-medium cursor-pointer"> Read More</Link>
            </p>

            {/* Footer */}
            <div className="mt-4 flex justify-between items-center">
                <div className="rating rating-sm">
                    <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <span className="ml-2 text-sm font-medium">{news.rating?.number || "N/A"}</span>
                </div>
                <div className="flex items-center text-gray-500 gap-1">
                    <FaEye /> <span className="text-sm">{news.total_view || 0}</span>
                </div>
            </div>
        </div>
    );
};


export default NewsCard;