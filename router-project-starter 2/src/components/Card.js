import React from "react";

const Card = ({ data }) => {
  return (
    <div className="max-w-sm bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border border-gray-700 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500 p-5">
      <div className="p-4">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white transition-colors duration-200 hover:text-blue-400">
          {data.institutionName}
        </h2>
        <p className="text-gray-400">{data.institutionType}</p>
        <p className="text-gray-300">
          <strong>गाव:</strong> {data.village}, <strong>तालुका:</strong> {data.taluka}
        </p>
        <p className="text-gray-300">
          <strong>सौर क्षमता:</strong> {data.solarCapacity}
        </p>
      </div>
    </div>
  );
};

export default Card;
