"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MoveToTop from "@/components/MoveToTop";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // ✅ robust check (handles /cams, /cams/, /cams/anything)
  const isMinimal = pathname.startsWith("/cams") || pathname.startsWith("/cases");

  if (isMinimal) {
    // 🚫 completely bypass layout
    return <main className="w-full">{children}</main>;
  }

  return (
    <>
      <Nav />

      <main className="w-full">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#562e66]/10 blur-[140px] rounded-full pointer-events-none -z-10 opacity-50"></div>
        {children}
      </main>

      <Footer />
      <MoveToTop />
    </>
  );
}