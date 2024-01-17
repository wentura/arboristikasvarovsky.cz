import React from "react";

export default function Contact() {
  return (
    <section
      className="text-gray-600 body-font relative my-8 md:my-12 lg:my-24"
      id="kontakt"
    >
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
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
