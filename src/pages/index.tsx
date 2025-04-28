import Blogs from "@/components/Blogs";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import ProfileCard from "@/components/ProfileCard";
import Timeline from "@/components/Timeline";
import Tools from "@/components/Tools";
import React from "react";

const Index = () => {
  return (
    <div className="lg:w-2/3 w-full md:px-4 mx-auto py-6">
      <Navbar />
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-4">
        <div className="row-span-2">
          <ProfileCard />
        </div>
        <div>
          <Timeline />
        </div>
        <div className="col-start-2 row-start-2">
          <Tools />
        </div>
        <div className="row-span-2 col-start-3 row-start-1">
          <Products />
        </div>
      </div>
      <Blogs />
    </div>
  );
};

export default Index;
