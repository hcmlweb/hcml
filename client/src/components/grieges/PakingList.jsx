import React from "react";

import PakingListHead from "./pakingcomponents/pakingListHead";
import PakingListMain from "./pakingcomponents/pakingListMain";

function PakingList() {
  return (
    <div className="w-full p-8">
      <PakingListHead />
      <PakingListMain />
    </div>
  );
}

export default PakingList;
