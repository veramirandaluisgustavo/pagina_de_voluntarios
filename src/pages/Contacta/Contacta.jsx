import React, { useState } from 'react';
import { collection,addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../utils/AuthContext';
const Contacta = () => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    location: '',
    categories: [],
    tags: []
  });

  const [newCategory, setNewCategory] = useState('');
  const [newTag, setNewTag] = useState('');
  const {user} = useAuth();

  // Sample locations - esto podría venir de una API o props
  const locations = ['New York', 'London', 'Tokyo', 'Paris', 'Berlin'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !formData.categories.includes(newCategory)) {
      setFormData(prev => ({
        ...prev,
        categories: [...prev.categories, newCategory.trim()]
      }));
      setNewCategory('');
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeCategory = (categoryToRemove) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.filter(cat => cat !== categoryToRemove)
    }));
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRef = collection(db,'post')
    addDoc(dataRef,{...formData,ong_id:user.id})
    setFormData({
        title: '',
        url: '',
        description: '',
        location: '',
        categories: [],
        tags: []
      })

  };

  return (
    <div className="max-w-2xl mx-auto p-6 mb-[100px]">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Field */}
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description Field */}
        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            required
          />
        </div>

        {/* URL Field */}
        <div className="space-y-2">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            URL
          </label>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Location Select */}
        <div className="space-y-2">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a location</option>
            {locations.map(location => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Categories Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Categories</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a category"
            />
            <button
              type="button"
              onClick={handleAddCategory}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.categories.map(category => (
              <span key={category} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full flex items-center gap-2">
                {category}
                <button
                  type="button"
                  onClick={() => removeCategory(category)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Tags Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Tags</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a tag"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-green-100 text-green-800 rounded-full flex items-center gap-2">
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="text-green-600 hover:text-green-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contacta;