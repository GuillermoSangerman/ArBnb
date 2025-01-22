import React from 'react'

export function Modal() {
  return (
    <>
        <div className="fixed bg-black bg-opacity-60 h-screen w-full hidden">
        <div className=" bg-white h-[80%]">
          <nav>
            <div className="mx-5 pt-5 flex items-center justify-between tracking-tight ">
              <span className="font-bold text-[0.8rem]">Edit your search</span>
              <button className="font-bold text-4xl">&times;</button>
            </div>
            <ul className="flex flex-col border text-neutral-400 border-slate-200 rounded-xl mt-4 mx-4 h-auto">
              <li className="flex flex-col  border border-slate-200 border-x-0 border-t-0 h-14 p-4">
                <label className="text-black text-[0.6rem] font-bold " htmlFor="add_location" >LOCATION</label>
                <input id="add_location" type="text" name="add_location" placeholder="Add location" />
              </li>
              <li className="flex flex-col  border border-slate-200 border-x-0 border-y-0 h-14 p-4">
                <label className="text-black text-[0.6rem] font-bold" htmlFor="add_guests" >GUESTS</label>
                <input id="add_guests" type="text" name="add_guests" placeholder="Add guests" />
              </li>
            </ul>
            <div className="mx-5 mt-6">
              <h2 className="font-bold text-[0.9rem]">Adults</h2>
              <span className="text-neutral-400 text-[0.9rem]">Ages 13 or above</span>
              <div className="flex items-center justify-start space-x-6 mt-2">
                <button className="border border-black rounded-md bg-neutral-200 px-2 m-1">-</button>
                <span>0</span>
                <button className="border border-black rounded-md bg-neutral-200 px-2 m-1">+</button>
              </div>
            </div>
            <div className="mx-5 mt-6">
              <h2 className="font-bold text-[0.9rem]">Children</h2>
              <span className="text-neutral-400 text-[0.9rem]">Ages 13 or above</span>
              <div className="flex items-center justify-start space-x-6 mt-2">
                <button className="border border-black rounded-md bg-neutral-200 px-2 m-1">-</button>
                <span>0</span>
                <button className="border border-black rounded-md bg-neutral-200 px-2 m-1">+</button>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="flex items-center space-x-2 bg-red-500 rounded-xl px-5 py-1">
                <img className="h-5" src="./icon/lupawhite.svg" alt="imagen lupa" />
                <span className="text-white">search</span>
              </button>
            </div>
          </nav>
        </div>

      </div>
    </>
  )
}
