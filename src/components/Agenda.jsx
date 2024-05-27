import React from "react"
import Evento from "./Evento"

const Agenda = () => {
  return(
    <div className="mt-6 w-full text-center flex flex-col items-center gap-y-8">
      <h1 className="font-bold text-gray-600 text-6xl">Agenda</h1>
      <section className="w-[90%] text-center">
        <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Auditorio Principal</div>
        <Evento 
          horario = "8:00 - 8:10"
          tipo_sesion = "Sesión de Bienvenida"
          item = "Bienvenida CCB"
          moderador = "Presidente / Vicepresidente TI CB"
        />
        <Evento 
          horario = "8:10 - 8:30"
          tipo_sesion = "Conferencia"
          item = "Gestión del cambio"
          moderador = "Seriamente: Mauricio Gomez"
        />
        <Evento 
          horario = "8:30 - 9:15"
          tipo_sesion = "Conferencia"
          item = "Cultura de la innovación"
          moderador = "AWS: Juan Pablo Rincon(Country Manager PS AWS)"
        />
      </section>
      <section className="w-[90%] text-center flex justify-between mt-0">
        <div className="w-[30%] flex flex-col">
          <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Auditorio Principal</div>
          <Evento 
            horario = "9:15 - 10:00"
            tipo_sesion = "Conversatorio"
            item = "Arquitectura Moderna de Datos"
            moderador = "AWS: Giovanni Rodriguez(SA Manager)"
          />
        </div>
        <div className="w-[30%] flex flex-col">
          <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Salon 1</div>
          <Evento 
            horario = "9:15 - 10:00"
            tipo_sesion = "Conferencia"
            item = "Cultura de innovación, creando el futuro a través de mindset"
            moderador = "Google: Daniel García"
          />
        </div>
        <div className="w-[30%] flex flex-col">
          <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Salon 2</div>
          <Evento 
            horario = "9:15 - 10:00"
            tipo_sesion = "Conversatorio"
            item = "Tendencias tecnologicas para el crecimiento competitivo de las empresas "
            moderador = "CLUSTER TI: Andrés Carbó CCB - Everist Diego Tovar, IBM: Jorge Ovalle, Servi Información: Mónica Patiño, Alta consejería distrital para las TICS: Ivan Durán"
          />
        </div>
      </section>
      <section className="w-[90%] text-center">
        <div className="w-full bg-[#0B2D43] rounded-lg text-white font-semibold text-2xl py-2 italic">Coffee Break</div>
      </section>
      <section className="w-[90%] text-center">
        <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Auditorio Principal</div>
        <Evento 
          horario = "10:10 - 10:30"
          tipo_sesion = "Conferencia"
          item = "Inducción sobre Distrito - Campus de ciencia, tecnología e innovación"
          moderador = "Andres Lopez"
        />
        <Evento 
          horario = "10:30 - 11:20"
          tipo_sesion = "Conversatorio"
          item = "DevSecOps + IA"
          moderador = {
            <>
              <h2>Moderador: Melisa Perxia</h2> 
              <h2 className=" font-semibold">Panelistas:</h2>
              <p>CBIT: Diego Rodriguez</p>
              <p>Nuvu: Andres Barrantes</p>
            </>
          }
        />
      </section>
      <section className="w-[90%] text-center flex justify-between mt-0">
        <div className="w-[30%] flex flex-col">
          <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Auditorio Principal</div>
          <Evento 
            horario = "11:20 - 12:50"
            tipo_sesion = "Conversatorio"
            item = "¡Usemos copilot! la era de la IA generativa"
            moderador = "Microsoft / Jackson Hernandez"
          />
        </div>
        <div className="w-[30%] flex flex-col">
          <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Salon 1</div>
          <Evento 
            horario = "11:20 - 12:05"
            tipo_sesion = "Conferencia"
            item = "Gemini for Google Workspace - Como la IA vino a complementar la colaboración"
            moderador = "Google: Andres Romero"
          />
          <Evento 
            horario = "12:05 - 12:50"
            tipo_sesion = "Conferencia"
            item = "Inteligencia artificial generativa en los procesos de calidad."
            moderador = "Jose Espinel"
          />
        </div>
        <div className="w-[30%] flex flex-col">
          <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Salon 2</div>
          <Evento 
            horario = "11:20 - 12:50"
            tipo_sesion = "Conferencia"
            item = "Ciberseguridad"
            moderador = "Dell - Tarktrace"
          />
          
        </div>
      </section>
      <section className="w-[90%] text-center">
        <div className="w-full bg-[#3D3D3D] rounded-t-lg text-white font-semibold text-2xl py-2">Auditorio Principal</div>
        <Evento 
          horario = "12:50 - 13:00"
          tipo_sesion = "Cierre"
          item = "Despedida - Conclusiones del evento"
          moderador = "Vicepresidente TI CCB / Javier Barrios"
        />
      </section>
    </div>
  )
}

export default Agenda