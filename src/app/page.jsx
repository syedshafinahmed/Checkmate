import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Players from "./components/Players";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-base-100">
      <Navbar />
      <Banner />
      <About />
      <Players />
      <Footer />
    </div>
  );
}
