import React from 'react';
import FAQItem from './FAQItem'; // Importar el componente FAQItem

function Preguntas() {
    const preguntas = [
        {
            pregunta: "Quiero hacer voluntariado, ¿por dónde empiezo?",
            respuesta: (
                <span>
                    Descubre los{' '}
                    <a
                        href='/pasos'
                        className="text-purple-600"
                    >
                        <strong>seis pasos</strong>
                    </a>{' '}
                    para ser voluntario/a, ¡seguro que te ayudarán!
                </span>
            )
        },
        {
            pregunta: "¿Cuál es la definición de persona voluntaria?",
            respuesta: "Una persona voluntaria es la que, por elección propia, dedica una parte de su tiempo a la acción solidaria y altruista, sin recibir remuneración por ello."
        },
        {
            pregunta: "¿Qué hacen las personas voluntarias?",
            respuesta: (
                <div>
                    ¡De todo!
                    <p>
                        Las personas voluntarias pueden hacer tareas muy diversas. Depende del tipo de organización y del tipo de voluntariado en el que se participa.
                    </p>
                    <p>Aquí van algunos ejemplos de las tareas de los voluntarios:</p>
                    <ul className="list-disc pl-5">
                        <li>Apoyo y asistencia directa a las personas</li>
                        <li>Investigación</li>
                        <li>Información y sensibilización</li>
                        <li>Orientación y asesoramiento</li>
                        <li>Formación y educación</li>
                        <li>Reivindicación y denuncia</li>
                        <li>Captación de fondos y recursos</li>
                        <li>Organización de eventos</li>
                        <li>Tareas de recuperación y conservación del medio ambiente</li>
                        <li>Acciones de cibervoluntariado – Voluntariado en línea</li>
                        <li>Planificación y gestión de proyectos</li>
                        <li>Dirección, gestión y mantenimiento de organizaciones</li>
                    </ul>
                </div>
            )
        },
        {
            pregunta: "¿Qué tipos de voluntariado hay?",
            respuesta: (
                <div>
                    Los tipos de voluntariado o campos de acción voluntaria se pueden definir de muchas maneras diferentes. La Ley del voluntariado del 2015 establece 10 ámbitos temáticos diferentes.
                    <p>
                        En la página{' '}
                        <a
                            href="/tipos"
                            className="text-purple-600"
                        >
                            <strong>tipos de voluntariado</strong>
                        </a>{' '}
                        encontrarás nuestra clasificación de los campos de acción donde puedes colaborar. Pero piensa que esta lista sólo pretende ser un resumen de los más frecuentes, ya que hay muchísimos ámbitos donde colaborar.
                    </p>
                </div>
            )
        },
        {
            pregunta: "La entidad con la que colaboro me ha pedido que firme un documento que especifica mi compromiso como voluntario. ¿Representa eso un contrato? ¿En qué consiste y qué valor jurídico tiene?",
            respuesta: 'Esta clase de documento es el compromiso de voluntariado, y se trata de un escrito en el que se deben recoger con nitidez los derechos y las obligaciones de ambas partes. Se trata de un contrato moral, sin validez jurídica en realidad, por el cual el voluntario/a se compromete a realizar una actividad durante un tiempo determinado y la organización a formar y a asegurar al voluntario/a.'
        },
        {
            pregunta: "Quiero viajar fuera como voluntaria, ¿cómo lo hago?",
            respuesta: "Hay muchas organizaciones que promueven proyectos de turismo solidario y de voluntariado internacional. Busca una organización de voluntariado en el ámbito de la cooperación internacional en nuestro buscador de organizaciones o contacta con la Coordinadora de ONGs de Desarrollo en España."
        },
        {
            pregunta: "Si soy menor, ¿puedo hacer voluntariado?",
            respuesta: "En principio, la Ley del voluntariado dispone que las personas voluntarias deben ser mayores de 18 años. Sin embargo, si la organización está de acuerdo, tu familia puede firmarte un consentimiento."
        },
        {
            pregunta: "Me piden dinero para participar en un proyecto de voluntariado internacional en otro país, ¿eso es normal?",
            respuesta: "Generalmente se entiende que la organización debe cubrir todos los costes que genere la acción voluntaria. Sin embargo, en los proyectos de turismo solidario, suele ser habitual que el viaje y parte de la estancia la deba costear la persona que participa en el proyecto. De todas formas, te recomendamos que consultes a la entidad para qué servirá el dinero que aportes y que pienses si estás de acuerdo."
        },
        {
            pregunta: "Si hago de voluntario en una asociación, ¿puedo recibir dinero por determinados gastos?",
            respuesta: "Sí. Se pueden justificar gastos como transportes, teléfono o dietas, que resulten del desempeño de tus actividades como voluntario dentro de la propia asociación. Los límites a esos importes vienen establecidos por la Ley sobre el IRPF."
        },
        {
            pregunta: "Soy voluntario de una asociación y durante una actividad de la misma he roto un cristal de un vecino. ¿Quién es el responsable civil?",
            respuesta: "Las asociaciones deben disponer de una póliza de responsabilidad civil extra-contractual que cubra los daños y perjuicios ocasionados accidentalmente a terceros como consecuencia de la realización de actuaciones del voluntariado. Si como voluntario/a has actuado correctamente y el daño ha sido fortuito, debería ser siempre responsabilidad de la asociación."
        },
        {
            pregunta: "Si me accidento durante una actividad con la asociación en la que actúo de voluntario, ¿quién corre con los gastos de tratamiento y recuperación?",
            respuesta: "En la Ley del voluntariado del 2015 se recoge el derecho de los voluntarios/as a ser asegurados contra los riesgos de accidente y enfermedad derivados directamente del ejercicio de la actividad voluntaria. Las asociaciones deben tener una póliza de accidentes adecuada a las características y circunstancias de la actividad que desarrollen. En caso de no disponer de ella, o de desentendimiento por parte de la asociación, puedes reclamar."
        },
        {
            pregunta: "Si soy voluntario de una ONG, ¿puedo solicitar permisos en mi trabajo para campañas puntuales con la ONG?",
            respuesta: "Puedes solicitarlos, pero ninguna empresa tiene obligación de concederlos."
        },
        {
            pregunta: "Cuando termine con mi tarea como voluntaria, ¿tengo derecho a pedir un certificado de voluntariado?",
            respuesta: "Sí, no sólo tienes derecho sino que es obligatorio que la organización en la que has colaborado te entregue una certificación al final de tu acción. Pero también puedes solicitarla durante el desarrollo de la misma. Esta certificación debe contener tus datos personales, el desempeño de la acción y una descripción de las tareas realizadas o funciones asumidas. Visita nuestra página derechos y deberes para saber más sobre tus derechos como persona voluntaria."
        },
    ];


    const preguntasPortalWeb = [

        {
            pregunta: "Quiero encontrar una ONG para hacer voluntariado, ¿qué hago?",
            respuesta: (
                <span>
                    ¡Pues enhorabuena, estás en el sitio correcto! Visita nuestra sección{' '}
                    <a
                        href="/colabora"
                        className="text-purple-600"
                    >
                        <strong>colabora con una ONG</strong>
                    </a>{' '}
                    y allí encontrarás un directorio de muchísimas organizaciones españolas e iberoamericanas que tienen proyectos de voluntariado en todo el mundo. A partir del sitio web de cada organización puedes contactar con la que más se ajuste a tus necesidades y expectativas.
                    <br /><br />
                    Pero recuerda que también puedes{' '}
                    <a
                        href="/foro"
                        className="text-purple-600"
                    >
                        <strong>participar en el foro</strong>
                    </a>{' '}
                    y explicar tu demanda de voluntariado. Seguro que habrá usuarios/as del foro que podrán orientarte.
                </span>
            )
        },
        {
            pregunta: "¿Qué debo hacer si no encuentro el país o la província en el que quiero hacer voluntariado?",
            respuesta: " En este sitio web sólo están recogidas ONGs registradas legalmente en España, en países de Iberoamérica o internacionales. Aún así, es posible que no estén registradas todas las organizaciones que hacen voluntariado en un territorio. Si descubres alguna, háznoslo saber y la añadiremos!"
        },
        {
            pregunta: "¿Puedo utilizar el foro para publicar ofertas de voluntariado?",
            respuesta: "¡Por supuesto que sí! Publica las ofertas de voluntariado de tu organización para conseguir a las personas voluntarias que necesitáis en vuestro proyecto. Si perteneces a una organización te animamos también a que des respuesta en el foro a las personas que buscan información o proyectos de voluntariado. "
        },
        {
            pregunta: "¿Qué requisitos debe cumplir una organización para constar en voluntariado.net?",
            respuesta: (
                <div>
                    Para que una organización pueda colaborar con voluntarios, debe cumplir con los siguientes requisitos:
                    <ul className="list-disc pl-5">
                        <li>Ser una organización sin ánimo de lucro.</li>
                        <li>Estar legalmente constituida en España o en países de Iberoamérica.</li>
                        <li>Tener personalidad jurídica propia.</li>
                        <li>Desarrollar programas en el marco de las actividades de interés general recogidas en la Ley del Voluntariado en España: LEY 45/2015, de 14 de octubre (BOE).</li>
                    </ul>
                    <p>
                        Si formas parte de una organización que cumple estos requisitos pero no la has encontrado en nuestra base de datos, escríbenos y la añadiremos en cuanto podamos. ¡Muchas gracias!
                    </p>
                </div>
            )
        },
        {
            pregunta: "En mi organización hacemos voluntariado pero no la he encontrado en la lista, ¿qué hago?",
            respuesta: (
                <div>
                    Para dar de alta tu organización en la base de datos de ONGs de voluntariado, sólo tienes que contactarnos y especificar la siguiente información:
                    <ul className="list-disc pl-5">
                        <li><strong>Nombre de la organización:</strong> el nombre legal y el acrónimo, si lo tenéis.</li>
                        <li><strong>Sitio web de la organización:</strong> es imprescindible para constar en la base de datos.</li>
                        <li><strong>Tipo de voluntariado:</strong> puedes indicar hasta 4 tipos diferentes.</li>
                        <li><strong>Zona geográfica de actuación:</strong> es importante que indiques si tenéis proyectos exclusivamente locales (indicad en qué localidad), o de ámbito provincial, estatal o internacional.</li>
                    </ul>
                </div>
            )
        },
        {
            pregunta: "¿Qué puedo hacer si quiero anunciar un curso de formación del voluntariado en voluntariado.net?",
            respuesta: (
                <span>
                    En este sitio web anunciamos formaciones de varias organizaciones. Puedes{' '}
                    <a
                        href="/FORMATE"
                        className="text-purple-600"
                    >
                        <strong>contactar con nosotros</strong>
                    </a>{' '}
                    para ver si podemos incluir vuestras formaciones en el portal. ¡Muchas gracias!
                </span>
            )
        },


    ];

    return (
        <>

            <img
                src="/images/preguntas.png"
                alt="Descripción de la imagen"
                className="w-screen h-auto mb-8" // 'w-screen' para que ocupe todo el ancho de la pantalla
            />
            <div className="max-w-7xl mx-auto my-20">
                <p className="mt-6 mb-6 text-4xl leading-relaxed">
                    En esta sección damos respuesta a las preguntas más frecuentes alrededor del voluntariado y del funcionamiento de esta plataforma web. Si tienes más dudas, puedes preguntar en el <a href="/foro" className="text-purple-600 font-bold">foro</a>.
                </p>

                <h2 className="text-7xl font-bold text-purple-700 mt-12 mb-12">Preguntas sobre Voluntariado</h2>

                {preguntas.map((item, index) => (
                    <FAQItem key={index} question={item.pregunta} answer={item.respuesta} />
                ))}

                <h3 className="text-7xl font-bold text-purple-700 mt-12 mb-12">Preguntas sobre el portal web</h3>
                {preguntasPortalWeb.map((item, index) => (
                <FAQItem key={index + preguntas.length} question={item.pregunta} answer={item.respuesta} />
            ))}
            </div>
        </>
    );

}

export default Preguntas;
