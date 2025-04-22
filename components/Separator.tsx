import React, { FC } from "react";

interface Props {
  label: string;
}

const Separator: FC<Props> = ({ label }) => {
  return (
    <div className="my-5 w-full flex items-center">
      <div className="h-[2px] bg-[#e9ecef] flex-1 rounded-full"></div>
      <h4 className="mx-2 italic text-zinc-300 font-normal text-sm dancingScript">
        {label}
      </h4>
      <div className="h-[2px] bg-[#e9ecef] w-[5%] rounded-full"></div>
    </div>
  );
};

export default Separator;
