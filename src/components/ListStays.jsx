import React, { useEffect, useState } from 'react'



export function ListStays({stays}) {

    return (
        <>
            {stays &&
                stays.map(infoApi =>
                    <li key={infoApi.title} className="m-8 max-w-[361px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
                        <img className="rounded-[1.5rem] mb-3 object-cover h-[238px]" height={238} width={361} src={infoApi.photo} alt={infoApi.title}  />
                        <div className="flex justify-between px-1">
                            {infoApi.superHost === true &&
                            <span 
                                className="border border-slate-600 rounded-xl px-3 font-bold text-neutral-600 text-[0.7rem] py-1">
                                    SUPERHOST
                            </span>}
                            <span
                                className="font-bold text-neutral-400 text-[0.8rem] tracking-wide">
                                    {`${infoApi.type}. ${infoApi.beds === null ? "" : infoApi.beds + ' beds.' } `} </span>
                            <span>⭐{infoApi.rating}</span>
                        </div>
                        <div className="mt-2 mx-3 font-bold text-[0.9rem] tracking-wide">
                            <span>{infoApi.title} </span>
                        </div>
                    </li>
                )}
        </>
    )
}
