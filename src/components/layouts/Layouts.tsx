"use client";
import { useWindowSize } from "@/hooks/useSize";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useWindowSize(1024);
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full max-w-none flex-grow pt-10 p-6 md:p-10"></div>
      <div className="mt-12 b-0">
        <Footer />
      </div>
    </main>
  );
}
