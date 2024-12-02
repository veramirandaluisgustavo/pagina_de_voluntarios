
import { useState } from 'react';  
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; 

const Footer = () => {
  const [activeLink, setActiveLink] = useState(null); 

 
  const handleLinkClick = (link) => {
    setActiveLink(link); 
  };

  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="text-4xl font-bold text-center custom-font">VOLUNTARIADO SUCRE</div>
      

      <div className="border-t-4 border-white w-full my-10"></div>

      <div className="max-w-6xl mx-auto text-center">

        
        <div className="flex flex-wrap justify-around mb-8">
          <a
            href="/volunteer"
            onClick={() => handleLinkClick('volunteer')}
            className={`text-xl ${activeLink === 'volunteer' ? 'text-pink-500' : 'hover:text-pink-500'} block w-auto`}
          >
            Hazte voluntario/a
          </a>
          <a
            href="/colabora"
            onClick={() => handleLinkClick('colabora')}
            className={`text-xl ${activeLink === 'colabora' ? 'text-pink-500' : 'hover:text-pink-500'} block w-auto`}
          >
            Colabora con una ONG
          </a>
          <a
            href="/formate"
            onClick={() => handleLinkClick('formate')}
            className={`text-xl ${activeLink === 'formate' ? 'text-pink-500' : 'hover:text-pink-500'} block w-auto`}
          >
            Fórmate
          </a>
          <a
            href="/foro"
            onClick={() => handleLinkClick('foro')}
            className={`text-xl ${activeLink === 'foro' ? 'text-pink-500' : 'hover:text-pink-500'} block w-auto`}
          >
            Comparte en el foro
          </a>
          <a
            href="/recursos"
            onClick={() => handleLinkClick('recursos')}
            className={`text-xl ${activeLink === 'recursos' ? 'text-pink-500' : 'hover:text-pink-500'} block w-auto`}
          >
            Recursos
          </a>
        </div>

       
        <div className="flex flex-wrap justify-around mb-8">
          <a
            href="/inicio"
            onClick={() => handleLinkClick('inicio')}
            className={`text-xl ${activeLink === 'inicio' ? 'text-pink-500' : 'hover:text-pink-500'} block w-auto`}
          >
            Quiénes somos
          </a>
          <a
            href="/colabora"
            onClick={() => handleLinkClick('colabora')}
            className={`text-xl ${activeLink === 'colabora' ? 'text-pink-500' : 'hover:text-pink-500'} block w-auto`}
          >
            ¿Tienes dudas?
          </a>
        </div>

      </div>

    
      <div className="border-t-4 border-white w-full my-10"></div>

    
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" className="text-gray-400 hover:text-white">
          <Facebook className="w-8 h-8" />
        </a>
        <a href="https://twitter.com" className="text-gray-400 hover:text-white">
          <Twitter className="w-8 h-8" />
        </a>
        <a href="https://instagram.com" className="text-gray-400 hover:text-white">
          <Instagram className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
          <Linkedin className="w-8 h-8" />
        </a>
      </div>

     
      <div className="text-center text-sm text-gray-400">
        <p>© 2024 Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
