import React from "react"
import { RiFacebookBoxLine, RiFacebookFill, RiLinkedinFill, RiTwitterXFill, RiTwitterXLine } from "react-icons/ri"

const Footer = () => {
  return(
    <footer className="bg-[#3d3d3d] py-6 px-24 flex">
      <div className="grid grid-cols-6 w-full">
        <div className="col-span-3 flex flex-col gap-4 text-gray-300 font-semibold">
          <img src="https://images.ctfassets.net/n1ptkpqt763u/5iwiCWWm71NHxJ8MjqBno/08339e7709821e99fea703131bdb171f/Logos.svg" className="w-32" alt="Camara de Comercio de Bogota" />
          <h4>Todos los derechos reservados</h4>
          <h4>Camara de Comercio de Bogota 2024</h4>
        </div>
        <div className="col-span-3 py-3 flex flex-col">
          <h3 className="text-gray-400 text-xl font-semibold">¡Siguenos!</h3>
          <div className=" w-48 flex justify-between mt-4">
            <img src="https://images.ctfassets.net/n1ptkpqt763u/3dc605rLunLoTvjCjADKjb/d296f980c604750463d6426a51013756/Facebook.svg" alt="Facebook" />
            <img src="https://images.ctfassets.net/n1ptkpqt763u/QSbXyM0UUSr5wOaaqcSEZ/a27886676519d6fc3532f74dd5b3a535/ICONO_X.png" alt="Twitter" />
            <img src="https://images.ctfassets.net/n1ptkpqt763u/5oM2HJUUJtZhIqGY0XgFUi/fa0a3aac446cb7f5422d4ce9d6fe963c/LinkedIn.svg" alt="Linkedin" />
          </div>
          <div className=" w-48 flex justify-between mt-4">
            <img src="https://images.ctfassets.net/n1ptkpqt763u/7pf03iCb7IKS12MJEVyNdE/a907a82f2873c2086fa19b6b5e034791/Youtube.svg" alt="Youtube" />
            <img src="https://images.ctfassets.net/n1ptkpqt763u/1dJyjOTfJiRJ5zWsLfJVEo/67251b971fc21ea1f9376482a16858b4/Instagram.svg" alt="Instagram" />
            <img src="https://images.ctfassets.net/n1ptkpqt763u/6VhBoQpUQftjgSCMtUQIZl/4de6619cc74af8c2dc441520f800b712/tiktok.svg" alt="TikTok" className="w-8" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer