import React from "react";

export default function Team() {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-24" id="tym">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-md font-bold text-gray-500 md:mb-6 lg:text-2xl">
            Tým{" "}
          </h2>

          <p className="mx-auto text-2xl sm:text-3xl max-w-screen-xl text-center font-bold text-gray-700 md:text-4xl"></p>
        </div>

        {/* <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12 "> */}
        <div className="flex flex-wrap flex-col sm:flex-row gap-x-16 gap-y-12 justify-center">
          {/* person - start */}
          <div className="flex flex-col items-center">
            <div className="mb-2 h-32 w-32 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-44 md:w-44">
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1708621807/arboristikasvarovsky/fido.jpeg_vgbtgo.jpeg_wpuofv.webp"
                loading="lazy"
                alt="Jan Svárovský, profilová fotografie"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-center font-bold text-neutral-800 md:text-lg">
                Jan Svárovský
                <br />
                <span className="text-xs font-medium">
                  certifikovaný arborista ETW
                </span>
              </div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"></p>
            </div>
          </div>
          {/* person - end */}
          {/* person - start */}
          <div className="flex flex-col items-center">
            <div className="mb-2 h-32 w-32 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-44 md:w-44">
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1708621808/arboristikasvarovsky/robert1_itzhte_fdlnzf.webp"
                loading="lazy"
                alt="Robert Farský, profilová fotografie"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-center font-bold text-neutral-800 md:text-lg">
                Robert Farský
                <br />
                <span className="text-xs font-medium">
                  certifikovaný arborista ETW
                </span>
              </div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"></p>
            </div>
          </div>
          {/* person - end */} {/* person - start */}
          <div className="flex flex-col items-center">
            <div className="mb-2 h-32 w-32 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-44 md:w-44">
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1708621807/arboristikasvarovsky/david2.jpeg_b4vaua.jpeg_lcqsgx.webp"
                loading="lazy"
                alt="David Prokůpek, profilová fotografie"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-center font-bold text-neutral-800 md:text-lg">
                David Prokůpek
                <br />
                <span className="text-xs font-medium">
                  certifikovaný arborista ETW
                </span>
              </div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"></p>
            </div>
          </div>
          {/* person - end */} {/* person - start */}
          <div className="flex flex-col items-center">
            <div className="mb-2 h-32 w-32 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-44 md:w-44">
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1708621808/arboristikasvarovsky/patrik3.jpg.jpeg_n3hgkx.jpeg_lswxde.webp"
                loading="lazy"
                alt="Patrik Nestarec, profilová fotografie"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-center font-bold text-neutral-800 md:text-lg">
                Patrik Nestarec
                <br />
                <span className="text-xs font-medium">
                  certifikovaný arborista ETW
                </span>
              </div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"></p>
            </div>
          </div>
          {/* person - end */} {/* person - start */}
          <div className="flex flex-col items-center">
            <div className="mb-2 h-32 w-32 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-44 md:w-44">
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1708621807/arboristikasvarovsky/ferenc.jpg.jpeg_vrnjfx.jpeg_ohpapc.webp"
                loading="lazy"
                alt="Ferenc Leyluh, profilová fotografie"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-center font-bold text-neutral-800 md:text-lg">
                Ferenc Leyluh
              </div>
              <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"></p>
            </div>
          </div>
          {/* person - end */}
        </div>
      </div>
    </div>
  );
}
