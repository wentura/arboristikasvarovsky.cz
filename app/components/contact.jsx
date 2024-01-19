import React from "react";
import Insta from "./insta";
export default function Contact() {
  return (
    <section
      className="text-gray-600 body-font relative my-8 md:my-12 lg:my-24"
      id="kontakt"
    >
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="hidden lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 md:flex items-end justify-start relative">
          {/* <Insta /> */}
          {/* <img
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705567243/arboristikasvarovsky/3_l37uni.webp"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="h-full w-full object-cover object-center rounded-lg shadow-xl shadow-neutral-500"
          /> */}
          {/* <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.8081092459893!2d14.601984513909615!3d50.537740271490655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47095d9688f5844b%3A0xd3c9c563ebbb1888!2sKorce%2018%2C%20472%2001%20Dub%C3%A1-Doksy!5e0!3m2!1scs!2scz!4v1705529429367!5m2!1scs!2scz"
            style={{ filter: "grayscale(0.8) contrast(1) opacity(0.5)" }}
          ></iframe> */}
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className=" text-xl md:text-2xl lg:text-3xl mb-1 font-extrabold title-font text-center text-tmavazelena ">
            <span className="drop-shadow-lg">ARBORISTIKA SVÁROVSKÝ</span>
          </h2>
          <p className="leading-relaxed mb-5 text-gray-800 text-center font-bold">
            Profesionální arboristika s certifikací ETW
          </p>
          <div className="relative mb-4 lg:ml-16">
            Jan Svárovský
            <br />
            Korce 18
            <br />
            472 01 Dubá
            <br />
            IČ: 66994161
          </div>
          <div className="relative mb-4"></div>
          <div className="relative mb-4"></div>
          <a
            href="tel:+420777343496"
            className="inline-block rounded-lg bg-tmavazelena px-16 py-3 text-center text-sm shadow-neutral-400 shadow-lg font-semibold text-white outline-none transition duration-100 hover:shadow-sm hover:shadow-neutral-300 md:text-base my-4"
          >
            777 34 34 96
          </a>
          <a
            href="mailto:arboristikasvarovsky@gmail.com"
            className="inline-block rounded-lg bg-tmavacervena px-16 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 shadow-neutral-400 shadow-lg hover:shadow-sm hover:shadow-neutral-300 md:text-base my-4"
          >
            arboristikasvarovsky@gmail.com
          </a>
          <p className="text-xs text-gray-500 mt-3"></p>
        </div>
      </div>
    </section>
  );
}
