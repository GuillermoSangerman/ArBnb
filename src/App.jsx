export default function App() {
  return (
    <>


      <div className="fixed bg-black bg-opacity-60 h-screen w-full ">
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
                <img className="h-5" src="\public\lupawhite.svg" alt="imagen lupa" />
                <span className="text-white">search</span>
              </button>
            </div>
          </nav>
        </div>

      </div>
      <nav>
        <div className="mx-6">
          <img src="https://joregesosa.github.io/windbnb_challenge/assets/logo-f7862584.svg" alt="iconoArbnb" />
        </div>
        <ul className="flex items-center justify-center border text-neutral-400 border-slate-200 rounded-xl mt-8 mx-8 h-14 gap-7 ">
          <li className="border border-slate-200 border-s-0 border-y-0 h-14 p-4">Add location</li>
          <li className="border border-slate-200 border-s-0 border-y-0 h-14 p-4">Add guests</li>
          <li>
            <img className="h-5" src="\public\lupa.svg" alt="imagen lupa" />
          </li>
        </ul>
      </nav>
      <header className="flex items-center justify-between mt-8 mx-5">
        <h1 className="text-2xl font-bold tracking-wide">Stays in Finland</h1>
        <h2 className="tracking-tight">12+ stays</h2>
      </header>
      <ul>
        <li className="m-8">
          <img className="rounded-[1.5rem] mb-3" src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="" />
          <div className="flex justify-between px-1">
            <span className="border border-slate-600 rounded-xl px-3 font-bold text-neutral-600 text-[0.7rem] py-1">SUPERHOST</span>
            <span className="font-bold text-neutral-400 text-[0.8rem] tracking-wide">Lorem ipsum dolor sit</span>
            <span>⭐4.5</span>
          </div>
          <div className="mt-2 mx-3 font-bold text-[0.9rem] tracking-wide">
            <span>Lorem ipsum dolor 1900 sit amet</span>
          </div>
        </li>
        <li className="m-7">
          <img className="rounded-[1.5rem] mb-3" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="" />
          <div className="flex justify-between px-1">
            <span className="border border-slate-600 rounded-xl px-3 font-bold text-neutral-600 text-[0.7rem] py-1">SUPERHOST</span>
            <span className="font-bold text-neutral-400 text-[0.8rem] tracking-wide">Lorem ipsum dolor sit</span>
            <span>⭐4.5</span>
          </div>
          <div className="mt-2 mx-3 font-bold text-[0.9rem] tracking-wide">
            <span>Lorem ipsum dolor 1900 sit amet</span>
          </div>
        </li>

      </ul>

    </>
  )
}