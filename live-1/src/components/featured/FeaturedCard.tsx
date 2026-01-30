import React from "react";

export const FeaturedCard = () => {
  return (
    <div className="flex flex-col border rounded-2xl p-4 w-[200px] h-[300px]">
      <img />
      <div className="flex justify-between flex-col">
        <h3>Creator's voice: Yakuza Kiwami 3 + Dark ties</h3>
        <div className="flex flex-col justify-between">
          <button className="bg-purple-500 py-1 px-3 rounded-full">
            Learn More
          </button>
          <div>
            <span className="text-red-600 bold">|</span> Nintendo Switch 2
          </div>
        </div>
      </div>
    </div>
  );
};
