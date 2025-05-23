import { Github, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const ProfileCard = () => {
  return (
    <Card className="h-[600px] text-white">
      <CardContent>
        <img
          src="https://avatars.githubusercontent.com/u/67946056?v=4"
          className="h-[400px] rounded-sm object-cover"
          alt=""
        />
        <div className="text-2xl font-semibold mt-4 headerFont">
          I&apos;m Ajo 👋
        </div>
        <div className="text-base mt-2">
          Indie Hacker | Developer. I build things for fun and profit.
        </div>
        <div className="mt-4 flex gap-2">
          <a href="https://x.com/devpenzil">
            <Button size="icon" className="cursor-pointer">
              <Twitter />
            </Button>
          </a>
          <a href="https://github.com/devpenzil">
            <Button size="icon" className="cursor-pointer">
              <Github />
            </Button>
          </a>
          <a href="http://instagram.com/adv.fox">
            <Button size="icon" className="cursor-pointer">
              <Instagram />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
