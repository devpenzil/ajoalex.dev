import React from "react";

function Footer() {
  return (
    <div>
      <div>
        <div className="mt-5 w-full flex items-center">
          <div className="h-[2px] bg-[#e9ecef] flex-1 rounded-full" />
          <h4 className="mx-2 vulf-mono italic font-medium text-sm text-zinc-600">
            © 2024 Ajo
          </h4>
          <div className="h-[2px] bg-[#e9ecef] w-[5%] flex-1  rounded-full" />
        </div>
        <div className="text-center text-xs vulf-mono italic font-medium text-zinc-500 flex items-center justify-center mt-2">
          thanks for visiting
          <div className="h-[3px] w-[3px] bg-zinc-400 mt-[1px] mx-2 rounded-full" />
          <a
            href="https://cloud.umami.is/share/cGMUeFaG53Xgvart/ajoalex.netlify.app"
            target="_blank"
          >
            <span className="border-b border-zinc-300 border-dashed hover:border-blue-400 transition duration-300">
              site analytics
            </span>
          </a>
        </div>
        <div className="text-center text-xs vulf-mono italic font-medium text-zinc-500 flex items-center justify-center mt-2">
          Inspired from
          <div className="h-[3px] w-[3px] bg-zinc-400 mt-[1px] mx-2 rounded-full" />
          <a href="https://www.saviomartin.com/" target="_blank">
            <span className="border-b border-zinc-300 border-dashed hover:border-blue-400 transition duration-300">
              https://www.saviomartin.com/
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
