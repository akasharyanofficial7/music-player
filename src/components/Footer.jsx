import React from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiRss } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 pb-40 lg:pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Navigation Menu */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">BROWSE</h3>
            <Link
              to="/new-releases"
              className="text-gray-300 hover:text-white block mb-2 sm:text-sm"
            >
              New Releases
            </Link>
            <Link
              to="/featured-playlists"
              className="text-gray-300 hover:text-white block mb-2 sm:text-sm"
            >
              Featured Playlists
            </Link>
            <Link
              to="/weekly-top-songs"
              className="text-gray-300 hover:text-white block mb-2 sm:text-sm"
            >
              Weekly Top Songs
            </Link>
          </div>
          {/* Other Sections */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">DEVOTIONAL SONGS</h3>
            <Link
              to="/krishna-bhajan"
              className="text-gray-300 hover:text-white block mb-2 sm:text-sm"
            >
              Krishna Bhajan
            </Link>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">LANGUAGE</h3>
            <Link
              to="/hindi"
              className="text-gray-300 hover:text-white block mb-2 sm:text-sm"
            >
              Hindi Songs
            </Link>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">ARTIST ORIGINALS</h3>
            <Link
              to="/zaeden-dooriyan"
              className="text-gray-300 hover:text-white block mb-2 sm:text-sm"
            >
              Zaeden - Dooriyan
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <a
          href="https://www.linkedin.com/in/akash-gupta-41a73a184/"
          className="text-gray-400 hover:text-yellow-400"
        >
          <FaLinkedinIn />
        </a>

        <a href="#" className="text-gray-400 hover:text-yellow-400">
          <FaTwitter />
        </a>
        <a
          href="https://github.com/akasharyanofficial7"
          className="text-gray-400 hover:text-yellow-400"
        >
          <FaGithub />
        </a>
        <a href="#" className="text-gray-400 hover:text-yellow-400">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-400 hover:text-yellow-400">
          <FiRss />
        </a>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-500">
          JioSaavn Artist Insights | JioSaavn YourCast
        </p>
      </div>
    </footer>
  );
};

export default Footer;
