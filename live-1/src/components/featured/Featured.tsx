import React from "react";
import { FeaturedCard } from "./FeaturedCard";

export const Featured = () => {
  return (
    <div className="">
      <h2 className="text-4xl">Featured</h2>
      <div className="gap-10 flex justify-center items-center">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
};
