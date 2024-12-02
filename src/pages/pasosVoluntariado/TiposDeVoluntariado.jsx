import React from 'react';

const TiposDeVoluntariado = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Tipos de Voluntariado</h1>
      <p className="text-gray-700 mb-10">
        Hay muchas maneras de hacer voluntariado, tantas como necesidades existen en una sociedad. En la Ley española del voluntariado del 2015 se recogen hasta 10 ámbitos diferentes donde realizar la acción voluntaria, solidaria y altruista. Aquí encontrarás una descripción de estos 10 tipos de voluntariado para que puedas elegir el que más se corresponda con tus intereses y habilidades.
      </p>
      <div className="grid grid-cols-5 gap-6">
        <div className="flex flex-col items-center">
          <div className="bg-indigo-100 rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <img src="https://agenciatierraviva.com.ar/wp-content/uploads/2021/05/educacion_ambiental_nin%CC%83os.jpg" alt="Ambiental" className="w-16 h-16" />
          </div>
          <span className="text-indigo-600 font-medium">Ambiental</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-rose-100 rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <img src="https://significado.com/wp-content/uploads/comunitario.jpg" alt="Comunitario" className="w-16 h-16" />
          </div>
          <span className="text-rose-600 font-medium">Comunitario</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-amber-100 rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <img src="https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__9ccaf660-0258-4c1f-8e87-ea3bd0bac36e&w=3840&q=75" alt="Cultural" className="w-16 h-16" />
          </div>
          <span className="text-amber-600 font-medium">Cultural</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-emerald-100 rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <img src="https://cinfasalud.cinfa.com/wp-content/uploads/2019/08/CinfaSalud-imagen-beneficios-deporte-600-1200x900.jpg" alt="Deportivo" className="w-16 h-16" />
          </div>
          <span className="text-emerald-600 font-medium">Deportivo</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-sky-100 rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <img src="https://www.ceupe.co/images/easyblog_images/240/b2ap3_medium_educacion-2.png" alt="Educativo" className="w-16 h-16" />
          </div>
          <span className="text-sky-600 font-medium">Educativo</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-violet-100 rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <img src="https://www.revistaabogacia.com/wp-content/uploads/2022/05/foto-marzo7-1068x499.jpg" alt="Internacional" className="w-16 h-16" />
          </div>
          <span className="text-violet-600 font-medium">Internacional</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-lime-100 rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <img src="https://www.aprendum.com/blog/wp-content/uploads/2017/03/monitor-ocio-y-tiempo-libre-1.jpg" alt="Ocio y Tiempo Libre" className="w-16 h-16" />
          </div>
          <span className="text-lime-600 font-medium">Ocio y Tiempo Libre</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-fuchsia-100 rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <img src="https://interior.gencat.cat/web/.content/home/030_arees_dactuacio/proteccio_civil/que-es-la-pc/Simulacre_3_INSTAGRAM.jpg_741394364.jpg" alt="Protección Civil" className="w-16 h-16" />
          </div>
          <span className="text-fuchsia-600 font-medium">Protección Civil</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-cyan-100 rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <img src="https://imgcom.masterd.es/49/blog/2023/02/42538.jpeg" alt="Socio-Sanitario" className="w-16 h-16" />
          </div>
          <span className="text-cyan-600 font-medium">Socio-Sanitario</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-amber-100 rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <img src="https://ecoembesempleo.es/web/app/uploads/2023/08/post-empleo-bienestar-social.jpg" alt="Social" className="w-16 h-16" />
          </div>
          <span className="text-amber-600 font-medium">Social</span>
        </div>
      </div>
    </div>
  );
};

export default TiposDeVoluntariado;