import React from "react";

const ExpertProfile = ({ expert }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-center">
      <img
        src={expert.photo}
        alt={expert.name}
        className="w-24 h-24 mx-auto rounded-full"
      />
      <h2 className="mt-2 text-xl font-semibold">{expert.name}</h2>
      <p className="text-gray-600">{expert.bio}</p>
    </div>
  );
};

export default ExpertProfile;
