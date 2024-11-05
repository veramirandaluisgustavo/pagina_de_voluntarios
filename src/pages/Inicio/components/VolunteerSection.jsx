

export default function VolunteerSection() {
  return (
    <div>
      <div className="p-8 h-[600px] flex items-center justify-center bg-[url('/images/inicio.jpg')] bg-cover bg-center bg-[#5C2D90] bg-blend-overlay">
        
        <div className="text-center mb-8">
          <h1 className="text-8xl font-bold mb-4 custom-font text-white">Quieres ser voluntario/a</h1>
          <button
            className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700"
            onClick={() => (window.location.href = '/pasos')}
          >
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
              className="w-70 h-70 rounded-3xl object-cover mx-auto mb-4"
            />
            <p className="font-semibold text-lg">Xavier Mendez</p>
            <p className="text-gray-600">voluntariado en sucre</p>
          </div>

          {/* Stories Text */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold mb-4 custom-font">Historias de Voluntarios y Voluntarias</h2>
            <p className="text-gray-700 mb-4">
              Por muy pequeñas que sean las cosas que hacemos, de una u otra manera estamos
              incidiendo en el cambio de nuestras realidades. Como voluntario soy agente de cambio
              social.
            </p>
            <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700"
              onClick={() => window.location.href = '/pasos'}
            >
              COMPARTE TU EXPERIENCIA
            </button>

          </div>
        </div>
      </div>


    </div>
  );
}
