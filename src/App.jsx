import React, { useState } from "react";
import ExpertProfile from "./components/ExpertProfile";
import TimeSlots from "./components/TimeSlots";
import expertData from "./data/expertData.json";
import './App.css'

const App = () => {
  const [timeSlots, setTimeSlots] = useState(expertData.timeSlots);

  const handleBookSlot = (index) => {
    const updatedSlots = [...timeSlots];
    updatedSlots[index].isBooked = true;
    setTimeSlots(updatedSlots);
    alert(`You have booked the slot at ${updatedSlots[index].time}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <ExpertProfile expert={expertData.expert} />
      <TimeSlots timeSlots={timeSlots} onBook={handleBookSlot} />
    </div>
  );
};

export default App;