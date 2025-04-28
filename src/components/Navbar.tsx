import { CalendarCheck, House, Newspaper, Package } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Navbar: FC = () => {
  const route = useRouter();

  console.log(route.pathname);

  return (
    <Card>
      <CardContent className="flex flex-row justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/67946056?v=4"
              alt="@shadcn"
            />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          <div className="text-xl font-bold">@ajoalex</div>
        </div>
        <div>
          <Link href={"/"}>
            <Button
              className="mr-2 cursor-pointer"
              variant={route?.pathname === "/" ? "secondary" : "default"}
            >
              <House /> Home
            </Button>
          </Link>
          <Link href={"/newsletter"}>
            <Button
              className="mr-2 cursor-pointer"
              variant={
                route?.pathname === "/newsletter" ? "secondary" : "default"
              }
            >
              <Newspaper /> Newsletter
            </Button>
          </Link>
          <Link href={"/products"}>
            <Button
              className="cursor-pointer"
              variant={
                route?.pathname === "/products" ? "secondary" : "default"
              }
            >
              <Package /> Products
            </Button>
          </Link>
        </div>
        <div>
          <a href="https://cal.com/ajoalex/30min">
            <Button className="cursor-pointer">
              Book a Call <CalendarCheck />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default Navbar;
