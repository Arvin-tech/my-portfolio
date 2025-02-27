"use client"; 

import { usePathname } from "next/navigation";

export default function MainContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Apply full width only on the home page
  const containerClass = pathname === "/" ? "w-full p-0" : "max-w-4xl p-4 mx-auto";

  return <main className={containerClass}>{children}</main>;
}
