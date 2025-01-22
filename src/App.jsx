import { Header } from "./components/Header";
import { ListStays } from "./components/ListStays";
import { Modal } from "./components/Modal";

export default function App() {
  return (
    <>
      <nav>
        <div className="mx-6 pt-5">
          <img src="https://joregesosa.github.io/windbnb_challenge/assets/logo-f7862584.svg" alt="iconoArbnb" />
        </div>
        <ul className="flex items-center justify-center border text-neutral-400 border-slate-200 rounded-xl mt-8 mx-8 h-14 gap-7 ">
          <li className="border border-slate-200 border-s-0 border-y-0 h-14 p-4">Add location</li>
          <li className="border border-slate-200 border-s-0 border-y-0 h-14 p-4">Add guests</li>
          <li>
            <img className="h-5" src="./icon/lupa.svg" alt="imagen lupa" />
          </li>
        </ul>
      </nav>
      <Header />
      <ul>
        <ListStays />
      </ul>
      <Modal />
    </>
  )
}