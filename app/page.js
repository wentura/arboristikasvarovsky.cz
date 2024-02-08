import Image from "next/image";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Logo from "./components/logo";
import Service from "./components/service";
import Team from "./components/team";
export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Team />
      <Logo />
      <Contact />
    </main>
  );
}
