import React, { useState } from "react";
import { db } from "../../firebase/config"; // Importar la instancia de Firestore
import { collection, addDoc } from "firebase/firestore"; // Importar funciones de Firestore
import { useNavigate } from "react-router-dom"; // Importar hook de navegación
import { Toaster, toast } from "react-hot-toast";
function Registro() {
    const navigate = useNavigate(); // Hook de navegación
  const [tipoRegistro, setTipoRegistro] = useState("usuario"); // Predeterminado a "usuario"
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    password: "",
    direccion: "",
    descripcion: "",
    mision: "",
    web: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tipoRegistro === "usuario") {
        const UserRef = collection(db, "usuarios");
        const UserDataSend = {nombre: formData.nombre, email: formData.email, telefono: formData.telefono, password: formData.password};
        addDoc(UserRef, UserDataSend)
          .then(() => {
           

           toast.success("Usuario registrado exitosamente");
           setTimeout(() => {
            navigate("/login");
          }, 2000);
          })
          .catch((error) => {
            console.error("Error al registrar usuario:", error);
            toast.error("Error al registrar usuario");
          });
      
    } else if (tipoRegistro === "ong") {
      const fechaDeCreacion = new Date().toISOString(); // Generar fecha automáticamente
      const finalData = { ...formData, fecha_de_creacion: fechaDeCreacion };
      const OngRef = collection(db, "ongs");
        addDoc(OngRef, finalData)
          .then(() => {
           
            toast.success("ONG registrada exitosamente");
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          })
          .catch((error) => {
            console.error("Error al registrar ong:", error);
            toast.error("Error al registrar ong");
          });
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url(/images/fondo.jpg)] bg-cover">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6 bg-opacity-85">
        <h1 className="text-4xl font-bold mb-6 text-center text-black-600">
          Registro
        </h1>
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-l-md ${
              tipoRegistro === "usuario"
                ? "bg-purple-800 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setTipoRegistro("usuario")}
          >
            Usuario
          </button>
          <button
            className={`px-4 py-2 rounded-r-md ${
              tipoRegistro === "ong"
                ? "bg-purple-800 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setTipoRegistro("ong")}
          >
            ONG
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campos comunes */}
          <div>
            <label htmlFor="nombre" className="block font-medium">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block font-medium">
              Teléfono
            </label>
            <input
              type="text"
              name="telefono"
              id="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campos específicos de ONG */}
          {tipoRegistro === "ong" && (
            <>
              <div>
                <label htmlFor="direccion" className="block font-medium">
                  Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  id="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="descripcion" className="block font-medium">
                  Descripción
                </label>
                <textarea
                  name="descripcion"
                  id="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
              <div>
                <label htmlFor="mision" className="block font-medium">
                  Misión
                </label>
                <textarea
                  name="mision"
                  id="mision"
                  value={formData.mision}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
              <div>
                <label htmlFor="web" className="block font-medium">
                  Sitio web
                </label>
                <input
                  type="text"
                  name="web"
                  id="web"
                  value={formData.web}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Registrar {tipoRegistro === "usuario" ? "Usuario" : "ONG"}
          </button>
        </form>
      </div>
      <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
    </div>
  );
}

export default Registro;
