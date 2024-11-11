import React from 'react';
import { XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccessDenied = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <XCircle className="h-24 w-24 text-red-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Acceso Denegado
        </h1>
        
        <p className="text-gray-600 mb-8">
          Lo sentimos, no tienes los permisos necesarios para acceder a esta página. Por favor, contacta con el administrador si crees que esto es un error.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to={'/login'}>
          <button 
            
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
          >
            Login
          </button>
          </Link>
          <Link to={'/'}>
          <button 
           
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
          >
            Ir al inicio
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;