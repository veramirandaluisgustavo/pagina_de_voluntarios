import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { db } from "../../../firebase/config";
import { collection, getDocs ,where,query,addDoc,Timestamp} from "firebase/firestore";
import DropdownMessage from "./FormMessage";
import { useAuth } from "../../../utils/AuthContext";

function ChatForo() {
  const [messages, setMessages] = useState([]);
  const { id } = useParams();
  const { user} = useAuth();
  const handleSendMessage = (message) => {
    console.log("Mensaje enviado:", message);
    const sendData = {
      text: message,
      username: user.nombre,
      date: Timestamp.now(),
      foro_id: id
    }
    const dataRef = collection(db, "chats");
    addDoc(dataRef, sendData)
      .then(() => {
        console.log("Mensaje enviado correctamente");
        setMessages([...messages, sendData]);
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
      });
  };

useEffect(() => {
    const dataRef = collection(db,"chats");
    const q =  query(dataRef, where("foro_id", "==", id));
    getDocs(q)
      .then((resp) => {
        setMessages(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
  }, [])

  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Foro de Discusión</h2>
        {user?<DropdownMessage onSendMessage={handleSendMessage}></DropdownMessage>:<></>}
      </div>
      <div className="space-y-4">
        {messages.map((message, index) =>{ return(
          <div key={index} className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/img/userlogo.png"
                alt="Usuario"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h3 className="font-medium text-gray-800">{message.username}</h3>
                <p className="text-gray-500 text-sm">{message.date?.toDate ? message.date.toDate().toLocaleString() : "Fecha desconocida"}</p>
              </div>
            </div>
            
          </div>
          <p className="mt-3 text-gray-700">
            {message.text}
          </p>
        </div>)})}
        
        {/* Más temas de foro */}
      </div>
    </div>
  );
  };
export default ChatForo;