import React, { useEffect } from 'react'
import { useState } from 'react'
import { fetchData } from '../utils/fetchData'
import LocalList from './LocalList'

export function Modal({ onClose, setSearch, locations, search, setLocations, numberGuests, setNumberGuests }) {

  const [numberAdutls, setNumberAdutls] = useState(0)
  const [numberChildren, setNumberChildren] = useState(0)
  const [openGuests, setOpenGuests] = useState(false)


  useEffect(() => {
    fetchData("stays.json")
      .then(data => setLocations(data))
      .catch(error => console.error(error))
  }, [])

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  const results = !search ? "" : locations.filter((dato) => dato.city.toLowerCase().includes(search.toLocaleLowerCase()))

  
  const openToggle = () => {
    setOpenGuests(true)
  }
  function incrementAdults() {
    setNumberAdutls(numberAdutls + 1)
  }
  function decrementAdults() {
    setNumberAdutls(numberAdutls - 1)
  }
  function incrementChildren() {
    setNumberChildren(numberChildren + 1)
  }
  function decrementChildren() {
    setNumberChildren(numberChildren - 1)
  }

  useEffect(() => {
    setNumberGuests(numberAdutls + numberChildren)
  }, [numberAdutls, numberChildren])
  return (
    <>
      <div className="fixed bg-black bg-opacity-60 h-screen w-full">
        <div className=" bg-white h-[80%]">
          <nav className='h-[100%] w-full'>
            <div className="mx-5 flex  items-center justify-between tracking-tight h-1/6 ">
              <span className="font-bold text-[0.8rem]">Edit your search</span>
              <button onClick={onClose} className="font-bold text-4xl">&times;</button>
            </div>
            <ul className="flex flex-col lg:flex-row lg:justify-between lg:px-10  border text-neutral-400 border-slate-200 rounded-xl mx-4 h-1/5 lg:mx-20 lg:border-none">
              <li className="flex flex-col  border border-slate-200 h-14 p-4 rounded-xl focus-within:border-black cursor-pointer lg:h-[100%] lg:w-[100%]  shadow-2xl">
                <label className="text-black text-[0.6rem] font-bold " htmlFor="add_location" >LOCATION</label>
                <input value={search} onChange={searcher} className='outline-none' id="add_location" type="text" name="add_location" placeholder="Add location" />
                <div>
                  {results &&
                    results.map(local =>
                      <ul className='flex flex-col  mt-12 w-[100%]'>
                        <LocalList
                          city={local.city}
                          setSearch={setSearch}
                        />
                      </ul>
                    )
                  }
                </div>
              </li>
              <li onClick={openToggle} className="flex flex-col border border-slate-200  h-14 p-4 rounded-xl border-t-0 focus-within:border-black cursor-pointer lg:w-[100%] lg:h-[100%]  shadow-2xl" >
                <label className="text-black text-[0.6rem] font-bol cursor-pointer" htmlFor="add_guests" >GUESTS</label>
                <input min={0} className='outline-none text-ellipsis cursor-pointer' id="add_guests" type="buttom" name="add_guests" placeholder={numberGuests >= 0 ? numberGuests + ` guests` : "Valor no valido"} readOnly />
                <div className='lg:mt-5 flex'>
                  {openGuests &&
                    <div>
                      <div className="mx-5 mt-6 h-1/2">
                        <h2 className="font-bold text-[0.9rem] text-black">Adults</h2>
                        <span className="text-neutral-400 text-[0.9rem]">Ages 13 or above</span>
                        <div className="flex items-center justify-start space-x-6 mt-2">
                          <button onClick={decrementAdults} className="border border-black rounded-md bg-neutral-200 px-2 m-1">-</button>
                          <span>{numberAdutls}</span>
                          <button onClick={incrementAdults} className="border border-black rounded-md bg-neutral-200 px-2 m-1">+</button>
                        </div>
                      </div>
                      <div className="mx-5 h-1/2">
                        <h2 className="font-bold text-[0.9rem] text-black">Children</h2>
                        <span className="text-neutral-400 text-[0.9rem]">Ages 13 or above</span>
                        <div className="flex items-center justify-start space-x-6 mt-2">
                          <button onClick={decrementChildren} className="border border-black rounded-md bg-neutral-200 px-2 m-1">-</button>
                          <span>{numberChildren}</span>
                          <button onClick={incrementChildren} className="border border-black rounded-md bg-neutral-200 px-2 m-1">+</button>
                        </div>
                      </div>
                    </div>
                  }

                </div>
              </li>


              <li className="flex justify-center h-10 translate-y-52 lg:translate-y-0 mt-2 lg:w-[100%]">
                <button onClick={onClose} className="flex items-center space-x-2 bg-red-500 rounded-xl px-5 py-2  shadow-2xl">
                  <img className="h-4" src="./icon/lupawhite.svg" alt="imagen lupa" />
                  <span className="text-white">search</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </>
  )
}
