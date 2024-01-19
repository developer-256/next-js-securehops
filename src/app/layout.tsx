import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Securehops",
  description: "Best Cyber-Security Company",
  icons: {
    icon: ["/mobileLogo.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-Outfit fixWidth`}>
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
