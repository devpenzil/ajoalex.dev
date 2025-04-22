/* eslint-disable @next/next/no-img-element */
import React from "react";
import toast from "react-hot-toast";

function Highlights() {
  return (
    <div>
      <div>
        <div className="flex items-start mt-3 leading-[180%] flex-wrap">
          <h3 className="mr-2">Major Products:</h3>{" "}
          <button
            onClick={() => {
              toast("Project under construction", {
                position: "bottom-center",
                icon: "🚧",
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            }}
          >
            <div className="flex items-center border-b-2 border-dashed border-[#e9ecef] group hover:text-[#333] text-black hover:border-[#C763EC] transition duration-300">
              <h3 className="font-semibold italic whitespace-nowrap undefined cursor-pointer">
                jinX
              </h3>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewtktQa29obF6YWhm-68qbu4_o7eCQ5cuMEZqipcffw&s"
                alt="IconifyAI Logo"
                className="rounded-[4px] ml-2"
                height={22}
                width={22}
              />
            </div>
          </button>
        </div>
        <div className="flex items-start mt-3 leading-[180%] flex-wrap">
          <h3>have an idea?</h3>{" "}
          <a
            href="mailto:ajoalex012@gmail.com"
            target="_blank"
            data-umami-event="📫 Email [Button Click]"
          >
            <div className="flex items-center border-b-2 border-dashed border-[#e9ecef] group hover:text-[#333] text-black hover:border-[#aaa] ml-2 transition duration-300">
              <h3 className="font-semibold italic whitespace-nowrap not-italic">
                ajoalex012@gmail.com
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
