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
      <div className="bg-gray-100 rounded-lg shadow-md p-4">
        <div className="max-h-80 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="flex items-start mb-4">
              <img
                src={`/api/placeholder/40/40`}
                alt={message.username}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="font-medium text-gray-800 mb-1">{message.username}</p>
                  <p className="text-gray-600">{message.text}</p>
                </div>
                <p className="text-gray-500 text-sm mt-1">{message.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default ChatForo;