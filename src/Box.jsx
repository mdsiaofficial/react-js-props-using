import React from "react";

export default function Box({ Info }) {
  const { sorc, Name, age, address } = Info;
  return (
    <section className="flex justify-center mt-[5rem]">
      <div className="w-[340px] h-auto bg-green-200 rounded-lg">
        <h1 className="text-center text-2xl font-extrabold bg-green-300">Props Learning</h1>

        <img src={sorc} alt={Name} className="h-auto w-auto" />
        <p className="text-center text-slate-900 font-bold">Name: {Name}</p>
        <p className="text-center text-slate-900 font-bold">Age: {age}</p>
        <p className="text-center text-slate-900 font-bold">Address: {address}</p>
      </div>
    </section>
  );
}
