"use client";
import { Users, Globe, FolderOpen, Wrench } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-10 h-10 text-white" />,
      label: "Customers",
      value: "100+",
    },
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      label: "Countries",
      value: "12+",
    },
    {
      icon: <FolderOpen className="w-10 h-10 text-white" />,
      label: "Projects",
      value: "300+",
    },
    {
      icon: <Wrench className="w-10 h-10 text-white" />,
      label: "Tools",
      value: "80+",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-16 py-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center w-[140px] sm:w-[180px] md:w-[200px]"
        >
          <div className="mb-2">{stat.icon}</div>
          <p className="text-gray-400 text-sm">Over</p>
          <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
          <p className="text-white font-medium tracking-wide">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
