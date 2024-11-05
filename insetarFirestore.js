import { db } from "./src/firebase/config.js";

import { getFirestore, collection, addDoc } from "firebase/firestore";
// Datos que deseas insertar
const datos = [
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
// Función para insertar los datos
async function insertData() {
  const collectionRef = collection(db, "foros"); // Nombre de la colección

  for (const item of datos) {
    try {
      await addDoc(collectionRef, item);
      console.log("Documento añadido:");
    } catch (error) {
      console.error("Error al añadir el documento:", error);
    }
  }
}

// Ejecuta la función para insertar los datos
insertData();
