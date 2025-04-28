import React from "react";
import { Card, CardContent } from "./ui/card";

const Tools = () => {
  const tools = [
    {
      name: "Next JS",
      icon: "/nextjs.svg",
    },
    {
      name: "SupaBase",
      icon: "/supabase.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/tailwind.svg",
    },
    {
      name: "Node JS",
      icon: "/nodejs.svg",
    },
    {
      name: "Express JS",
      icon: "/express.svg",
    },
    {
      name: "MongoDB",
      icon: "/mongodb.svg",
    },
  ];

  return (
    <Card className="h-[280px] text-white">
      <CardContent>
        <div className="text-xl font-semibold">My tools</div>

        <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-2">
          {tools.map((item) => (
            <div
              key={item.name}
              className="flex h-[100px] w-full flex-col items-center justify-center rounded-lg bg-[#121114]"
            >
              <img
                src={item.icon}
                className="h-[60px] w-[60px] object-contain"
                alt=""
              />
              <div className="text-sm text-slate-300 mt-1">{item.name}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Tools;
