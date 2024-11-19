import React, { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { json } from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Form submitted:', formData);
    const { email, password, rememberMe } = formData

    const docRef = collection(db, 'ongs')
    const q = query(docRef, where("email", "==", email), where('password', '==', password))
    getDocs(q)
      .then((resp) => {
        if (resp.docs.length > 0) {
          const user = JSON.stringify({ ...resp.docs[0].data(), id: resp.docs[0].id, type: 'ong' })
          sessionStorage.setItem('user', user)
          login({ ...resp.docs[0].data(), id: resp.docs[0].id, type: 'ong' })
          navigate('/')
        }
        else {
          console.log("no se encontro la ong")
        }
      })


    const docRef2 = collection(db, 'usuarios')
    const q2 = query(docRef2, where("email", "==", email), where('password', '==', password))
    getDocs(q2)
      .then((resp) => {
        if (resp.docs.length > 0) {
          const user = JSON.stringify({ ...resp.docs[0].data(), id: resp.docs[0].id, type: 'person' })
          sessionStorage.setItem('user', user)
          login({ ...resp.docs[0].data(), id: resp.docs[0].id, type: 'person' })
          navigate('/')
        }
        else {
          console.log("no se encontro la persona")
        }
      })


  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundImage: `url('/images/voluntario2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className='w-1/3'>

      </div>


      <div className="w-1/3 flex items-center justify-center bg-white bg-opacity-85 px-8 py-12">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-gray-900">
              Inicio De Sesión
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              O{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                <Link to="/registroU">Regístrate si aún no tienes una cuenta</Link>
              </a>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-800 transition-colors duration-200"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

};

export default Login;