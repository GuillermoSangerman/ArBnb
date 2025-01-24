import React from 'react'

export default function Loading() {
    return (
        <>
            <li 
            className="m-8 max-w-[361px]  cursor-pointer animate-pulse"
            >
                <img
                    className="rounded-[1.5rem] mb-3 object-cover h-[238px]  bg-gray-200"
                    height={238}
                    width={361}
                />
                <div className="flex justify-between px-1 ">
                    <span className=" px-3 py-1 h-2 rounded bg-gray-200" >
                    </span>
                    <span className="px-24 py-1 h-2 rounded bg-gray-200">
                    </span>
                    <span>⭐</span>
                </div>
                <div className="mt-2 mx-3 h-2 rounded bg-gray-200">
                    <span></span>
                </div>
            </li>
        </>
    )
}
