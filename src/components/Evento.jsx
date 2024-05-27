import React from "react"

const Evento = (props) => {
  return(
    <>
      <div className="w-full bg-[#DD0035] text-white font-medium text-xl py-1">{props.horario} | {props.tipo_sesion}</div>
      <div className="w-full bg-gray-300 pt-4 pb-1">
        <h3 className="text-lg font-semibold">{props.item}</h3>
        <h4 className="italic mt-1">{props.moderador}</h4>
      </div>
    </>
  )
}

export default Evento