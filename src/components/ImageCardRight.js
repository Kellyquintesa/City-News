import React from "react";

function ImageCardRight({ name, date, desc }) {
  return (
    <div className=" border rounded-2xl bg-white mt-5 py-4 w-[300px] ml-10 relative">
      <div className=" ml-28 ">
        <h6 className="text-xs text-slate-400">{date}</h6>
        <span>{name}</span>
        <p className="text-xs pt-3 text-slate-500 mr-5">{desc}</p>
      </div>
      <img
        src="/images/photo2.jpg"
        alt="car"
        className="absolute w-[120px] h-[100px] rounded-xl top-5 -left-6"
      />
    </div>
  );
}

export default ImageCardRight;
