import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import React from "react";

const Newsletter = () => {
  return (
    <div className="lg:w-2/3 w-full md:px-4 min-h-screen mx-auto py-6">
      <Navbar />

      <div className="grid grid-cols-3 grid-rows-1 gap-4 mt-4">
        <div>
          <ProfileCard />
        </div>
        <div className="col-span-2">
          <ComingSoon />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
