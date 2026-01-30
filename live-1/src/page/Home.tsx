import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { Featured } from "../components/featured/Featured";
import { Banner } from "../components/Banner";
import { ReusableComponent } from "../components/ReusableComponent";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Navbar />
      <HeroSection />
      <Banner />
      <Featured />
      <ReusableComponent
        title="Online Store"
        image="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_800/ncom/en_US/merchandising/MNS_desktop_TEST"
        description="Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over."
        buttonText="Start Shopping"
      />

      <ReusableComponent
        title="Gaming Systems"
        image="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/merchandising/Gaming%20Systems%20banner/Nintendo%20Switch%202%20features/NCOM-Home-NS2-section-desktop"
        description="Get to know the Nintendo Switch 2 system"
        buttonText="Learn More"
      />
    </div>
  );
};
