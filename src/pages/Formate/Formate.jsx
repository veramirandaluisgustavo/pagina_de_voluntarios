import { useState } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";

function Formate() {
  const [thematic, setThematic] = useState("");
  const [geographic, setGeographic] = useState("");
  const [type, setType] = useState("");
  const events = [
    {
      title: "¿Cómo desarrollar e implementar un plan de voluntariado?",
      description:
        "Sin un plan de voluntariado, la incorporación de personas voluntarias no surge de la reflexión, sino de la reacción a la demanda de los proyectos en los que trabajamos. Invertir esfuerzos en elaborar un plan de voluntariado acorde con la misión de la...",
      startDate: "21/11/2018",
      endDate: "21/11/2018",
      location: "Sucre",
      type: "Presencial",
      categories: ["Discapacidad", "Infancia, Juventud y familia"],
      organizer: "FEVOCAM, Fundación MonteSucre y La Casa Encendida",
    },
    {
      title: "¿Cómo desarrollar formaciones por competencias?",
      description:
        "Este Microlearning tiene como objetivo principal comprender la importancia de la formación en las competencias transversales de las personas voluntarias, así como aprender a diseñarlas, teniendo en cuenta los marcos normativos que sustenten el recono...",
      startDate: "14/02/2023",
      endDate: "31/12/2023",
      location: "Todo el Estado",
      type: "Online",
      categories: ["Cultura", "Deportes", "Infancia, Juventud y familia"],
      organizer: "Bolivia hacia adelante",
    },
    {
      title:
        "Prevención, con 'P' de personas Curso online sobre Prevención del abuso de drogas",
      description:
        "Cinco semanas en las que conversar en torno a los modos más efectivos de dinamizar procesos preventivos del abuso de drogas basados en la evidencia.",
      startDate: "01/10/2019",
      endDate: "04/11/2019",
      location: "Todo el Estado",
      type: "Online",
      categories: ["Cultura", "Depresion","superacion"],
      organizer: "Edex",
    },
  ];

  const thematicOptions = [
    { value: "todas", label: "Todas las temáticas" },
    { value: "adicciones", label: "Adicciones (4)" },
    { value: "ahorro", label: "Ahorro energético (1)" },
    { value: "animacion", label: "Animación Tiempo Libre (8)" },
    // Agrega más opciones aquí
  ];

  const geographicOptions = [
    { value: "todas", label: "Todas las zonas geográficas" },
    { value: "zona1", label: "Zona 1" },
    { value: "zona2", label: "Zona 2" },
    // Agrega más opciones aquí
  ];

  const typeOptions = [
    { value: "tipologia", label: "Tipología" },
    { value: "tipo1", label: "Tipo 1" },
    { value: "tipo2", label: "Tipo 2" },
    // Agrega más opciones aquí
  ];
  return (
    <div className="p-6 bg-blue-50">
      <img src="/img/formate.png" className="w-full pb-[60px]"></img>
      <div className="w-full flex justify-center pb-[30px]">
        <Select
          options={thematicOptions}
          placeholder="Todas las temáticas"
          onSelectChange={setThematic}
        />
        <Select
          options={geographicOptions}
          placeholder="Todas las zonas geográficas"
          onSelectChange={setGeographic}
        />
        <Select
          options={typeOptions}
          placeholder="Tipología"
          onSelectChange={setType}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}

export default Formate;
