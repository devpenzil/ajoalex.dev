import React from "react";

function Highlights() {
  return (
    <div>
      <div>
        <div className="flex items-start leading-[180%] flex-wrap">
          <h3>Recognized as</h3>{" "}
          <a
            href="https://www.producthunt.com/stories/announcing-the-golden-kitty-awards-2021-winners#:~:text=%F0%9F%8F%86%20Savio%20Martin-,(WINNER),-Best%20Community%20Member"
            target="_blank"
            data-umami-event="🏆 Maker of the year [Link Click]"
          >
            <div className="flex items-center border-b-2 border-dashed border-[#e9ecef] group hover:text-[#333] text-black hover:border-[#C35039] mx-2 transition duration-300">
              <h3 className="font-semibold italic whitespace-nowrap undefined">
                Maker of The Year 2021
              </h3>
              <img
                src="https://i.owox.com/owox_com/producthunt/logo-producthunt.png"
                alt="Producthunt Logo"
                className="undefined ml-2"
                height={22}
                width={22}
              />
            </div>
          </a>
          <h3>by Product Hunt.</h3>
        </div>
        <div className="flex items-start mt-3 leading-[180%] flex-wrap">
          <h3 className="mr-2">Major Products:</h3>{" "}
          <a
            href="https://iconifyai.com/"
            target="_blank"
            data-umami-event="🔗 IconifyAI [Link Click]"
          >
            <div className="flex items-center border-b-2 border-dashed border-[#e9ecef] group hover:text-[#333] text-black hover:border-[#C763EC] transition duration-300">
              <h3 className="font-semibold italic whitespace-nowrap undefined">
                Iconifyai.com
              </h3>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewtktQa29obF6YWhm-68qbu4_o7eCQ5cuMEZqipcffw&s"
                alt="IconifyAI Logo"
                className="rounded-[4px] ml-2"
                height={22}
                width={22}
              />
            </div>
          </a>
          <h4 className="mx-2">,</h4>
          <a
            href="https://thumbnails.pro/"
            target="_blank"
            data-umami-event="🔗 Thumbnails.pro [Link Click]"
          >
            <div className="flex items-center border-b-2 border-dashed border-[#e9ecef] group hover:text-[#333] text-black hover:border-[#F65660] transition duration-300">
              <h3 className="font-semibold italic whitespace-nowrap undefined">
                Thumbnails.pro
              </h3>
              <img
                src="https://utfs.io/f/41e6c7d9-3d62-4466-ba9c-c0abd52a411d-i7r0kq.png"
                alt="Thumbnails.pro"
                className="undefined ml-2"
                height={22}
                width={22}
              />
            </div>
          </a>
        </div>
        <div className="flex items-start mt-3 leading-[180%] flex-wrap">
          <h3>have an idea?</h3>{" "}
          <a
            href="mailto:hello@saviomartin.com"
            target="_blank"
            data-umami-event="📫 Email [Button Click]"
          >
            <div className="flex items-center border-b-2 border-dashed border-[#e9ecef] group hover:text-[#333] text-black hover:border-[#aaa] ml-2 transition duration-300">
              <h3 className="font-semibold italic whitespace-nowrap not-italic">
                hello@saviomartin.com
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
