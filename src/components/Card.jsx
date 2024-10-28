import React, { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const  Card = ({ 
  title, 
  url, 
  description, 
  location, 
  categories = [], 
  tags = [] 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;
  const shouldTruncate = description.length > maxLength;

  const displayText = isExpanded ? description : (
    shouldTruncate ? `${description.slice(0, maxLength)}...` : description
  );

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-purple-800">{title}</h3>
          <a 
            href={url}
            className="text-gray-500 text-sm hover:text-purple-600 inline-flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {url}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Description with expand/collapse */}
        <div className="space-y-2">
          <p className="text-gray-600 text-sm">
            {displayText}
          </p>
          {shouldTruncate && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-600 hover:text-purple-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-2 py-1"
            >
              {isExpanded ? 'Leer menos' : 'Leer más'}
            </button>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Card;