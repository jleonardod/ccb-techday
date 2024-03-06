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
      <section className="w-[90%] text-center flex justify-between mt-0">
        <div className="w-[30%] flex flex-col">
          <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Auditorio Principal</div>
          <div className="w-full bg-[#DD0035] text-white font-medium text-xl py-1">9:00 - 9:40 | Conferencia</div>
          <div className="w-full bg-gray-300 pt-4 pb-1">
            <h3 className="text-lg font-semibold">Arquitecturas Modernas</h3>
            <h4 className="italic mt-1">Oscar Bermudez</h4>
          </div>
        </div>
        <div className="w-[30%] flex flex-col">
          <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Salon 1</div>
          <div className="w-full bg-[#DD0035] text-white font-medium text-xl py-1">9:00 - 9:40 | Conferencia</div>
          <div className="w-full bg-gray-300 pt-4 pb-1">
            <h3 className="text-lg font-semibold">¡Nuevas tecnologías, nuevos roles, nuevos retos! </h3>
            <h4 className="italic mt-1">Erwin Rene Ome - Carolina Gutierrez</h4>
          </div>
        </div>
        <div className="w-[30%] flex flex-col">
          <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Salon 2</div>
          <div className="w-full bg-[#DD0035] text-white font-medium text-xl py-1">9:00 - 9:40 | Conferencia</div>
          <div className="w-full bg-gray-300 pt-4 pb-1">
            <h3 className="text-lg font-semibold">Ciberseguridad</h3>
            <h4 className="italic mt-1">Jean Paul Ariza</h4>
          </div>
        </div>
      </section>
      <section className="w-[90%] text-center">
        <div className="w-full bg-[#0B2D43] rounded-lg text-white font-semibold text-2xl py-2 italic">Coffee Break</div>
      </section>
      <section className="w-[90%] text-center">
        <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Auditorio Principal</div>
        <div className="w-full bg-[#DD0035] text-white font-medium text-xl py-1">10:00 - 10:40 | Conversatorio</div>
        <div className="w-full bg-gray-300 pt-4 pb-1">
          <h3 className="text-lg font-semibold">AI + DevOps + Sec</h3>
          <h4 className="italic mt-1">Diego Rodriguez</h4>
        </div>
      </section>
      <section className="w-[90%] text-center flex justify-between mt-0">
        <div className="w-[30%] flex flex-col">
          <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Auditorio Principal</div>
          <div className="w-full bg-[#DD0035] text-white font-medium text-xl py-1">10:40 - 12:00 | Conferencia</div>
          <div className="w-full bg-gray-300 pt-4 pb-1">
            <h3 className="text-lg font-semibold">¡Usemos copilotos! <br /> La era de la IA colaborativa</h3>
            <h4 className="italic mt-1">Jackson Hernandez</h4>
          </div>
        </div>
        <div className="w-[30%] flex flex-col">
          <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Salon 1</div>
          <div className="w-full bg-[#DD0035] text-white font-medium text-xl py-1">10:40 - 11:20 | Conferencia</div>
          <div className="w-full bg-gray-300 pt-4 pb-1">
            <h3 className="text-lg font-semibold">Visualización de Datos VisOps</h3>
            <h4 className="italic mt-1">Yair Panqueva</h4>
          </div>
          <div className="w-full bg-[#DD0035] text-white font-medium text-xl py-1">11:20 - 12:00 | Conferencia</div>
          <div className="w-full bg-gray-300 pt-4 pb-1">
            <h3 className="text-lg font-semibold">GenAI en los procesos de calidad</h3>
            <h4 className="italic mt-1">Jose Espinel</h4>
          </div>
        </div>
        <div className="w-[30%] flex flex-col">
          <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Salon 2</div>
          <div className="w-full bg-[#DD0035] text-white font-medium text-xl py-1">10:40 - 11:20 | Conferencia</div>
          <div className="w-full bg-gray-300 pt-4 pb-1">
            <h3 className="text-lg font-semibold">Innovación organizacional</h3>
            <h4 className="italic mt-1">Angelica Figueroa</h4>
          </div>
          <div className="w-full bg-[#DD0035] text-white font-medium text-xl py-1">11:20 - 12:00 | Conferencia</div>
          <div className="w-full bg-gray-300 pt-4 pb-1">
            <h3 className="text-lg font-semibold">Como nos puede ayudar MLOps <br /> en el dia a dia</h3>
            <h4 className="italic mt-1">Yair Panqueva - Jhon Suarez</h4>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Agenda