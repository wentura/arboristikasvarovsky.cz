import React from "react";

export default function Service() {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-24" id="sluzby">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          {/* <h2 className="mb-4 text-center text-md font-bold text-gray-500 md:mb-6 lg:text-2xl">
            Služby
          </h2> */}

          <p className="mx-auto text-3xl sm:text-5xl max-w-screen-xl text-center font-bold text-gray-700 md:text-6xl lg:text-7xl">
            <span className="text-tmavazelena font-extrabold">
              Profesionální arboristika
            </span>
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-12">
          {/* feature - start */}
          <div className="flex flex-col items-center">
            <h3 className="mb-2 text-center text-xl md:text-3xl text-tmavacervena font-extrabold">
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
            <h3 className="mb-2 text-center text-xl md:text-3xl text-tmavacervena font-extrabold">
              Řezy
            </h3>
            <p className="mb-2 text-center text-gray-500 ">
              V korurunách stromů provádíme
              <br />
              <span className="font-bold">
                všechny typy řezů dle standardu řezu AOPK
              </span>
            </p>
          </div>
          {/* feature - end */}
          {/* feature - start */}
          <div className="flex flex-col items-center">
            <h3 className="mb-2 text-center text-xl md:text-3xl text-tmavacervena font-extrabold">
              Tým profesionálů{" "}
            </h3>
            <p className="mb-2 text-center text-gray-500">
              Tým tvoří certifikovaní arboristé ETW
            </p>
          </div>
          {/* feature - end */}
          {/* feature - start */}
          <div className="flex flex-col items-center">
            <h3 className="mb-2 text-center text-xl md:text-3xl text-tmavacervena font-extrabold">
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
