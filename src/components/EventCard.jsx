
import { MapPin, Calendar, Users } from 'lucide-react';

const EventCard = ({
  title,
  description,
  startDate,
  endDate,
  location,
  type,
  organizer,
  shareText = "Compartelo:"
}) => {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-6 hover:shadow-md transition-all">
      {/* Title */}
      <h3 className="text-xl font-medium text-pink-600 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6">
        {description}
      </p>

      {/* Date and Location Section */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-purple-800">
          <Calendar className="w-5 h-5" />
          <span className="text-sm">{startDate} - {endDate}</span>
        </div>

        <div className="flex items-center gap-2 text-purple-800">
          <MapPin className="w-5 h-5" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center gap-2 text-purple-800">
          <Users className="w-5 h-5" />
          <span className="text-sm">{type}</span>
        </div>
      </div>

      {/* Organizer Section */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">Organiza:</p>
        <p className="text-sm font-medium text-gray-800">{organizer}</p>
      </div>

      {/* Share Section */}
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">{shareText}</p>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={'bi bi-facebook text-indigo-900 w-5/6'} viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={'bi bi-facebook text-indigo-900 w-4/6'} viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={'bi bi-google text-indigo-900 w-4/6'} viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventCard;