import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="overflow-y-hidden dark:bg-black dark:text-white lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_5fr]">
      <Sidebar />
      <section className="min-h-screen">
        <Header />
        <div className="p-6 max-h-[90vh] overflow-y-auto">{children}</div>
      </section>
    </main>
  );
}
