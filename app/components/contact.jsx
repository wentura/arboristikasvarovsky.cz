import React from "react";

export default function Contact() {
  return (
    <section
      className="text-gray-600 body-font relative my-8 md:my-12 lg:my-24"
      id="kontakt"
    >
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="hidden lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 md:flex items-end justify-start relative">
          <iframe
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
          ></iframe>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-xl md:text-2xl lg:text-3xl mb-1 font-medium title-font text-center">
            ARBORISTIKA SVÁROVSKÝ
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 text-center">
            Profesionální arboristika s certifikací ETW.
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
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg my-4 text-center"
          >
            777 34 34 96
          </a>
          <a
            href="mailto:arboristikasvarovsky@gmail.com"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg my-4 text-center"
          >
            arboristikasvarovsky@gmail.com
          </a>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
}
