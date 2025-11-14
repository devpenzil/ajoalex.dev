import {
  CalendarCheck,
  House,
  Menu,
  Package,
  Rocket,
  Store,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Navbar: FC = () => {
  const route = useRouter();

  console.log(route.pathname);

  return (
    <Card className="sticky top-0 z-50">
      <CardContent className="  hidden md:flex flex-row justify-between items-center ">
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
          <Link href={"/shop"}>
            <Button
              className="mr-2 cursor-pointer"
              variant={route?.pathname === "/shop" ? "secondary" : "default"}
            >
              <Store /> Shop
            </Button>
          </Link>
          <Link href={"/launchpad"}>
            <Button
              className="cursor-pointer"
              variant={
                route?.pathname === "/launchpad" ? "secondary" : "default"
              }
            >
              <Rocket /> Launchpad
            </Button>
          </Link>
        </div>
        <div>
          <a href="https://cal.com/ajoalex/discovery-call">
            <Button className="cursor-pointer">
              Book a Call <CalendarCheck />
            </Button>
          </a>
        </div>
      </CardContent>
      <CardContent className=" flex md:hidden  flex-row justify-between">
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
        <Sheet>
          <SheetTrigger>
            <span>
              <Menu />
            </span>
          </SheetTrigger>
          <SheetContent className="bg-black" side="left">
            <SheetHeader>
              <SheetTitle>
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
              </SheetTitle>
              <SheetDescription>
                <div className="mt-6">
                  <Link href={"/"}>
                    <Button
                      className="mr-2 cursor-pointer w-full"
                      variant={
                        route?.pathname === "/" ? "secondary" : "default"
                      }
                    >
                      <House /> Home
                    </Button>
                  </Link>
                </div>
                <div className="mt-2">
                  <Link href={"/shop"}>
                    <Button
                      className="mr-2 cursor-pointer w-full"
                      variant={
                        route?.pathname === "/shop" ? "secondary" : "default"
                      }
                    >
                      <Rocket /> Shop
                    </Button>
                  </Link>
                </div>
                <div className="mt-2">
                  <Link href={"/launchpad"}>
                    <Button
                      className="cursor-pointer w-full"
                      variant={
                        route?.pathname === "/launchpad"
                          ? "secondary"
                          : "default"
                      }
                    >
                      <Package /> Launchpad
                    </Button>
                  </Link>
                </div>
                <div className="mt-12">
                  <a href="https://cal.com/ajoalex/discovery-call">
                    <Button className="cursor-pointer w-full">
                      Book a Call <CalendarCheck />
                    </Button>
                  </a>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Navbar;
