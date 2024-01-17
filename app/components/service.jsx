import React from "react";

export default function Service() {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-24" id="sluzby">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Služby
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Komplexní a profesionáklní arboristické služby v korunách stromů.
          </p>
        </div>
        {/* text - end */}

        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          {/* feature - start */}
          <div className="flex flex-col items-center">
            <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
              Řezy
            </h3>
            <p className="mb-2 text-center text-gray-500">
              V korurunách stromů provádíme všechny typy řezů
            </p>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col items-center">
            <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
              Kácíme bezpečně
            </h3>
            <p className="mb-2 text-center text-gray-500">
              Rizikové kácení neprovádíme
              <br />
              Kácíme bezpečně i havarijní stromy
            </p>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col items-center">
            <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
              Jistota
            </h3>
            <p className="mb-2 text-center text-gray-500">
              Pojištění podnikatelských rizik na 10 mil.Kč
            </p>
          </div>
          {/* feature - end */}
        </div>
      </div>
    </div>
  );
}
