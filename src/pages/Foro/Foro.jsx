import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection,getDocs,addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../utils/AuthContext';
import ModalFormForo from './components/ModalFormForo';
function Foro() {
    const [categories,setCategories] = useState([])
    const {user} = useAuth()
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFormSubmit = (formData) => {
    console.log("Datos recibidos del modal:", formData);
    const dataSend = {
        ...formData
    };
    const dataRef = collection(db, "foros");
    addDoc(dataRef, dataSend)
      .then(() => {
        console.log("Foro creado correctamente");
        setCategories([...categories, dataSend]);
        handleCloseModal();
        const dataRef=collection(db,'foros')
        getDocs(dataRef)
        .then((resp)=>{
            setCategories(
                resp.docs.map((item)=>{
                    return {...item.data(),id:item.id}
                })
            )
        })
      })
      .catch((error) => {
        console.error("Error al crear el foro:", error);
        });

  };
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
                <h1 className="text-8xl font-bold  mb-2 custom-font">Foro</h1>
                    <p className="text-3xl text-purple-800 mb-4">
                        ¡Contagia tu entusiasmo en el foro! La gran comunidad del voluntariado te está esperando.
                    </p>
                    <div className="flex justify-center gap-4">
                        
                        {user?<></>:<Link to="/login"> 
                            <button className="text-pink-500 font-medium flex items-center text-xl">
                                <span className="mr-2">🔐</span>Iniciar sesión
                            </button>
                        </Link>}
                        
                    </div>
                    <div className="flex justify-center gap-4">
                        
                        {user && user.type == "ong"?
                        <><button
                        onClick={handleOpenModal}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        Agregar Foro
                      </button>
                
                      {/* Renderiza el modal */}
                      <ModalFormForo
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onSubmit={handleFormSubmit}
                      /></>
                        :<></>}
                        
                    </div>
                </div>

                <div className="w-full">
                    <table className="w-full">
                        <thead>
                            <tr className="text-gray-600 font-bold border-b">
                                <th className="py-3 text-left text-2xl">Foro</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="py-4">
                                        <h3 className="text-pink-600 font-semibold text-2xl">
                                            <Link to={`/foro/${category.id}`}>{category.title}</Link>
                                        </h3>
                                        <p className="text-gray-500 text-2xl">{category.description}</p>
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
