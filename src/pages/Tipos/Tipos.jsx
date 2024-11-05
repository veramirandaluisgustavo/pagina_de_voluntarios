import React from 'react';

const tiposDeVoluntariado = [
    {
        titulo: "Voluntariado Ambiental",
        descripcion: " ¿Te interesa la protección y recuperación de especies o espacios naturales? ¿El cuidado de los animales? ¿El desarrollo de una conciencia medioambiental? Con el voluntariado ambiental puedes implicarte directamente en la conservación del medio ambiente y la sensibilización de la población respecto a la naturaleza, la sostenibilidad y el equilibrio ecológico del planeta. En este campo hay proyectos de acción local y proyectos globales de ámbito internacional.",
        enlace: "https://ejemplo.com/voluntariado-ambiental",
        imagen: "/images/ambiental.jpg",
    },
    {
        titulo: "Voluntariado Social",
        descripcion: "El voluntariado social es uno de los más desarrollados en nuestra sociedad. Es un tipo de voluntariado muy cercano a las personas destinatarias de los proyectos: personas con adicciones, personas discapacitadas, niños y niñas, jóvenes, familias, inmigrantes y refugiados/as, reclusos/as y ex-reclusos/as, personas sin hogar, personas mayores,…",
        enlace: "https://ejemplo.com/voluntariado-social",
        imagen: "/images/social.jpg",
    },
    {
        titulo: "Voluntariado Educativo",
        descripcion: "Si te gusta la educación, embárcate en la aventura del voluntariado educativo. Puedes participar en la educación de niños y niñas, jóvenes y adultos mediante programas de apoyo a la lectura, apoyo escolar, alfabetización, educación inclusiva, educación en el tiempo libre, actividades de la comunidad escolar, asociaciones de padres y madres de alumnos…. ¿Te atreves?",
        enlace: "https://ejemplo.com/voluntariado-educativo",
        imagen: "/images/educativo.jpg",
    },
    {
        titulo: "Voluntariado comunitario",
        descripcion: "Participa en proyectos educativos para niños y adultos. Puedes enseñar, ayudar en bibliotecas o apoyar programas de alfabetización.",
        enlace: "https://ejemplo.com/voluntariado-educativo",
        imagen: "/images/comunitario.jpg",
    },
    {
        titulo: "Voluntariado Cultural",
        descripcion: "En le marco del voluntariado cultural puedes participar en proyectos muy diversos relacionados con trabajos de recuperación, conservación o difusión de la identidad cultural e histórica, la promoción de la creatividad y la difusión de los bienes culturales y el patrimonio histórico. En este contexto, puedes ser voluntario/a en un museo, en actos festivos de la comunidad, en una excavación arqueológica, en una biblioteca, en un monumento histórico,…",
        enlace: "https://ejemplo.com/voluntariado-educativo",
        imagen: "/images/cultural.jpg",
    },
    {
        titulo: "Voluntariado Deportivo",
        descripcion: "¿Te gustaría participar en la organización de eventos deportivos? ¿O colaborar en un club deportivo en sus actividades periódicas? El voluntariado deportivo favorece la integración social de las personas de una comunidad y te ofrece, como voluntario/a, la posibilidad de vincularte con el deporte mediante tu acción altruista. ¿Te animas?",
        enlace: "https://ejemplo.com/voluntariado-educativo",
        imagen: "/images/deportivo.jpg",
    },
    {
        titulo: "Voluntariado Internacional",
        descripcion: "Una manera de hacer voluntariado internacional es la cooperación al desarrollo, que favorece la promoción socioeconómica o desarrollo comunitario para luchar contra la pobreza y mejorar las condiciones de vida de una comunidad o un sector social concreto. Como voluntario/a o cooperante puedes trabajar en la sede de la organización o te puedes plantear una estancia corta o de larga duración sobre el terreno. Las organizaciones que desarrollan programas de voluntariado internacional o cooperación al desarrollo tienen cursos y formaciones específicas.",
        enlace: "https://ejemplo.com/voluntariado-educativo",
        imagen: "/images/internacional.jpg",
    },
    {
        titulo: "Voluntariado de Ocio y tiempo libre",
        descripcion: "¿Te gustaría acompañar a los niños y niños de colonias? ¿Promover actividades de ocio para la integración social de personas con riesgo de exclusión? Las entidades que desarrollan programas de voluntariado en el ocio y el tiempo libre promueven actividades socio-educativas, culturales, deportivas e incluso actividades relacionadas con el medio ambiente con el fin de potenciar la educación y el desarrollo comunitario.",
        enlace: "https://ejemplo.com/voluntariado-educativo",
        imagen: "/images/libre.jpg",
    },
    {
        titulo: "Voluntariado de Proteccion Civil",
        descripcion: "El voluntariado de protección civil y ayuda humanitaria da respuesta y socorro en situaciones de emergencia como son catástrofes naturales, guerras, atentados, accidentes,… Las tareas que pueden realizarse en un contexto de emergencia son muy variadas; desde asistencia y apoyo básico inmediato hasta actuaciones médicas, apoyo psicológico, reparto de alimentos, reconstrucción de viviendas,…",
        enlace: "https://ejemplo.com/voluntariado-educativo",
        imagen: "/images/civil.jpg",
    },
    {
        titulo: "Voluntariado de Socio- Sanitario",
        descripcion: "Hay muchas organizaciones de voluntariado que trabajan para mejorar la calidad de vida de las personas afectadas por una enfermedad, ya sea aguda o crónica, así como para dar apoyo a los familiares de enfermos, promover la donación y trasplantes de sangre y de órganos, participar en la asistencia domiciliaria y hospitalaria, ejecutar programas de sensibilización, promoción de la salud y hábitos de vida saludables… ¿Te animas a probar esta experiencia?",
        enlace: "https://ejemplo.com/voluntariado-educativo",
        imagen: "/images/sanitario.jpg",
    },
];

function Tipos() {
    return (
        <div className="bg-white p-8 space-y-12">
            <div className="mt-16 text-center"> 
                <h1 className="text-7xl font-bold text-black mb-8 custom-font">Tipos de voluntariado</h1>
                <p className="text-3xl text-gray-600">Hay muchas maneras de hacer voluntariado, tantas como necesidades existen en una sociedad. En la Ley española del voluntariado del 2015 se recogen hasta 10 ámbitos diferentes donde realizar la acción voluntaria, solidaria y altruista. Aquí encontrarás una descripción de estos 10 tipos de voluntariado para que puedas elegir el que más se corresponda con tus intereses y habilidades.</p>
            </div>

            {tiposDeVoluntariado.map((tipo, index) => (
                <div key={index} className=" mb-8">
                    <h1 className="text-7xl font-bold text-purple-800 mt-20 custom-font">{tipo.titulo}</h1>
                    <p className="mt-4 text-gray-700 text-3xl">
                        {tipo.descripcion}
                    </p>
                    <a href={tipo.enlace} className="text-pink-500 underline mt-4 inline-block">
                        Más información
                    </a>

                    <div className="relative mt-4">
                        <img
                            src={tipo.imagen}
                            alt={tipo.titulo}
                            className="w-full rounded-md"
                        />

                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tipos;
