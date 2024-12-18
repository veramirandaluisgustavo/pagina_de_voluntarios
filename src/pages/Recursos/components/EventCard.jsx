import { MapPin, Calendar, Users } from 'lucide-react';

const EventCard = ({
  title,
  description,
  
  shareText = "Compartelo:",
  image // Nueva propiedad para la imagen
}) => {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-6 hover:shadow-md transition-all">
      {/* Image */}
      {image && (
        <a href={"https://www.worldpackers.com/es"} className="block w-full h-48 object-cover rounded-t-lg mb-4">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
        </a>
      )}

      {/* Title */}
      <h3 className="text-xl font-medium text-purple-800 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-1xl mb-4">
        {description}
      </p>
   
      
    </div>
  );
};

export default EventCard;
