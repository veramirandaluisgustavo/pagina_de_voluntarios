import React, { useState } from 'react';
import EventCard from '../../components/EventCard';

const Formate2 = () => {
    const data = [
        {
          title: "¿Cómo desarrollar e implementar un plan de voluntariado?",
          description:
            "Sin un plan de voluntariado, la incorporación de personas voluntarias no surge de la reflexión, sino de la reacción a la demanda de los proyectos en los que trabajamos. Invertir esfuerzos en elaborar un plan de voluntariado acorde con la misión de la...",
          startDate: "21/11/2018",
          endDate: "21/11/2018",
          location: "Sucre",
          type: "Presencial",
          categories: ["Discapacidad", "Infancia, Juventud y familia"],
          organizer: "FEVOCAM, Fundación MonteSucre y La Casa Encendida",
        },
        {
          title: "¿Cómo desarrollar formaciones por competencias?",
          description:
            "Este Microlearning tiene como objetivo principal comprender la importancia de la formación en las competencias transversales de las personas voluntarias, así como aprender a diseñarlas, teniendo en cuenta los marcos normativos que sustenten el recono...",
          startDate: "14/02/2023",
          endDate: "31/12/2023",
          location: "Todo el Estado",
          type: "Online",
          categories: ["Cultura", "Deportes", "Infancia, Juventud y familia"],
          organizer: "Bolivia hacia adelante",
        },
        {
          title:
            "Prevención, con 'P' de personas Curso online sobre Prevención del abuso de drogas",
          description:
            "Cinco semanas en las que conversar en torno a los modos más efectivos de dinamizar procesos preventivos del abuso de drogas basados en la evidencia.",
          startDate: "01/10/2019",
          endDate: "04/11/2019",
          location: "Todo el Estado",
          type: "Online",
          categories: ["Cultura", "Depresion","superacion"],
          organizer: "Edex",
        },
      ];
  const [selectedType, setSelectedType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

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

  return (
    <div className='w-full bg-blue-200'>
    <div className="max-w-6xl mx-auto p-4 ">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
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
        {filteredData.map((item,index) => (
          <EventCard key={index} {...item}></EventCard>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Formate2;