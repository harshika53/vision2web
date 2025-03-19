import React from "react";
import Link from "next/link";
import { FaXTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa6"; // Updated Twitter icon to X
import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a0e324f] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Name */}
        <div className="flex items-center space-x-3">
          <img src="/logo_h.png" alt="Vision to Web" className="w-14 h-10" />
          <h2 className="text-xl font-semibold">Vision to Web</h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 mt-4 md:mt-0 text-lg">
          {/* <Link href="/" className="text-gray-400 hover:text-violet-500 transition-all">Get Started</Link> */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={0} // Ensures it goes exactly to the top
            className="text-gray-400 hover:text-violet-500 transition-all cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            offset={-50} // Adjust for fixed headers
            className="text-gray-400 hover:text-violet-500 transition-all cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="features2"
            smooth={true}
            duration={500}
            offset={-50} // Adjust for fixed headers
            className="text-gray-400 hover:text-violet-500 transition-all cursor-pointer"
          >
            Contact
          </ScrollLink>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-5 mt-4 md:mt-0">
          <a
            href="https://github.com/atharva-aak/vision2web"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 transition-all duration-300 hover:bg-transparent"
          >
            <FaGithub
              size={20}
              className="text-gray-400 hover:text-white transition-all"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/atharva-kalbande38/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 transition-all duration-300 hover:bg-transparent"
          >
            <FaLinkedinIn
              size={20}
              className="text-gray-400 hover:text-[#0077B5] transition-all"
            />
          </a>
          <a
            href="https://x.com/_atharva_ak_"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 transition-all duration-300 hover:bg-transparent"
          >
            <FaXTwitter
              size={20}
              className="text-gray-400 hover:text-white transition-all"
            />
          </a>
          <a
            href="https://www.instagram.com/_atharva.kalbande_/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 transition-all duration-300 hover:bg-transparent"
          >
            <FaInstagram
              size={20}
              className="text-gray-400 hover:text-[#E4405F] transition-all"
            />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Copyright & Team Members */}
      <div className="text-center text-gray-400 text-lg mt-6 select-none">
        <p>© {new Date().getFullYear()} Vision to Web. All Rights Reserved.</p>

        <p className="mt-4 text-lg font-medium text-white">Developed by:</p>

        {/* Team Members with Space */}
        <div className="mt-2 flex flex-wrap justify-center space-x-6 text-lg text-gray-200 font-semibold">
          <span>Atharva Kalbande</span>
          <span>•</span>
          <span>Harshika Rathod</span>
          <span>•</span>
          <span>Arnav Varhade</span>
          <span>•</span>
          <span>Shruti Thakur</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
