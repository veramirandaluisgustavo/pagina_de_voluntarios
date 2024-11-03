import React from 'react';
import { Link } from 'react-router-dom';

function Foro() {
    const categories = [
        {
            title: "Información general",
            description: "En este foro hablamos sobre aspectos generales del voluntariado, podemos resolver dudas referentes a la acción voluntaria, informamos sobre novedades en las entidades,…",
            debates: 15,
            entries: 40,
            lastPost: "hace 2 años, 1 mes",
            lastUser: "Elvira Aliaga González-Albo",
            link: "/info-general"
        },
        {
            title: "Formación",
            description: "En este foro comentamos aspectos formativos, anunciamos cursos de formación para personas voluntarias, debatimos sobre lo que aprendemos en las formaciones, en definitiva, ¡aprendemos juntos/as!",
            debates: 15,
            entries: 70,
            lastPost: "hace 7 meses, 3 semanas",
            lastUser: "PillsEmari",
            link: "/formacion"
        },
        {
            title: "Historias de personas voluntarias",
            description: "Este es un espacio para compartir experiencias de voluntariado, historias de personas voluntarias, experiencias que ilustren el día a día de la acción voluntaria, experiencias para contagiar nuestro entusiasmo.",
            debates: 70,
            entries: 80,
            lastPost: "hace 3 meses",
            lastUser: "manulator",
            link: "/otro-tema"

        },
        {
            title: "Información de voluntariado por territorios",
            description: " En este Foro vamos a compartir información sobre voluntariado, organizada por territorios, de tal forma que podamos encontrar recursos útiles a los que dirigirnos en nuestros lugares de residencia. Subimos información por comunidades autónomas, y en cada comunidad también puedes encontrar algunos recursos provinciales o locales. ",
            debates: 21,
            entries: 39,
            lastPost: "hace 7 meses",
            lastUser: "aveczate",
            link: "/otro-tema"

        },
        {
            title: "Ofertas de voluntariado",
            description: " En este foro podemos colgar ofertas de voluntariado de las entidades o ONGs que buscan voluntarios/as para proyectos concretos. Si quieres ser voluntario/a entra en este foro y echa un vistazo a las ofertas.",
            debates: 196,
            entries: 224,
            lastPost: "hace 1 mes",
            lastUser: "Maria Fdez",
            link: "/otro-tema"

        },
        {
            title: "Voluntariado en América Latina",
            description: "En este Foro queremos compartir información sobre voluntariado en organizaciones de la sociedad civil en América Latina. Proyectos sociales y solidarios. ",
            debates: 15,
            entries: 19,
            lastPost: "hace 3 años",
            lastUser: "marta5",
            link: "/otro-tema"

        },
        {
            title: "Voluntariado en tiempos de coronavirus",
            description: "Este foro tiene el objetivo de abrir un canal de comunicación en nuestra página para podáis compartir iniciativas, experiencias y propuestas relacionadas con el voluntariado en estos tiempos que estamos viviendo. Puedes explicarnos cómo está afrontando tu organización estos momentos. Qué iniciativas solidarias estáis llevando a cabo. Qué acciones de voluntariado estás realizando o conoces.",
            debates: 5,
            entries: 42,
            lastPost: "hace 7 meses",
            lastUser: "maria",
            link: "/otro-tema"

        },

    ];

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
