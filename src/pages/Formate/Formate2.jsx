import React, { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard';
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
const Formate2 = () => {

  const [selectedType, setSelectedType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [data, setData] = useState([])

  // Obtener valores únicos para cada filtro
  const uniqueTypes = [...new Set(data.map(item => item.type))];
  const uniqueCategories = [...new Set(data.flatMap(item => item.categories))];
  const uniqueLocations = [...new Set(data.map(item => item.location))];

  // Función para filtrar las tarjetas
  const filteredData = data.filter((item) => {
    const matchesType = selectedType === '' || item.type === selectedType;
    const matchesCategory = selectedCategory === '' || item.categories.includes(selectedCategory);
    const matchesLocation = selectedLocation === '' || item.location === selectedLocation;
    return matchesType && matchesCategory && matchesLocation;
  });

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(year, month - 1, day).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  useEffect(() => {
    const dataRef = collection(db, "eventos");
    getDocs(dataRef)
      .then((resp) => {

        setData(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
  }, [])

  return (
    <div className='w-full '>
      <div className="p-8 h-[500px] flex items-center justify-center bg-[url('/images/formate1.jpg')] bg-cover bg-center bg-[#5C2D90] bg-blend-overlay">

        <div className="text-center mb-8">
          <h1 className="text-7xl font-bold mb-4 custom-font text-white">FÓRMATE</h1>
          <p className="text-4xl text-white mb-4">
            Descubre nuevas habilidades y conocimientos que te pueden ayudar en tu acción voluntaria.
          </p>

        </div>
      </div>


      <div className="max-w-6xl mx-auto p-4 ">
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Filtrar eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="type" className="block mb-2 font-medium text-gray-700">
                Tipo de evento
              </label>
              <select
                id="type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Todos los tipos</option>
                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 font-medium text-gray-700">
                Categoría
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Todas las categorías</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block mb-2 font-medium text-gray-700">
                Ubicación
              </label>
              <select
                id="location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredData.map((item, index) => (
            <EventCard key={index} {...item}></EventCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formate2;