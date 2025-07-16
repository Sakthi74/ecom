import React, { useState } from "react";

const Filter = ({ onChange }) => {
  const [selected, setSelected] = useState(1);

  const buttons = [
    { id: 1, label: "Latest" },
    { id: 2, label: "Special" },
    { id: 3, label: "Beauty Product" },
  ];

  return (
    <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center font-semibold text-white">
      {buttons.map(({ id, label }) => (
        <div
          key={id}
          onClick={() => {
            setSelected(id);
            onChange(id);
          }}
          className={`p-3 rounded-3xl w-52 border-2 text-center cursor-pointer transition-transform hover:scale-110 ${
            selected === id ? "bg-blue-400" : "bg-slate-800"
          }`}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default Filter;
