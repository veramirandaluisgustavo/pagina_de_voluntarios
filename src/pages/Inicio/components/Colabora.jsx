import Card from "../../../components/Card";

const Colabora = () => {
    const foundations = [
      {
        title: "fundacion contra la paralisis cerebral",
        url: "http://fcpc.cat/",
        description: "Nuestra misión es dar dignidad a las personas con parálisis cerebral poniendo sus capacidades en valor, dotándoles de una mayor autonomía personal e incrementando su calidad de vida, ofreciéndoles programas de apoyo adaptados a sus necesidades ya sus necesidades familias. Por nuestra experiencia sabemos que ésta es una tarea compleja y que requiere de unos medios con los que no siempre se cuenta. Es aquí donde la Fundación quiere incidir, al dotar a estos programas de los recursos necesarios para hacerlos una realidad y hacer posible que las personas con parálisis cerebral puedan tener una vida más plena y satisfactoria.",
        location: "Sucre",
        categories: ["Discapacidad", "Infancia, Juventud y familia"],
        tags: ["Ocio y tiempo libre"]
      },
      {
        title: "FUNDACIÓN FUNDMEJOR",
        url: "https://www.fundamundomejor.org/",
        description: "Nuestra Fundación se dedica a servir la humanidad, enfocándose especialmente en el futuro de nuestra sociedad: los niños. Atendemos a aquellos en situación de vulnerabilidad y riesgo, incluyendo la adicción a las drogas, la prostitución y la delincuencia, hasta los 17 años. También apoyamos a las familias en situación de riesgo social, proporcionando ayuda y orientación para mejorar su calidad de vida y crear un entorno más saludable para el desarrollo de los niños.",
        location: "La Paz",
        categories: ["Cultura", "Deportes", "Infancia, Juventud y familia"],
        tags: ["Ocio y tiempo libre"]
      }
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {foundations.map((foundation, index) => (
          <Card key={index} {...foundation} />
        ))}
      </div>
    );
  };
  
  export default Colabora;