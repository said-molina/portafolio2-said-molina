const About = () => {

    return (
       <>
       <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Said 
            <br className="hidden lg:inline-block" />Soy desarrollador web.
          </h1>
          <p className="mb-8 leading-relaxed">
          Especializado en tecnologías de vanguardia y entusiasta de la inteligencia artificial.
           Mi misión es utilizar mi experiencia para crear soluciones innovadoras y optimizar la experiencia del usuario.
           Además de ser un apasionado del desarrollo web, me encanta aprender sobre nuevas tecnologías emergentes y cómo pueden aplicarse para resolver problemas del mundo real. 
           Siempre busco desafíos que me permitan crecer profesionalmente y colaborar en equipos creativos y dinámicos.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/FotoSaid.png"
          />
        </div>
      </div>
    </section>
       </>

    )
}
export default About