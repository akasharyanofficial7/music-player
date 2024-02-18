import React from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

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
            {/* Add more devotional song links here */}
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">LANGUAGE</h3>
            <Link
              to="/hindi-songs"
              className="text-gray-300 hover:text-white block mb-2 sm:text-sm"
            >
              Hindi Songs
            </Link>
            {/* Add more language links here */}
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">ARTIST ORIGINALS</h3>
            <Link
              to="/zaeden-dooriyan"
              className="text-gray-300 hover:text-white block mb-2 sm:text-sm"
            >
              Zaeden - Dooriyan
            </Link>
            {/* Add more artist originals links here */}
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-8 space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <FaYoutube />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaLinkedin />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaEnvelope />
        </a>
      </div>

      {/* Company Info */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-500">
          JioSaavn Artist Insights | JioSaavn YourCast
        </p>
      </div>
    </footer>
  );
};

export default Footer;
