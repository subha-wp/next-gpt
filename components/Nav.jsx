import Image from "next/image";
import React from "react";

export default function Nav() {
  return (
    <header className="flex justify-between py-6">
      {/* logo */}
      <div className="border rounded-md flex justify-center items-center p-1 border-b-4 border-r-4 border-black">
        <h3 className="font-bold cursor-pointer">Next GPT</h3>
      </div>
      <div className="rounded-full cursor-pointer border-2 border-black flex justify-center items-center w-10 h-10">
        <h3 className="font-bold">N</h3>
        {/* <Image src="" width={35} height={35} /> */}
      </div>
    </header>
  );
}
