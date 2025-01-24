import React from 'react'

export default function LocalList({ city, setSearch }) {

    return (
        <>
                <li className='h-4 flex'>
                <img className='h-4' src="/icon/location.svg" alt="icono locacion" />
                   <button onClick={() => setSearch(city + " " + " Finland")}>{city} Finland</button>
                </li>
        </>


    )
}
