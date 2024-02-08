import React from "react";

export default function Logo() {
  return (
    <div className="p-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl"></h2>

        <div className="flex flex-wrap md:justify-evenly justify-center gap-8 md:gap-18">
          <img
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707407058/arboristikasvarovsky/szkt_logo_2021_cuwen7.png"
            className="max-w-80 md:max-w-96 object-contain"
          />

          <img
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707407058/arboristikasvarovsky/logo_SPOD_ISA_grn_jndyev.png"
            className="max-w-80 md:max-w-96 object-contain"
          />

          <img
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707407057/arboristikasvarovsky/ISA_logo_web_imzywm.jpg"
            className="max-w-40 object-contain"
          />

          <img
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707407057/arboristikasvarovsky/1261_certifikace-etw-a-etw-platform_viztx5.jpg"
            className="max-w-36 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
