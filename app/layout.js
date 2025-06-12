import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MoveToTop from "@/components/MoveToTop";

export const metadata = {
  title: "Divy Gandhi -- Software Engineer",
  description: "Developer based in Vadodara, India. Focused on writing clean code and improving problem-solving skills for scalable applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <Nav />
        <div className="sm:px-7 px-4">{children}</div>
        <Footer />
        <MoveToTop />
      </body>
    </html>
  );
}
