import React from "react";
import { Link } from "react-router-dom";
import partsData from "../../../../mock/mockData.json"; // Adjust the path as necessary

const Parts = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Select a Part Category
      </h1>

      {/* Category Selection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {partsData.map((category) => (
          <div
            key={category.category}
            className="card cursor-pointer border rounded-lg p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <Link to={`/category/${category.category}`}>
              <h3 className="text-2xl font-semibold">{category.category}</h3>
              <img
                src={category.parts[0].image}
                alt={category.category}
                className="w-full h-48 object-cover rounded-lg mt-4"
              />
              <p className="text-lg text-gray-500 mb-4">
                Select your {category.category.toLowerCase()}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parts;
