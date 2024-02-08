import Head from "next/head";
import Footer from "./components/footer";
import Matomo from "./components/matomo";
import "./globals.css";

export const metadata = {
  title: "Arboristika Svárovský",
  description:
    "Komplexní arboristické služby v korunách stromů. Kácíme bezpečně, v korurunách stromů provádíme všechny typy řezů a je na nás spolehnutí.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth	">
      <body className="container mx-auto bg-white">
        {children}
        <Footer />
        <Matomo />
      </body>
    </html>
  );
}
