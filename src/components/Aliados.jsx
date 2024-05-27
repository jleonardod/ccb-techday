import React from "react"

const Aliados = () => {
  return(
    <div className="bg-gray-200 p-3 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-10">
      <h1 className="text-2xl font-medium text-gray-800 text-center">
        Organizadores Aliados
      </h1>
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
        <img src="cbit-logo-negro.png" className="w-40" />
        <img src="periferia-logo-negro.png" className="w-40" />
        <img src="seriamente-id-negro-simple.png" className="w-40" />
        <img src="aws-negro.png" className=" w-32" />
        <img src="google-negro.png" className=" w-32" />
        <img src="Microsoft-negro.png" className=" w-36" />
      </div>
    </div>
  )
}

export default Aliados