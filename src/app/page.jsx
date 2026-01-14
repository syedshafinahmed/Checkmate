import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Players from "./components/Players";

export default function Home() {
  return (
    <div className="bg-base-100">
      <Navbar />
      <Banner />
      <About />
      <Players />
    </div>
  );
}
