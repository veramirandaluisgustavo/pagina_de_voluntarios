import React, { useState } from 'react';
import { db } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegistroU = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        nombre: '',
        password: '',
        telefono: '',
        type: 'person', // Por defecto, registra como usuario. Puedes cambiarlo según la necesidad.
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Guarda en la colección correspondiente según el tipo (usuarios u ONGs)
            const collectionName = formData.type === 'person' ? 'usuarios' : 'ongs';
            await addDoc(collection(db, collectionName), {
                email: formData.email,
                nombre: formData.nombre,
                password: formData.password,
                telefono: formData.telefono,
            });

            console.log('Registro exitoso');
            navigate('/login'); // Redirige al login después de registrarse
        } catch (error) {
            console.error('Error al registrar:', error.message);
        }
    };

    return (
        <div
            className="min-h-screen flex"
            style={{
                backgroundImage: `url('/images/fondo.jpg')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-1/3">
                
            </div>


            <div className="w-1/3 flex items-center justify-center bg-white bg-opacity-85 px-8 py-12">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-purple-900 mb-10 custom-font">SE PARTE DE NOSOTROS!!</h1>
                        <h2 className="text-5xl font-extrabold text-gray-900">Regístrate</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            ¿Ya tienes una cuenta?{' '}
                            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Inicia sesión
                            </Link>
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm space-y-4">
                            {/* Nombre */}
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                                    Nombre completo
                                </label>
                                <input
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Pedro Jiménez"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Correo electrónico
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>

                            {/* Teléfono */}
                            <div>
                                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                                    Teléfono
                                </label>
                                <input
                                    id="telefono"
                                    name="telefono"
                                    type="text"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="555-5566"
                                />
                            </div>

                            {/* Contraseña */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>

                            {/* Tipo de usuario */}
                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                                    Tipo de usuario
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="person">Usuario</option>
                                    <option value="ong">ONG</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-800 transition-colors duration-200"
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistroU;
