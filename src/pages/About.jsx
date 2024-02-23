import React from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 pt-24 text-sm lg:text-lg">
        {/* First section */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:mr-4 mb-4 mt-8">
              <img
                src="https://plus.unsplash.com/premium_photo-1682096504254-4b6400241e91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG11c2ljJTIwbGlzdGVufGVufDB8fDB8fHww"
                alt="Music App"
                className="w-[300px]    h-full  lg:w-[500px]  lg:h-[400px]rounded-lg shadow-md"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="  mb-4">
                Our app offers a vast library of songs from various genres,
                artists, and albums, ensuring that you'll always find something
                to suit your musical taste.
              </p>
              <p className="  mb-4">
                Whether you're looking for the latest hits, classic favorites,
                or discovering new tracks, our app has you covered. You can
                create playlists, explore curated collections, and enjoy
                personalized recommendations tailored just for you.
              </p>
              <p className="  mb-4">
                We're committed to providing a seamless and enjoyable music
                streaming experience, with features like high-quality audio
                streaming, offline listening, and easy navigation.
              </p>
              <p className="  mb-4">
                Thank you for choosing our music app. We hope you enjoy the
                music and have a fantastic listening experience!
              </p>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />

        {/* Second section */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 order-2 lg:ml-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fHww"
                alt="Music App"
                className="w-[300px]    h-full  lg:w-[500px]  lg:h-[400px]rounded-lg shadow-md"
              />
            </div>
            <div className="lg:w-1/2 order-1">
              <p className="  mb-4">
                Whether you're looking for the latest hits, classic favorites,
                or discovering new tracks, our app has you covered. You can
                create playlists, explore curated collections, and enjoy
                personalized recommendations tailored just for you.
              </p>
              <p className="  mb-4">
                We're committed to providing a seamless and enjoyable music
                streaming experience, with features like high-quality audio
                streaming, offline listening, and easy navigation.
              </p>
              <p className="  mb-4">
                Thank you for choosing our music app. We hope you enjoy the
                music and have a fantastic listening experience!
              </p>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />

        {/* Fourth section */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:mr-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxtdXNpYyUyMGxpc3RlbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Music App"
                className="w-[300px]    h-full  lg:w-[500px]  lg:h-[400px]rounded-lg shadow-md"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="  mb-4">
                Whether you're looking for the latest hits, classic favorites,
                or discovering new tracks, our app has you covered. You can
                create playlists, explore curated collections, and enjoy
                personalized recommendations tailored just for you.
              </p>
              <p className="  mb-4">
                We're committed to providing a seamless and enjoyable music
                streaming experience, with features like high-quality audio
                streaming, offline listening, and easy navigation.
              </p>
              <p className="  mb-4">
                Thank you for choosing our music app. We hope you enjoy the
                music and have a fantastic listening experience!
              </p>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />
      </div>
    </>
  );
};

export default AboutPage;
