/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardContent } from "./ui/card";
import { SquareArrowOutUpRight } from "lucide-react";

const ProductsList = () => {
  const products = [
    {
      name: "Postilo",
      description:
        "Manage all your blogs and publishing in one place (Launching soon)",
      image_url:
        "https://images.pexels.com/photos/31744682/pexels-photo-31744682/free-photo-of-minimalist-abstract-composition-with-leaves.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      link: "",
    },
    {
      name: "CV Space",
      description: "Create ATS Ready Resume in minutes (Discontinued)",
      image_url:
        "https://images.pexels.com/photos/31744682/pexels-photo-31744682/free-photo-of-minimalist-abstract-composition-with-leaves.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      link: "",
    },
  ];
  return (
    <Card className="w-full">
      <CardContent>
        <div className="text-3xl font-semibold headerFont">
          Check out my <span className="text-blue-500">Launchpad</span>
        </div>
        <div className="text-base font-semibold text-slate-400 mt-3">
          This is my product portfolio. I actively build, maintain, and manage
          these products on an ongoing basis.
        </div>
        {products.map((obj) => {
          return (
            <div
              key={obj.name}
              className="h-[500px] bg-white rounded-sm mt-4 p-2"
            >
              <div className="relative">
                <a
                  href={obj.link}
                  className="absolute bottom-2 right-2 border p-4 rounded-sm bg-[#121114]/2 text-[#121114]  hover:bg-white  transition-all duration-300"
                >
                  <SquareArrowOutUpRight />
                </a>
                <img
                  src={obj.image_url}
                  alt=""
                  className="h-[400px] mb-2 object-cover w-full rounded-sm"
                />
              </div>
              <div className="flex flex-col h-[80px] items-start justify-center">
                <div className="text-lg font-semibold">{obj.name}</div>
                <div className="text-sm  mt-1">{obj.description}</div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ProductsList;
