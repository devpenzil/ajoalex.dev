/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardContent } from "./ui/card";

const Timeline = () => {
  const timelines = [
    {
      title: "Postilo",
      date: "May 2025",
      description: "Launching soon",
      image: "/postilo.png",
    },
    {
      title: "CVSpace",
      date: "Nov 2021",
      description: "Launched CVSpace",
      image: "/cvspace.avif",
    },
  ];
  return (
    <Card className="h-[300px] text-white">
      <CardContent className="overflow-auto">
        <div className="text-xl font-semibold">Timeline</div>
        <div>
          {timelines?.map((obj) => {
            return (
              <div
                className="flex flex-row py-2 justify-between items-center"
                key={obj.title}
              >
                <div className="flex flex-row items-center">
                  <img
                    src={obj.image}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover mr-2"
                  />
                  <div>
                    <div className="text-sm font-semibold">{obj.title}</div>
                    <div className="text-xs font-normal">{obj.description}</div>
                  </div>
                </div>
                <div className="text-xs font-semibold">{obj.date}</div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Timeline;
