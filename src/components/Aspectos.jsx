import React from "react"
import { RiHome5Line, RiSlideshow4Line, RiTeamLine } from "react-icons/ri"

const Aspectos = () => {
  return(
    <section className="w-full flex justify-center">
      <div className="w-[60%] h-52 -mt-28 bg-white shadow-xl py-3 px-4 flex flex-row justify-between rounded-lg">
        <div className="w-72 text-center flex flex-col gap-y-2">
          <RiSlideshow4Line className="text-9xl self-center text-[#DD0035]" />
          <span className="text-3xl font-bold ">10 Conferencias</span>
        </div>
        <div className="w-72 text-center flex flex-col gap-y-2">
          <RiHome5Line className="text-9xl self-center text-[#DD0035]" />
          <span className="text-3xl font-bold ">3 Auditorios</span>
        </div>
        <div className="w-72 text-center flex flex-col gap-y-2">
          <RiTeamLine className="text-9xl self-center text-[#DD0035]" />
          <span className="text-3xl font-bold ">+15 Expositores</span>
        </div>
      </div>
    </section>
  )
}

export default Aspectos