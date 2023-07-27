import { Icon } from "@iconify/react";

const Navbar = () => {

  return (
    <header className="bg-purple-900  md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Said Molina
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Trabajos anteriores
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Habilidades
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-purple-400 rounded text-white mt-4 md:mt-0">
          ¡Contactame!
          < Icon icon="logos:web-dev-icon"className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
export default Navbar