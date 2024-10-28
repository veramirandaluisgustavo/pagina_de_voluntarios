

export default function VolunteerSection() {
  return (
    <div>
    <div className="bg-teal-100 p-8 h-[400px] flex items-center justify-center">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Quieres ser voluntario/a</h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded shadow-md">
          HAZTE VOLUNTARIO EN 6 PASOS
        </button>
      </div>


    </div>
    <div>

    </div>
    <div className="bg-white h-[600px] flex justify-center items-center">


      {/* Stories Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image and Name */}
        <div className="text-center">
          <img
            src="/img/xavier.png"
            alt="Xavier Mendez"
            className="w-48 h-48 rounded-3xl object-cover mx-auto mb-4"
          />
          <p className="font-semibold text-lg">Xavier Mendez</p>
          <p className="text-gray-600">voluntariado en sucre</p>
        </div>

        {/* Stories Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Historias de Voluntarios y Voluntarias</h2>
          <p className="text-gray-700 mb-4">
            Por muy pequeñas que sean las cosas que hacemos, de una u otra manera estamos
            incidiendo en el cambio de nuestras realidades. Como voluntario soy agente de cambio
            social.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded shadow-md">
            COMPARTE TU EXPERIENCIA
          </button>
        </div>
      </div>
    </div>
    

    </div>
  );
}
