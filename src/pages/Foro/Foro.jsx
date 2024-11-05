import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection,getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
function Foro() {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        const dataRef=collection(db,'foros')
        getDocs(dataRef)
        .then((resp)=>{
            setCategories(
                resp.docs.map((item)=>{
                    return {...item.data(),id:item.id}
                })
            )
        })
    },[])

    return (
        <div className="p-8">
            <div className="container mx-auto max-w-[2000px] px-[68px]">
                <div className="text-center mb-8">
                <h1 className="text-8xl font-bold text-purple-700 mb-2 custom-font">Foro</h1>
                    <p className="text-3xl text-gray-700 mb-4">
                        ¡Contagia tu entusiasmo en el foro! La gran comunidad del voluntariado te está esperando.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/login"> 
                            <button className="text-pink-500 font-medium flex items-center text-xl">
                                <span className="mr-2">👤</span>Registrarse
                            </button>
                        </Link>
                        <Link to="/login"> 
                            <button className="text-pink-500 font-medium flex items-center text-xl">
                                <span className="mr-2">🔐</span>Iniciar sesión
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full">
                    <table className="w-full">
                        <thead>
                            <tr className="text-gray-600 font-bold border-b">
                                <th className="py-3 text-left text-2xl">Foro</th>
                                <th className="py-3 text-center text-2xl">Debates</th>
                                <th className="py-3 text-center text-2xl">Entradas</th>
                                <th className="py-3 text-center text-2xl">Última publicación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="py-4">
                                        <h3 className="text-pink-600 font-semibold text-2xl">
                                            <Link to={category.link}>{category.title}</Link>
                                        </h3>
                                        <p className="text-gray-500 text-2xl">{category.description}</p>
                                    </td>
                                    <td className="py-4 text-center px-6 text-1xl min-w-[100px]">{category.debates}</td>
                                    <td className="py-4 text-center px-6 text-1xl min-w-[100px]">{category.entries}</td>
                                    <td className="py-4 text-center px-6 text-1xl min-w-[150px]">
                                        <p className="text-base">{category.lastPost}</p>
                                        <p className="text-pink-500 text-base">{category.lastUser}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Foro;
