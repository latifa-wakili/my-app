import Image from "next/image";
import React from "react";

export default function SecondPage() {
  return (
    <div className="bg-yellow-200 w-screen h-screen py-30 px-10">
      <div className=" bg-white flex shadow-md py-32 items-center justify-center rounded-2xl">
        <div>
          <Image
          height="100"
          width="100"
          src="/image/newsletter.png"
          className="mr-20"
          />
        </div>
        <div className="text-black">
          <h1 className="font-bold mb-8">
            Sign up to our
            <h1 className="text-3xl ">Newsletter</h1>
          </h1>
          <p className="mb-8">Subscribe to our newsletter and stay updated.</p>
<div className="grid">
<input type="email" placeholder="Your email" className="text-gray-500 border border-gray-400 rounded-sm mb-8" />
<button className="px-12 font-bold bg-yellow-500 rounded-md text-sm py-1">Sign Up</button>
</div>
        </div>
      </div>
    </div>
  );
}
