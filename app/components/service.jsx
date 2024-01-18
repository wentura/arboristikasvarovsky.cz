import React from "react";

export default function Service() {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-24" id="sluzby">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-md font-bold text-gray-500 md:mb-6 lg:text-2xl">
            Služby
          </h2>

          <p className="mx-auto text-2xl sm:text-3xl max-w-screen-xl text-center font-bold text-gray-700 md:text-4xl">
            <span className="">Komplexní</span>{" "}
            <span className="text-tmavazelena font-extrabold">
              profesionální arboristické služby
            </span>{" "}
            v korunách stromů
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          {/* feature - start */}
          <div className="flex flex-col items-center">
            <h3 className="mb-2 text-center text-lg md:text-2xl text-tmavacervena font-extrabold">
              Kácíme bezpečně
            </h3>
            <p className="mb-2 text-center text-gray-500">
              Rizikové kácení <span className="underline">neprovádíme</span>
              <br />
              Kácíme{" "}
              <span className="font-bold">bezpečně i havarijní stromy</span>
            </p>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col items-center">
            <h3 className="mb-2 text-center text-lg md:text-2xl text-tmavacervena font-extrabold">
              Řezy
            </h3>
            <p className="mb-2 text-center text-gray-500 ">
              V korurunách stromů provádíme{" "}
              <span className="font-bold">všechny typy řezů</span>
            </p>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col items-center">
            <h3 className="mb-2 text-center text-lg md:text-2xl text-tmavacervena font-extrabold">
              Jistota
            </h3>
            <p className="mb-2 text-center text-gray-500">
              <span className="font-bold">Pojištění</span> podnikatelských rizik
              na 10 mil.Kč
            </p>
          </div>
          {/* feature - end */}
        </div>
      </div>
    </div>
  );
}
