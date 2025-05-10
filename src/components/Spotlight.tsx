import React from "react";
import { Card, CardContent } from "./ui/card";
import CircularText from "@/animations/CircularText";

const Spotlight = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 my-2">
      <Card className="col-span-3 row-span-2 h-full">
        <CardContent>jhvjh</CardContent>
      </Card>
      <Card className="col-start-4 aspect-square">
        <CardContent>khbhjk</CardContent>
      </Card>
      <Card className="col-start-4 row-start-2 aspect-square">
        <CardContent>
          <CircularText
            text="REACT*BITS*COMPONENTS*"
            onHover="speedUp"
            spinDuration={20}
            className="self-center"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Spotlight;
