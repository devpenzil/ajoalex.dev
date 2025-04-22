import React from "react";

function Blogs() {
  const blogData = [
    {
      name: "PiP in React Native for Android",
      desc: "Nowadays, React Native is becoming increasingly popular in the world of mobile development. Many enterprise-level applications are migrating to React Native due to the numerous changes",
      link: "https://ajoalex.medium.com/pip-in-react-native-for-android-36a4be3cb088",
    },
    {
      name: "RPA — A Brief Review",
      desc: "Nowadays, there are many myths about RPA. Some of them are:-",
      link: "https://ajoalex.medium.com/rpa-a-brief-review-2af5ccaee313",
    },
    {
      name: "Host your Fastapi server on Heroku",
      desc: "Here we have to create a file for our python code. so create a file named main.py and write some code like this",
      link: "https://ajoalex.medium.com/host-your-fastapi-server-on-heroku-d29916892c9a",
    },
  ];
  return (
    <div>
      {blogData.map((obj) => {
        return (
          <div key={obj.name} className="mt-4">
            <div>
              <a href={obj.link} target="_blank">
                <div className="flex">
                  <div className=" flex items-center border-b-2 border-dashed cursor-pointer border-[#e9ecef] group hover:text-[#333] text-black transition duration-300 hover:border-zinc-600">
                    <h3 className="text-xl font-semibold italic whitespace-nowrap">
                      {obj.name}
                    </h3>
                  </div>
                </div>
              </a>

              <p className="leading-[180%] mb-2">{obj.desc}...</p>
            </div>
          </div>
        );
      })}
      <div className="flex items-start flex-wrap mt-3 leading-[180%]">
        <h4>Want to read More ?</h4>
        <a
          href="https://ajoalex.medium.com/"
          target="_blank"
          data-umami-event="📆 Book Call [Button Click]"
        >
          <div className="flex items-center border-b-2 border-dashed border-[#e9ecef] group hover:text-[#333] text-black ml-2 hover:border-[#000] !flex-1 transition duration-300">
            <h3 className="font-semibold italic whitespace-nowrap undefined">
              Medium
            </h3>
            <img
              src="https://cal.com/android-chrome-512x512.png"
              alt="Medium Logo"
              className="undefined ml-2"
              height={22}
              width={22}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Blogs;
