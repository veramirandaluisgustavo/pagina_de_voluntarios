import { db } from "./src/firebase/config.js";

import { getFirestore, collection, addDoc } from "firebase/firestore";
// Datos que deseas insertar
const datos = [
  {
    id_voluntariado: 1,
    id_usuario: 101,
    fecha: "2024-01-15",
    estado: "Pendiente",
  },
  {
    id_voluntariado: 2,
    id_usuario: 102,
    fecha: "2024-02-20",
    estado: "Aceptado",
  },
  {
    id_voluntariado: 3,
    id_usuario: 103,
    fecha: "2024-03-10",
    estado: "Rechazado",
  },
  {
    id_voluntariado: 1,
    id_usuario: 104,
    fecha: "2024-04-05",
    estado: "Pendiente",
  },
  {
    id_voluntariado: 4,
    id_usuario: 105,
    fecha: "2024-05-18",
    estado: "Aceptado",
  },
  {
    id_voluntariado: 2,
    id_usuario: 106,
    fecha: "2024-06-30",
    estado: "Pendiente",
  },
  {
    id_voluntariado: 5,
    id_usuario: 107,
    fecha: "2024-07-22",
    estado: "Rechazado",
  },
  {
    id_voluntariado: 3,
    id_usuario: 108,
    fecha: "2024-08-14",
    estado: "Aceptado",
  },
  {
    id_voluntariado: 4,
    id_usuario: 109,
    fecha: "2024-09-03",
    estado: "Pendiente",
  },
  {
    id_voluntariado: 5,
    id_usuario: 110,
    fecha: "2024-10-12",
    estado: "Rechazado",
  },
];
// Función para insertar los datos
async function insertData() {
  const collectionRef = collection(db, "postulacion"); // Nombre de la colección

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
