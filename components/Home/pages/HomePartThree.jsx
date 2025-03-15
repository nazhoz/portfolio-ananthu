import React from "react";

const HomePartThree = () => {
  return (
    <div className="mt-6 px-4 flex">
      <div className="flex flex-col items-center justify-start w-[60%] gap-10 ">
        <span className="text-3xl">Subscribe to our newsletter</span>
        <input
          type="text"
          placeholder="Your e-mail"
          className="border-b w-[45%]"
        />
        <button className="bg-black text-white px-2 py-2">Subscribe</button>
      </div>
      <div className="w-[40%]">
        <span>Connect with us</span>
      </div>
    </div>
  );
};

export default HomePartThree;
