import React from "react";
import { Card, CardContent } from "./ui/card";

const ComingSoon = () => {
  return (
    <Card className=" h-[400px] ">
      <CardContent>
        <div className="text-3xl font-semibold h-[360px] flex justify-center items-center">
          Coming Soon
        </div>
      </CardContent>
    </Card>
  );
};

export default ComingSoon;
