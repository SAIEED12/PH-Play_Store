import React from "react";

const Stats = () => {
  const statsData = [
    {
      label: "Total Downloads",
      value: "29.6M",
      footer: "21% More Than Last Month",
    },
    {
      label: "Total Reviews",
      value: "906K",
      footer: "46% More Than Last Month",
    },
    {
      label: "Active Apps",
      value: "132+",
      footer: "31 More Will Launch",
    },
  ];

  return (
    <section className="bg-linear-to-r from-[#7b3fe4] to-[#8c52ff] py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Trusted By Millions, Built For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="text-sm md:text-base font-medium opacity-80 uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="text-5xl md:text-7xl font-extrabold tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm font-normal opacity-70 mt-2">
                {stat.footer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;