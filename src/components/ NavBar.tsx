import React from "react";
import { Alert } from "./ui/alert";
import { Button } from "./ui/button";

function NavBar() {
  return (
    <Alert className="mt-6 py-4 flex text-white flex-row justify-between items-center bg-black border-black">
      <div>hello</div>
      <div>hello</div>
      <Button>Click Me </Button>
    </Alert>
  );
}

export default NavBar;
