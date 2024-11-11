import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
function ChatForo() {
    const messages =[
        {
            username: 'Usuario1',
            text: 'Este es mi mensaje en el foro.',
            date: '2023-05-15'
          },
          {
            username: 'Usuario2', 
            text: '¡Excelente idea! Estoy de acuerdo.',
            date: '2023-05-16'
          }
    ]

  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Foro de Discusión</h2>
        
      </div>
      <div className="space-y-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/img/userlogo.png"
                alt="Usuario"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h3 className="font-medium text-gray-800">Usuario 1</h3>
                <p className="text-gray-500 text-sm">23 de enero, 2023</p>
              </div>
            </div>
            
          </div>
          <p className="mt-3 text-gray-700">
            Este es un mensaje de ejemplo en el foro de discusión. Los usuarios pueden
            publicar sus comentarios y preguntas aquí.
          </p>
        </div>
        {/* Más temas de foro */}
      </div>
    </div>
  );
  };
export default ChatForo;