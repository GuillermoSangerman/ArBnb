import { Header } from "./components/Header";
import { ListStays } from "./components/ListStays";
import { Modal } from "./components/Modal";

export default function App() {
  return (
    <>
      <nav className="flex flex-col md:flex-row md:justify-between lg:mx-6">
        <div className="mx-6 pt-5 lg:mt-7">
          <img src="https://joregesosa.github.io/windbnb_challenge/assets/logo-f7862584.svg" alt="iconoArbnb" />
        </div>
        <ul className="flex  items-center justify-center border text-neutral-400 border-slate-800 rounded-xl mt-8 mx-8 max-w-[361px] h-14 gap-7 md:px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <li className="border border-slate-200 border-s-0 border-y-0 h-14 p-4">Add location</li>
          <li className="border border-slate-200 border-s-0 border-y-0 h-14 p-4">Add guests</li>
          <li>
            <img className="h-5" src="./icon/lupa.svg" alt="imagen lupa" />
          </li>
        </ul>
      </nav>
      <Header />
      <ul className="md:grid md:grid-cols-2 xl:grid-cols-3">
        <ListStays />
      </ul>
      <Modal />
    </>
  )
}