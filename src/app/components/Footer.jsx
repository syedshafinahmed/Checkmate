import Link from "next/link";
import Logo from "../Logo/Logo";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaGlobe, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t-2 border-orange-300">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-14 grid gap-20 md:grid-cols-4">

        <div>
          <Logo />
          <p className="mt-4 text-sm text-justify text-gray-400 max-w-xs">
            Elevate your chess journey. Learn from legends, master openings,
            and sharpen your skills with structured courses.
          </p>

          <div className="flex gap-4 mt-5">
            <a
              href="https://www.facebook.com/share/172vjragcm/"
              aria-label="Facebook"
              className="p-2 rounded-full border border-orange-300/20 text-orange-300 hover:bg-orange-300 hover:text-base-100 transition"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="https://github.com/syedshafinahmed"
              aria-label="GitHub"
              className="p-2 rounded-full border border-orange-300/20 text-orange-300 hover:bg-orange-300 hover:text-base-100 transition"
            >
              <FaGithub size={14} />
            </a>

            <a
              href="https://www.linkedin.com/in/syed-shafin-ahmed/"
              aria-label="LinkedIn"
              className="p-2 rounded-full border border-orange-300/20 text-orange-300 hover:bg-orange-300 hover:text-base-100 transition"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="https://syedshafinahmed.pages.dev/"
              aria-label="Twitter"
              className="p-2 rounded-full border border-orange-300/20 text-orange-300 hover:bg-orange-300 hover:text-base-100 transition"
            >
              <FaGlobe size={14} />
            </a>
          </div>
        </div>


        <div>
          <h4 className="text-sm font-bold text-orange-300 uppercase tracking-wider mb-4">
            Contact
          </h4>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-orange-300 mt-1" size={14} />
              <a href="tel:+8801630216932" className="hover:text-orange-300">
                +880 16 3021 6932
              </a>
            </li>

            <li className="flex items-start gap-3">
              <FaEnvelope className="text-orange-300 mt-1" size={14} />
              <a
                href="mailto:shafinahmed.cse@gmail.com"
                className="hover:text-orange-300 break-all"
              >
                shafinahmed.cse@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-300 mt-1" size={14} />
              <span>
                Dhaka, Bangladesh
              </span>
            </li>
          </ul>
        </div>


        <div>
          <h4 className="text-sm font-bold text-orange-300 uppercase tracking-wider mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/players" className="hover:text-orange-300">Players</Link></li>
            <li><Link href="/openings" className="hover:text-orange-300">Openings</Link></li>
            <li><Link href="/courses" className="hover:text-orange-300">Courses</Link></li>
          </ul>
        </div>


        <div>
          <h4 className="text-sm font-bold text-orange-300 uppercase tracking-wider mb-4">
            Newsletter
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            Get weekly chess insights, openings, and tips—straight to your inbox.
          </p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm rounded-md bg-base-200 border border-orange-300/20 focus:outline-none focus:border-orange-300"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm font-semibold rounded-md bg-orange-300 text-base-100 hover:bg-orange-400 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="h-px w-full bg-linear-to-r from-transparent via-orange-300 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-orange-300">Checkmate</span>. All rights reserved.
        </p>
        <span className="mt-2 md:mt-0 italic">
          Crafted for chess enthusiasts
        </span>
      </div>
    </footer >
  );
};

export default Footer;
