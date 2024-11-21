import React from "react";

const TimeSlots = ({ timeSlots, onBook }) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      {timeSlots.map((slot, index) => (
        <button
          key={index}
          disabled={slot.isBooked}
          onClick={() => onBook(index)}
          className={`p-2 rounded-lg text-white ${
            slot.isBooked
              ? "bg-gray-400"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {slot.time}
        </button>
      ))}
    </div>
  );
};

export default TimeSlots;
