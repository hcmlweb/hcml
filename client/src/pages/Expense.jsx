import React from "react";

function Expense() {
  return (
    <div className="w-full flex flex-col items-center justify-between px-1 py-4 md:p-4">
      <div className="uppercase">
        <h2 className="border-[1px] border-blue-500 py-2 px-4 rounded-md text-sm font-semibold shadow-md">
          Expense
        </h2>
      </div>
      <div className="w-full">
        <div className="w-full p-4 shadow-md mt-4">
          <ul></ul>
        </div>
      </div>
    </div>
  );
}

export default Expense;
