
import { CheckBadgeIcon, CpuChipIcon} from '@heroicons/react/24/solid'
import { Icon } from '@iconify/react';




const Skills = () => {
    return (
      <section className="bg-[url('/circle2.svg')] bg-contain bg-no-repeat bg-left body-font" id="skills" >
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <CpuChipIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Habilidades y Tecnologías
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Frontend: Dominio completo de HTML5, CSS3 y JavaScript (ES6+).
              Experiencia en el desarrollo de interfaces de usuario atractivas y
              receptivas utilizando React. Backend: Amplio conocimiento de
              Node.js y Express.js para la creación de servidores rápidos y
              escalables. Experiencia en el diseño e implementación de APIs.
            </p>
            
          </div>
          
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
         
                <div  className="p-2 sm:w-1/2 w-full">
                  <div className="bg-purple-800 rounded flex p-4 h-full items-center">
                  <Icon icon="devicon:html5" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      HTML5
                    </span>
                  </div>
                </div>
                <div  className="p-2 sm:w-1/2 w-full">
                  <div className="bg-purple-800 rounded flex p-4 h-full items-center">
                  <Icon icon="skill-icons:css" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      CSS
                    </span>
                  </div>
                </div>
                <div  className="p-2 sm:w-1/2 w-full">
                  <div className="bg-purple-800 rounded flex p-4 h-full items-center">
                  <Icon icon="skill-icons:javascript" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      Javascript
                    </span>
                  </div>
                </div>
                <div  className="p-2 sm:w-1/2 w-full">
                  <div className="bg-purple-800 rounded flex p-4 h-full items-center">
                  <Icon icon="skill-icons:tailwindcss-dark" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      Tailwind
                    </span>
                  </div>
                </div>
                <div  className="p-2 sm:w-1/2 w-full">
                  <div className="bg-purple-800 rounded flex p-4 h-full items-center">
                  <Icon icon="skill-icons:react-dark" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      React
                    </span>
                  </div>
                </div>
                <div  className="p-2 sm:w-1/2 w-full">
                  <div className="bg-purple-800 rounded flex p-4 h-full items-center">
                  <Icon icon="skill-icons:redux" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      Redux
                    </span>
                  </div>
                </div>
                <div  className="p-2 sm:w-1/2 w-full">
                  <div className="bg-purple-800 rounded flex p-4 h-full items-center">
                  <Icon icon="devicon:git" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      Git
                    </span>
                  </div>
                </div>
                <div  className="p-2 sm:w-1/2 w-full">
                  <div className="bg-purple-800 rounded flex p-4 h-full items-center">
                  <Icon icon="skill-icons:github-light" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      Github
                    </span>
                  </div>
                </div>
          </div>
          
        </div>
      </section>
    );
}

export default Skills