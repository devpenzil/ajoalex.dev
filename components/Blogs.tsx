import React from "react";

function Blogs() {
  return (
    <div>
      {[1, 2, 3].map((obj) => {
        return (
          <div key={obj} className="mt-4">
            <div>
              <div className="flex">
                <div className=" flex items-center border-b-2 border-dashed cursor-pointer border-[#e9ecef] group hover:text-[#333] text-black transition duration-300 hover:border-zinc-600">
                  <h3 className="text-xl font-semibold italic whitespace-nowrap">
                    Thumbnails.pro
                  </h3>
                </div>
              </div>

              <p className="leading-[180%] mb-2">
                An app that assists YouTube creators make personalized custom
                thumbnails with AI, with ability to visualize outfits, scenery,
                and more.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
