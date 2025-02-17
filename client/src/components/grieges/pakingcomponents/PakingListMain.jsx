import React from "react";

function PakingListMain() {
  return (
    <div>
      <div className="w-full">
        <div className="w-full flex flex-row item-center justify-between">
          <div className="flex flex-row space-x-2 font-bold">
            <span>Paking No</span>
            <input
              type="number"
              className="focus:outline-none border-[1px] px-2 border-gray-800"
            />
          </div>
          <div className="flex flex-row space-x-2 font-bold">
            <span>Date</span>
            <h2>25 Jan 24</h2>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col py-4">
        <div className="flex flex-row items-start justify-start space-x-2">
          <span>পার্টির নামঃ</span>
          <h2>আমিন ব্রাদাস</h2>
        </div>
        <div className="flex flex-row items-start justify-start space-x-2">
          <span>ঠিকানাঃ</span>
          <h2>ইসলাম পুর</h2>
        </div>
      </div>
      {/* //form section start */}
      <table>
        <thead>
          <th>
            <tr className="border-[1px] border-gray-800">
              <td className="border-[1px] border-gray-800">ক্রঃ নং</td>
              <td className="border-[1px] border-gray-800">গ্রেঃ গজ</td>
              <td className="border-[1px] border-gray-800">ফিনিশিং গজ</td>
            </tr>
          </th>
        </thead>
        <tbody>
          <tr className="border-[1px] border-gray-800">
            <td className="border-[1px] border-gray-800">120</td>
            <td className="border-[1px] border-gray-800">320</td>
            <td className="border-[1px] border-gray-800">140</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PakingListMain;
