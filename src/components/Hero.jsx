import React from "react"
import Header from "./Header"
import { RiCalendarEventFill, RiMapPin2Line } from "react-icons/ri"

const Hero = () => {
  return(
    <section className="hero bg-cover">
      <Header />
      <section className="min-h-[50vh] grid xl:grid-cols-8">
        <div className="md:col-span-4 flex items-center justify-center xl:p-16">
          <div className="flex flex-col text-gray-50 gap-4 ml-[6rem]">
            <h1 className="text-7xl -mt-20 font-bold xl:leading-[3rem] drop-shadow-lg">CCB Tech Day</h1>
            <span className="ml-[0.5rem] mt-2 font-semibold flex flex-col gap-1">
              <h3 className="text-xl flex drop-shadow-lg"> <RiCalendarEventFill className="mt-1 text-2xl mr-2" /> {" "} 10 de Julio - 7:30am</h3>
              <h3 className="text-xl flex drop-shadow-lg"> <RiMapPin2Line className="mt-0 text-2xl mr-2" /> {" "} Sede Salitre - Bogotá D.C.</h3>
            </span>
          </div>
        </div>
      </section>
    </section>
    
  )
}

export default Hero