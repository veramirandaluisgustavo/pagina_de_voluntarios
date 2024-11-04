import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Colabora = () => {

      const [selectedTag, setSelectedTag] = useState('');
      const [selectedLocation, setSelectedLocation] = useState('');
      const [data,setData] = useState([])
      useEffect(()=>{
        const dataRef = collection(db,"post");
        getDocs(dataRef)
        .then((resp)=>{
            
            setData(
                resp.docs.map((doc)=>{
                    return{...doc.data(),id:doc.id}
                })
            )
        })
      },[])



      // Obtener las etiquetas (tags) y ubicaciones únicas
      const uniqueTags = [...new Set(data.flatMap((item) => item.categories))];
      const uniqueLocations = [...new Set(data.map((item) => item.location))];
    
      // Función para filtrar las tarjetas
      const filteredData = data.filter((item) => {
        const matchesTag = selectedTag === '' || item.categories.includes(selectedTag);
        const matchesLocation = selectedLocation === '' || item.location === selectedLocation;
        return matchesTag && matchesLocation;
      });
    
      return (
        
        <div>
            <img className='w-full h-auto' src="/img/colabora.png" alt="cd" />
            <div className="max-w-4xl mx-auto">
            
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="tag" className="block mb-2 font-medium">
                  Filtrar por etiqueta
                </label>
                <select
                  id="tag"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full p-2 border rounded-md appearance-none"
                >
                  <option value="">Todas las etiquetas</option>
                  {uniqueTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block mb-2 font-medium">
                  Filtrar por ubicación
                </label>
                <select
                  id="location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full p-2 border rounded-md appearance-none"
                >
                  <option value="">Todas las ubicaciones</option>
                  {uniqueLocations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredData.map((item,index) => (
              <Card key={index} {...item} ></Card>
            ))}
          </div>
        </div>
        </div>
      );
};

export default Colabora;