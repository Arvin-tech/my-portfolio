"use client"; 

import { usePathname } from "next/navigation";

export default function MainContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // const containerClass = pathname === "/projects" ? "max-w-7xl mx-auto p-4" : "w-full";
  const containerClass = pathname === "/" ? "w-full p-0" : "max-w-6xl p-4 mx-auto";
  return <main className={containerClass}>{children}</main>;
}
