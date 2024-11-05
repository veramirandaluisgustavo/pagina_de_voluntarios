import EventCard from "../../../components/EventCard";


const Eventos = () => {
  const events = [
    {
      title: "¿Cómo desarrollar e implementar un plan de voluntariado?",
      description: "Sin un plan de voluntariado, la incorporación de personas voluntarias no surge de la reflexión, sino de la reacción a la demanda de los proyectos en los que trabajamos. Invertir esfuerzos en elaborar un plan de voluntariado acorde con la misión de la...",
      startDate: "21/11/2018",
      endDate: "21/11/2018",
      location: "Sucre",
      type: "Presencial",
      organizer: "FEVOCAM, Fundación MonteSucre y La Casa Encendida"
    },
    {
      title: "¿Cómo desarrollar formaciones por competencias?",
      description: "Este Microlearning tiene como objetivo principal comprender la importancia de la formación en las competencias transversales de las personas voluntarias, así como aprender a diseñarlas, teniendo en cuenta los marcos normativos que sustenten el recono...",
      startDate: "14/02/2023",
      endDate: "31/12/2023",
      location: "Todo el Estado",
      type: "Online",
      organizer: "Bolivia hacia adelante"
    },
    {
      title: "Prevención, con 'P' de personas Curso online sobre Prevención del abuso de drogas",
      description: "Cinco semanas en las que conversar en torno a los modos más efectivos de dinamizar procesos preventivos del abuso de drogas basados en la evidencia.",
      startDate: "01/10/2019",
      endDate: "04/11/2019",
      location: "Todo el Estado",
      type: "Online",
      organizer: "Edex"
    }
  ];

  return (

    <div className="p-6 bg-purple-700">
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