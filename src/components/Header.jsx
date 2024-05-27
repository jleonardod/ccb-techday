import React from "react"

const Header = () => {
  return(
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh]">
      <div className="xl:w-2/6 text-center ">
        <a href="#" className="relative p-1 flex justify-center items-center">
          <img src="https://images.ctfassets.net/n1ptkpqt763u/4isVapyUT1k3dbjNn8tR4m/c049c3dc1d05d856bae804a6a22f4d9d/Logos.svg" className="w-46" />
        </a>
      </div>
      <nav className="fixed w-[80%] md:w-[40%] xl:w-full h-full top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50">
        <a href="" className="font-semibold text-gray-100 text-xl">Nuestros Aliados:</a>
        <a href="" className="mt-2">
          <img src="/cbit-logo-blanco.png" className="w-24" />
        </a>
        <a href="" className="mt-2">
          <img src="/periferia-logo-blanco.png" className="w-24" />
        </a>
        <a href="" className="mt-2">
          <img src="seriamente-id-blanco-simple.png" className="w-24" />
        </a>
        <a href="" className="mt-2">
          <img src="aws-blanco.png" className=" w-14" />
        </a>
        <a href="" className="mt-2">
          <img src="google-blanco.png" className=" w-24" />
        </a>
        <a href="" className="mt-2">
          <img src="cluster-blanco.png" className=" w-24" />
        </a>
      </nav>
    </header>
  )
}

export default Header