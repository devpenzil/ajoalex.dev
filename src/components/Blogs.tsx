/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ArrowUpRight } from "lucide-react";
import axios from "axios";
import { blogType } from "@/types/service";

const Blogs = () => {
  const [Blogs, setBlogs] = useState<Array<blogType>>();
  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?username=devpenzil&per_page=3")
      .then((response) => {
        setBlogs(response.data);
      });
  }, []);
  return (
    <Card className="h-[360px] mt-4 md:mt-0 text-white">
      <CardContent>
        <div className="text-xl font-semibold">My Latest Blogs</div>
        <a
          href={"https://dev.to/devpenzil"}
          className="flex items-center gap-2 text-blue-500 text-xs hover:underline mt-1"
        >
          Read all blogs <ArrowUpRight />
        </a>
        <div className="md:grid flex overflow-auto md:grid-cols-3 grid-rows-1 gap-4 mt-2">
          {Blogs?.map((item) => (
            <div
              key={item.title}
              className="flex min-w-full flex-col items-start justify-center rounded-lg bg-[#121114] p-2"
            >
              <img
                src={item?.cover_image}
                alt=""
                className="h-[180px] mb-2 object-cover w-full rounded-sm"
              />
              <div className="text-sm text-slate-300">{item.title}</div>
              <div className="text-xs text-slate-400 mt-1">
                {item.readable_publish_date}
              </div>
              <a
                href={item.url}
                className="text-blue-500 text-xs hover:underline mt-1"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Blogs;
