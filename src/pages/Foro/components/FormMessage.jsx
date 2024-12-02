import React, { useState } from "react";

const DropdownMessage = ({ onSendMessage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage(""); // Limpia el campo de texto
      setIsOpen(false); // Cierra el menú después de enviar
    } else {
      alert("El mensaje no puede estar vacío.");
    }
  };

  return (
    <div className="relative inline-block text-left">
      {/* Botón para abrir/cerrar el menú */}
      <button
        onClick={handleToggleMenu}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Escribir Mensaje
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="p-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="message"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe tu mensaje..."
            />
          </div>
          <div className="flex justify-end p-2 space-x-2">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMessage;