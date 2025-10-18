import React from "react";
import MusicToggleButton from "../components/MusicToggleButton";
import RealisticTerminal from "../components/RealisticTerminal";
import PhysicsIDCard from "../components/PhisicsIdCard";

function Terminal() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      <div className="hidden lg:flex h-screen">
        <div className="w-[40%] relative bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <PhysicsIDCard />
        </div>

        <div className="w-[60%] border-l border-green-900/50">
          <RealisticTerminal />
        </div>
      </div>

      <div className="lg:hidden h-screen">
        <RealisticTerminal />
      </div>

      <MusicToggleButton />
    </div>
  );
}

export default Terminal;
