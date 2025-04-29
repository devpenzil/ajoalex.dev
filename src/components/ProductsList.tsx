/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardContent } from "./ui/card";
import { SquareArrowOutUpRight } from "lucide-react";

const ProductsList = () => {
  return (
    <Card className="w-full text-white">
      <CardContent>
        <div className="text-3xl font-semibold">
          Check out my <span className="text-blue-500">Products</span>
        </div>
        <div className="text-base font-semibold text-slate-400 mt-3">
          This is my product portfolio. I actively build, maintain, and manage
          these products on an ongoing basis.
        </div>
        {[1, 2].map((obj) => {
          return (
            <div
              key={obj}
              className="h-[500px] bg-[#121114] rounded-sm mt-4 p-2"
            >
              <div className="relative">
                <a
                  href="#"
                  className="absolute bottom-2 right-2 border p-4 rounded-sm bg-[#121114]/2 text-[#121114]  hover:bg-[#121114] hover:text-white transition-all duration-300"
                >
                  <SquareArrowOutUpRight />
                </a>
                <img
                  src="https://images.pexels.com/photos/31744682/pexels-photo-31744682/free-photo-of-minimalist-abstract-composition-with-leaves.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                  alt=""
                  className="h-[400px] mb-2 object-cover w-full rounded-sm"
                />
              </div>
              <div className="flex flex-col h-[80px] items-start justify-center">
                <div className="text-lg font-semibold">Product Name {obj}</div>
                <div className="text-sm text-slate-300 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, cumque.
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ProductsList;
