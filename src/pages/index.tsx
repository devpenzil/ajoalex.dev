import Blogs from "@/components/Blogs";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import ProfileCard from "@/components/ProfileCard";
import Timeline from "@/components/Timeline";
import Tools from "@/components/Tools";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Ajo Alex</title>
      </Head>
      <div className="lg:w-full xl:w-2/3  md:w-full px-4 mx-auto py-6">
        <Navbar />
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 md:grid-rows-2">
          <div className="md:row-span-2">
            <ProfileCard />
          </div>
          <div>
            <Timeline />
          </div>
          <div className="md:col-start-2 md:row-start-2">
            <Tools />
          </div>
          <div className="md:row-span-2 md:col-start-3 md:row-start-1">
            <Products />
          </div>
        </div>
        <Blogs />
      </div>
    </>
  );
};

export default Index;
