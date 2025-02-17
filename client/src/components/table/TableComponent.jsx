import React, { useState } from "react";

const TableComponent = ({ table }) => {
  const [rows, setRows] = useState([]);

  // নতুন রো যোগ করার ফাংশন
  const addRow = () => {
    const newRow = {
      id: Date.now(),
      serial: rows.length + 1,
      greyGauge: 0,
      finishingGauge: 0,
    };
    setRows([...rows, newRow]);
  };

  // ইনপুট পরিবর্তনের হ্যান্ডলার
  const handleInputChange = (id, field, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: Number(value) } : row
    );
    setRows(updatedRows);
  };

  // মোট গ্রে গজ গণনা
  const totalGreyGauge = rows.reduce((sum, row) => sum + row.greyGauge, 0);

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-3">টেবিল {table.id}</h3>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ক্রমিক নং</th>
            <th className="border p-2">গ্রে গজ</th>
            <th className="border p-2">ফিনিশিং গজ</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="border p-2 text-center">{row.serial}</td>
              <td className="border p-2">
                <input
                  type="number"
                  value={row.greyGauge}
                  onChange={(e) =>
                    handleInputChange(row.id, "greyGauge", e.target.value)
                  }
                  className="w-full p-1 border"
                />
              </td>
              <td className="border p-2">
                <input
                  type="number"
                  value={row.finishingGauge}
                  onChange={(e) =>
                    handleInputChange(row.id, "finishingGauge", e.target.value)
                  }
                  className="w-full p-1 border"
                />
              </td>
            </tr>
          ))}

          {/* ফিক্সড লাস্ট রো */}
          <tr className="bg-gray-100 font-semibold">
            <td className="border p-2 text-center">মোট</td>
            <td className="border p-2 text-center">{totalGreyGauge}</td>
            <td className="border p-2 text-center">-</td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={addRow}
        className="mt-3 px-3 py-1 bg-green-500 text-white rounded"
      >
        নতুন রো যোগ করুন
      </button>
    </div>
  );
};

export default TableComponent;
