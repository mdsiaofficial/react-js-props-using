import React from "react";

export default function Box(Props) {
  return (
    <section className="flex justify-center mt-[5rem]">
      <div className="w-[340px] h-auto bg-green-200 rounded-xl">
        <h1 className="text-center text-2xl font-extrabold bg-green-300">Props Learning</h1>

        <img src={Props.src} alt={Props.Name} className="p-2 rounded-xl" />
        <p className="text-center text-slate-900 font-bold">Name: {Props.Name}</p>
        <p className="text-center text-slate-900 font-bold">Age: {Props.age}</p>
        <p className="text-center text-slate-900 font-bold">Address: {Props.address}</p>
      </div>
    </section>
  );
}
