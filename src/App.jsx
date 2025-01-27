import { ListStays } from "./components/ListStays";
import { Modal } from "./components/Modal";
import { useState, useEffect } from "react";
import { Header } from "./components/Header"
import { fetchData } from "./utils/fetchData";
import Loading from "./components/Loading";

export default function App() {
  const [openModal, setOpenModal] = useState(false)
  const [stays, setStays] = useState([])
  const [locations, setLocations] = useState([])
  const [search, setSearch] = useState("")
  const [numberGuests, setNumberGuests] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetchData("stays.json")
        .then(data => setStays(data))
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    }, 2000);

  }, [])


  const toggleModal = () => {
    setOpenModal((prevState) => !prevState)
  }
  return (
    <>
      {openModal &&
        <Modal
          locations={locations}
          setLocations={setLocations}
          search={search}
          setSearch={setSearch}
          onClose={toggleModal}
          numberGuests={numberGuests}
          setNumberGuests={setNumberGuests}
          stays={stays}
          setStays={setStays}
        />
      }
      <nav className="flex flex-col md:flex-row md:justify-between lg:mx-6">
        <div className="mx-6 pt-5 lg:mt-7">
          <img src="https://joregesosa.github.io/windbnb_challenge/assets/logo-f7862584.svg" alt="iconoArbnb" />
        </div>
        <ul onClick={toggleModal} className="flex  items-center justify-center border text-neutral-400 border-slate-800 rounded-xl mt-8 mx-8 max-w-[361px] h-14 gap-7 md:px-2 cursor-pointer ">
          <li className="border border-slate-200 border-s-0 border-y-0 h-14 p-4">{!search ? "Add location" : search + " Finland"}</li>
          <li className="border border-slate-200 border-s-0 border-y-0 h-14 p-4">{!numberGuests ? "Add guests" : numberGuests + " " + " guests"}</li>
          <li>
            <img className="h-5" src="./icon/lupa.svg" alt="imagen lupa" />
          </li>

        </ul>
      </nav>
      <Header
        stays={stays.length}
      />
      <ul className="md:grid md:grid-cols-2 xl:grid-cols-3">

        <ListStays
          arrayStays={stays}
        />


      </ul>
      {loading &&
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 list-none">
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </div>
      }

    </>
  )
}

