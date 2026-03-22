import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Divy Gandhi — Software Engineer | Finance Aspirant",
  description:
    "Computer Engineer based in Vadodara, specializing in scalable applications and equity research.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>

      <body className="bg-black text-white antialiased font-['Inter',sans-serif]">

        <CustomCursor />

        <LayoutWrapper>
          {children}
        </LayoutWrapper>

      </body>

    </html>
  );
}