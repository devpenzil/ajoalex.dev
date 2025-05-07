import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import React from "react";

const Shop = () => {
  return (
    <div className="lg:w-full xl:w-2/3  md:w-full px-4 mx-auto py-6 min-h-screen">
      <Navbar />

      <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-4 mt-4">
        <div className="hidden md:block">
          <ProfileCard />
        </div>
        <div className="col-span-2">
          <ComingSoon />
        </div>
      </div>
    </div>
  );
};

export default Shop;
