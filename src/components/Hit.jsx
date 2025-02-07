import React from 'react';

const Hit = ({ hit }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
      {/* Product Image */}
      <div className="w-full h-52 flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={hit.image || 'https://via.placeholder.com/150'}
          alt={hit.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {hit.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2">
          {hit.description}
        </p>

        {/* Price & Brand */}
        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">
            ${hit.price}
          </span>
          <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-lg">
            {hit.brand || 'Unknown Brand'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hit;
