import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-black font-semibold">
        <p>
          About <span>US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[500px] rounded-2xl"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-3 w-1/2 text-black ">
          <p>
            Welcome to Learn Music your trusted platform for connecting talented
            musicians with event organizers, fans, and collaborators. We make it
            simple to discover, book, and connect with professional artists
            across genres and styles.
          </p>
          <p>
            Our mission is to support musicians by giving them a stage to shine
            and helping clients find the perfect performer for every occasion —
            from weddings and corporate events to festivals and private
            sessions.
          </p>

          <h1 className="text-black text-2xl font-semibold "> Our Vision</h1>
          <p>
            At Learn Music, we celebrate creativity, diversity, and the power of
            live music to bring people together.
          </p>
        </div>
      </div>
      <div className="text-xl my-4 font-semibold">
        <p>Why TO CHOOSE US</p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border rounded-2xl px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-2 text-[15px] bg-black text-white">
          <b>Efficieny:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
        </div>
        <div className="border rounded-2xl px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-2 text-[15px] bg-black text-white">
          <b>Convenience:</b>
          <p>Access to a network of legend Musician to help you Grow</p>
        </div>
        <div className="border rounded-2xl px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-2 text-[15px] bg-black text-white">
          <b>Personalization:</b>
          <p>Tailored recemondation and reminders to help stay on to of your Music Life</p>
        </div>
      </div>
    </div>
  );
};

export default About;
