import React, { useState } from "react";
import TableComponent from "./TableComponent";

const TableContainer = () => {
  const [tables, setTables] = useState([]);

  // নতুন টেবিল যোগ করার ফাংশন
  const addTable = () => {
    const newTable = { id: Date.now(), rows: [] };
    setTables([...tables, newTable]);
  };

  return (
    <div className="p-5">
      <button
        onClick={addTable}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        নতুন টেবিল যোগ করুন
      </button>

      <div className="space-y-6">
        {tables.map((table) => (
          <TableComponent key={table.id} table={table} />
        ))}
      </div>
    </div>
  );
};

export default TableContainer;
