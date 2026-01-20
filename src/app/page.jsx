import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Players from "./components/Players";
import Pricing from "./components/Pricing";
import PlayersHome from "./components/PlayersHome";
import Openings from "./components/Openings";
import CoursesHome from "./components/CoursesHome"

export default function Home() {
  return (
    <div className="bg-base-100">
      <Navbar />
      <Banner />
      <About />
      <Players />
      <PlayersHome />
      <Openings />
      <CoursesHome />
      <Pricing />
    </div>
  );
}
