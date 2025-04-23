/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

function Accordian() {
  const [showData, setShowData] = useState<boolean>(false);
  return (
    <div>
      <h3
        data-orientation="vertical"
        data-state="open"
        className="flex"
        onClick={() => {
          setShowData(!showData);
        }}
      >
        <button
          type="button"
          aria-controls="radix-:R4dbpda:"
          aria-expanded="true"
          data-state="open"
          data-orientation="vertical"
          id="radix-:Rdbpda:"
          className="flex flex-1 items-center justify-between py-4 transition-all [&[data-state=open]>div>div>svg]:rotate-180 group"
          data-radix-collection-item
        >
          <div className="flex items-center">
            <div className="p-[1px] bg-[#e9ecef] h-[22px] w-[22px] rounded-sm flex items-center justify-center group-hover:bg-zinc-300 transition duration-300">
              <svg
                width="1.5em"
                height="1.5em"
                strokeWidth={3}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
                className="h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 dark:text-zinc-400"
              >
                <path
                  d="M6 12H12M18 12H12M12 12V6M12 12V18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="ml-4 flex items-center mx-2 border-b-2 border-dashed border-[#e9ecef] group hover:text-[#333] text-black transition duration-300 hover:border-zinc-600">
              <h3 className="text-xl font-semibold italic whitespace-nowrap">
                Thumbnails.pro
              </h3>
              <img
                src="https://utfs.io/f/41e6c7d9-3d62-4466-ba9c-c0abd52a411d-i7r0kq.png"
                alt="Thumbnails.pro"
                className="ml-2 rounded-md drop-shadow-xl"
                height={22}
                width={22}
              />
            </div>
          </div>{" "}
          <h4 className="italic text-zinc-500">2024</h4>
        </button>
      </h3>
      {showData && (
        <div
          data-state="open"
          id="radix-:R4dbpda:"
          role="region"
          aria-labelledby="radix-:Rdbpda:"
          data-orientation="vertical"
          className="w-[105%] pr-[5%] overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down relative"
        >
          <div className="pb-4 pt-0">
            <div className="flex w-full justify-between flex-col md:flex-row">
              <div className="flex-1 md:mr-3 mr-0">
                <p className="leading-[180%] mb-2">
                  An app that assists YouTube creators make personalized custom
                  thumbnails with AI, with ability to visualize outfits,
                  scenery, and more.
                </p>
                <a
                  href="https://www.thumbnails.pro/"
                  target="_blank"
                  data-umami-event="🔗 Thumbnails.pro [Link Click]"
                >
                  <h4 className="w-fit font-medium italic border-b border-dashed border-transparent hover:border-blue-500 transition duration-300 text-blue-500 flex items-center">
                    thumbnails.pro
                    <svg
                      width="1.5em"
                      height="1.5em"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="currentColor"
                      className="text-xs ml-1 rotate-[-45deg]"
                    >
                      <path
                        d="M14 11.9976C14 9.5059 11.683 7 8.85714 7C8.52241 7 7.41904 7.00001 7.14286 7.00001C4.30254 7.00001 2 9.23752 2 11.9976C2 14.376 3.70973 16.3664 6 16.8714C6.36756 16.9525 6.75006 16.9952 7.14286 16.9952"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 11.9976C10 14.4893 12.317 16.9952 15.1429 16.9952C15.4776 16.9952 16.581 16.9952 16.8571 16.9952C19.6975 16.9952 22 14.7577 22 11.9976C22 9.6192 20.2903 7.62884 18 7.12383C17.6324 7.04278 17.2499 6.99999 16.8571 6.99999"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </h4>
                </a>
                <div className="mt-2 flex items-center flex-wrap text-base italic text-[#9CA3AF]">
                  <h5>Side Project</h5>
                  <div className="h-[3px] w-[3px] bg-zinc-400 mt-[1px] mx-2 rounded-full" />
                  <h5>Sold</h5>
                </div>
              </div>
              <img
                src="https://utfs.io/f/acfc08d7-7ff7-4a7c-994e-bd5aa00b8059-ujt63x.png"
                className="mt-5 md:mt-0 w-full md:w-[240px] rounded-sm drop-shadow-lg mb-1 aspect-auto h-auto object-cover"
                width={240}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordian;
