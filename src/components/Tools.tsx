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
      name: "Github",
      icon: "/github.svg",
    },
    {
      name: "Stripe",
      icon: "/stripe.jpeg",
    },
    {
      name: "Arc",
      icon: "/arc.png",
    },
  ];

  return (
    <Card className="h-[280px] text-white">
      <CardContent>
        <div className="text-xl font-semibold headerFont">My tools</div>

        <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-2">
          {tools.map((item) => (
            <div
              key={item.name}
              className="flex h-[100px] w-full flex-col items-center justify-center rounded-lg bg-[#121114]"
            >
              <img
                src={item.icon}
                className="h-[40px] w-[40px] object-contain"
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
