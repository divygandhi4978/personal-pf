import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MoveToTop from "@/components/MoveToTop";

export const metadata = {
  title: "Divy Gandhi — Software Engineer | Finance Aspirant",
  description:
    "Computer Engineer based in Vadodara, specializing in scalable applications and equity research. Bridging the gap between software engineering and financial analysis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-black text-white antialiased font-['Inter',sans-serif]">
        <Nav />
        {/* REMOVED overflow-x-hidden and relative here */}
        <main className="w-full">
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#562e66]/10 blur-[140px] rounded-full pointer-events-none -z-10 opacity-50"></div>
          {children}
        </main>
        <Footer />
        <MoveToTop />
      </body>
    </html>
  );
}
