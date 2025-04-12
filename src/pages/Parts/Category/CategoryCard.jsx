import React from "react";
import { Link, useNavigate } from "react-router-dom";
import mockdata from "../../../../../mock/mockData.json";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const filteredParts = mockdata.find((cat) => cat.category === category)?.parts || [];

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        ← Go Back
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredParts.map((part) => (
          <div key={part.id} className="bg-red shadow-md rounded-lg p-4">
            <Link to={`/parts/${part.id}`}>
              <img
                src={part.image}
                alt={part.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-2">{part.name}</h2>
              <p className="text-gray-600">{part.description}</p>
              <p className="text-gray-800 font-bold mt-2">${part.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
