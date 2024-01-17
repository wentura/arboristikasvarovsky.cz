import Image from "next/image";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Service from "./components/service";
import Team from "./components/team";

export default function Home() {
  return (
    <div>
      <Hero />

      <Service />
      <Team />
      <Contact />
    </div>
  );
}
