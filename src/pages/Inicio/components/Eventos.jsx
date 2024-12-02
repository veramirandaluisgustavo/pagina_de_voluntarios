import { useEffect ,useState} from "react";
import EventCard from "../../../components/EventCard";
import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
const Eventos = () => {
  const [events, setEvents] = useState([]);
  
useEffect(() => {
    const dataRef = collection(db, "eventos");
    getDocs(dataRef)
      .then((resp) => {
        setEvents(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
  }, [])


  return (

    <div className="p-6 bg-purple-900">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8 custom-font">Eventos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Eventos;