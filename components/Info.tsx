/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

function Info() {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      setTime(getCurrentTime);
    }, 1000);
  }, []);

  function getCurrentTime(): string {
    const now: Date = new Date();
    let hours: number = now.getHours();
    const minutes: number = now.getMinutes();
    const seconds: number = now.getSeconds();
    const ampm: string = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert to 12-hour format

    const format = (num: number): string => String(num).padStart(2, "0");

    return `${format(hours)}:${format(minutes)}:${format(seconds)} ${ampm}`;
  }

  return (
    <div>
      <div>
        <div className="flex items-center flex-wrap leading-[180%]">
          <h4>🇮🇳 Based in Kerala, India </h4>
          <div className="h-[3px] w-[3px] bg-zinc-400 mt-[1px] mx-2 rounded-full" />
          <h4 className="uppercase">{time}</h4>
        </div>
        <div className="flex items-center mt-3">
          <h4>
            Besides programming I also enjoy Motorcycle Touring as a passion and
            travel across India
          </h4>
        </div>
        <div className="flex items-start flex-wrap mt-3 leading-[180%]">
          <h4>Last listened to </h4>
          <a
            href="https://open.spotify.com/album/00hKDgPkn4bmSXs2sdD6P9"
            target="_blank"
            data-umami-event="🎵 Spotify song [Link Click]"
          >
            <div className="flex items-center border-b-2 border-dashed border-[#e9ecef] group hover:text-[#333] text-black mx-2 hover:border-[#aaa] !flex-1 transition duration-300">
              <h3 className="font-semibold italic whitespace-nowrap undefined">
                Broken Angel (feat. Helena)
              </h3>
              <img
                src="https://i.scdn.co/image/ab67616d0000b27343a17898d5a7a94e2277c4a0"
                alt="Spotify Song Thumbnail"
                className="rounded-full animate animate-spin-slow ml-2"
                height={22}
                width={22}
              />
            </div>
          </a>
          <h4>
            by {/* */}Arash{/* */} about{" "}
          </h4>{" "}
          <h4 className="ml-1">few minutes ago</h4>
        </div>
        <div className="flex items-start flex-wrap mt-3 leading-[180%]">
          <h4>I share my ideas on </h4>
          <a
            href="http://x.com/devpenzil"
            target="_blank"
            data-umami-event="🚀 Twitter [Link Click]"
          >
            <div className="flex items-center border-b-2 border-dashed border-[#e9ecef] group hover:text-[#333] text-black mx-2 hover:border-[#000] !flex-1 transition duration-300">
              <h3 className="font-semibold italic whitespace-nowrap undefined">
                Twitter / X
              </h3>
              <img
                src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10794.jpg?w=360"
                alt="X Logo"
                className="rounded ml-2"
                height={22}
                width={22}
              />
            </div>
          </a>
          <h4 className="mr-2">&amp; photos on</h4>
          <a
            href="https://www.instagram.com/adv.fox/"
            target="_blank"
            data-umami-event="🚀 Instagram [Link Click]"
          >
            <div className="flex items-center border-b-2 border-dashed border-[#e9ecef] group hover:text-[#333] text-black hover:border-[#E26548] !flex-1 transition duration-300">
              <h3 className="font-semibold italic whitespace-nowrap undefined">
                Instagram
              </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
                alt="Instagram Logo"
                className="undefined ml-2"
                height={22}
                width={22}
              />
            </div>
          </a>
        </div>
        <div className="flex items-start flex-wrap mt-3 leading-[180%]">
          <h4>Schedule a call? </h4>
          <a
            href="https://cal.com/ajoalex/30min"
            target="_blank"
            data-umami-event="📆 Book Call [Button Click]"
          >
            <div className="flex items-center border-b-2 border-dashed border-[#e9ecef] group hover:text-[#333] text-black ml-2 hover:border-[#000] !flex-1 transition duration-300">
              <h3 className="font-semibold italic whitespace-nowrap undefined">
                Calendar
              </h3>
              <img
                src="https://cal.com/android-chrome-512x512.png"
                alt="Cal Logo"
                className="undefined ml-2"
                height={22}
                width={22}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
