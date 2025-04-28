import React from "react";
import { Card, CardContent } from "./ui/card";
import { ArrowUpRight } from "lucide-react";

const Blogs = () => {
  return (
    <Card className="h-[400px] text-white">
      <CardContent>
        <div className="text-xl font-semibold">My Latest Blogs</div>
        <a
          href={"/products"}
          className="flex items-center gap-2 text-blue-500 text-xs hover:underline mt-1"
        >
          Read all blogs <ArrowUpRight />
        </a>
      </CardContent>
    </Card>
  );
};

export default Blogs;
