'use client'

import { useState } from 'react';
import styles from "./NavBar.module.css";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const products = [
  { name: '6 PASOS PARA SER VOLUNTARIO', description: 'Los pasos necesarios para que puedas ser voluntario', href: '/pasos', icon: ChartPieIcon },
  { name: 'COLABORAR CON UNA ONG', description: 'Colabora con una ONG', href: '/colabora', icon: CursorArrowRaysIcon },
  { name: 'TIPOS DE VOLUNTARIADO', description: 'Qué tipos de voluntariado tenemos?', href: '/tipos', icon: FingerPrintIcon },
  { name: 'PREGUNTAS FRECUENTES', description: 'Respuestas a las preguntas más comunes', href: '/preguntas', icon: SquaresPlusIcon },
];

const callsToAction = [
  //{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  //{ name: 'Contact sales', href: '#', icon: PhoneIcon },

];

export default function NavBar() {
  const { user, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8 border-b-2 mb-10">
        <div className="flex lg:flex-1">
          <img src='/img/Vector1.svg' alt="Logo" />
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Voluntariado</span>
            <img alt="Voluntariado" src="/img/voluntariado.png" className="h-8 w-auto" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 hover:text-purple-700 hover:underline hover:underline-offset-4 transition-colors duration-300 ease-in-out">
              Hazte Voluntario
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link to={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>


          <Link to="/colabora" className="text-lg font-semibold leading-6 text-gray-900 hover:text-purple-700 hover:underline hover:underline-offset-4 transition-colors duration-300 ease-in-out">
            Colabora con Una ONG
          </Link>

          {user && user.type == "ong" ? <Link to="/contacta" className="text-lg font-semibold leading-6 text-gray-900 hover:text-purple-700 hover:underline hover:underline-offset-4 transition-colors duration-300 ease-in-out">
            Contacta
          </Link> : <></>}

          <Link to="/formate" className="text-lg font-semibold leading-6 text-gray-900 hover:text-purple-700 hover:underline hover:underline-offset-4 transition-colors duration-300 ease-in-out">
            Formate
          </Link>
          <Link to="/foro" className="text-lg font-semibold leading-6 text-gray-900 hover:text-purple-700 hover:underline hover:underline-offset-4 transition-colors duration-300 ease-in-out">
            Comparte en el foro
          </Link>
          <Link to="/recursos" className="text-lg font-semibold leading-6 text-gray-900 hover:text-purple-700 hover:underline hover:underline-offset-4 transition-colors duration-300 ease-in-out">
            Recursos
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <>

              <p className="mr-4 text-lg font-semibold text-gray-900 mt-2">
                {user.nombre}
              </p>


              <div className="flex items-center mr-[10px]">
                <div
                  className="w-12 h-12 bg-purple-800 text-white flex items-center justify-center rounded-full font-bold cursor-pointer"
                  onClick={() => setShowLogout(!showLogout)}
                >
                  {user.nombre.split(' ').map((word) => word[0].toUpperCase()).slice(0, 2).join('')}
                </div>
              </div>


              {showLogout && (
                <button onClick={logout} className='bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full'>
                  Salir
                </button>
              )}
            </>
          ) : (
          
            <div>
              <Link to="/registroU" className="text-lg font-semibold leading-6 text-gray-900 hover:text-purple-700 hover:underline hover:underline-offset-4 transition-colors duration-300 ease-in-out mr-3">
              Register
            </Link>
            
            <Link to="/login" className="text-lg font-semibold leading-6 text-gray-900 hover:text-purple-700 hover:underline hover:underline-offset-4 transition-colors duration-300 ease-in-out">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
              </div>
          )}
        </div>

      </nav>
    </header>
  );
}
