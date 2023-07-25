import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Chin moto",
  description: "Discover the best motorcycles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
