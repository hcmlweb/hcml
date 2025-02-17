import React from "react";
import logo from "../../../assets/logo.png";

function PakingListHead() {
  return (
    <div>
      <div className="w-full flex flex-row item-center justify-between">
        <img className="w-20 h-20" src={logo} alt="" />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl py-1">হারুন কম্পোজিট মিলস লিমিটেড</h2>
          <h2 className="text-center border-[1px] border-gray-700 px-4 py-1 rounded-md">
            ডাইং, প্রিন্টিং,ফিনিশিং, কেলেন্ডারিং
          </h2>
          <h2 className="text-sm">গোলাকান্দাইল,ভূলতা, রূপগঞ্জ, নারায়ণগঞ্জ</h2>
          <h2 className="text-xs">
            harun.composite@gmail.com, hcml.factory@gmail.com
          </h2>
          <h2 className="text-lg font-bold border-[2px] border-gray-800 py-2 px-4 mt-4 bg-gray-200 rounded-md">
            প্যাকিং লিষ্ট
          </h2>
        </div>
        <div>
          <h2>01722440899</h2>
        </div>
      </div>
    </div>
  );
}

export default PakingListHead;
