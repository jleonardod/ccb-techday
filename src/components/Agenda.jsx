import React from "react"

const Agenda = () => {
  return(
    <div className="mt-6 w-full text-center flex flex-col items-center gap-y-8">
      <h1 className="font-bold text-gray-600 text-6xl">Agenda</h1>
      <section className="w-[90%] text-center">
        <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Auditorio Principal</div>
        <div className="w-full bg-[#DD0035] text-white font-medium text-xl py-1">8:00 - 8:10 | Sesión de Bienvenida</div>
        <div className="w-full bg-gray-300 pt-4 pb-1">
          <h3 className="text-lg font-semibold">Bienvenida Anfitriones y CCB</h3>
          <h4 className="italic mt-1">Angelica Figueroa</h4>
        </div>
        <div className="w-full bg-[#DD0035] text-white font-medium text-xl py-1">8:10 - 9:00 | Conferencia</div>
        <div className="w-full bg-gray-300 pt-4 pb-1">
          <h3 className="text-lg font-semibold">Seriamente: Gestión del Cambio</h3>
          <h4 className="italic mt-1">Mauricio Gomez</h4>
        </div>
      </section>
    </div>
  )
}

export default Agenda