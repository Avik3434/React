import React from 'react'

function Card({name="Admin"}) {

    return (

        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg ">
            <img className="w-full" src="https://images.stockcake.com/public/1/e/e/1eee8705-bc43-475f-846a-f28fd3565fff_large/sunset-mountains-snow-stockcake.jpg" alt="Sunset in the mountains"></img>
            <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-white">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}

export default Card