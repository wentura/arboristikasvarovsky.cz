export default function Hero() {
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
          {/* logo - start */}
          <a
            href="/"
            className="inline-flex items-center text-xl font-bold text-black"
            aria-label="logo"
          >
            ARBORISTIKA
            <br />
            SVÁROVSKÝ
          </a>
          {/* logo - end */}

          {/* nav - start */}
          <nav className="gap-4 lg:gap-12 flex">
            <a
              href="#sluzby"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Služby
            </a>
            <a
              href="#tym"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Tým
            </a>
            <a
              href="#kontakt"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Kontakt
            </a>
          </nav>
          {/* nav - end */}
        </header>

        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          {/* content - start */}
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <p className="font-semibold md:text-lg xl:text-xl">profesionální</p>

            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
              ARBORISTIKA SVÁROVSKÝ
            </h1>

            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              <strong>Komplexní arboristické služby v korunách stromů</strong>,
              <br />
              máme rádi i undergroud - používáme technologii{" "}
              <strong>air-spade</strong>.`
            </p>

            <div className="flex flex-col gap-8 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#sluzby"
                className="inline-block rounded-lg bg-zelena px-16 py-3 text-center text-sm shadow-neutral-400 shadow-lg font-semibold text-white outline-none transition duration-100 hover:shadow-sm hover:shadow-neutral-300 md:text-base"
              >
                Služby
              </a>

              <a
                href="#kontakt"
                className="inline-block rounded-lg bg-cervena px-16 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 shadow-neutral-400 shadow-lg hover:shadow-sm hover:shadow-neutral-300 md:text-base"
              >
                Kontakt
              </a>
            </div>
          </div>
          {/* content - end */}

          {/* image - start */}
          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
            <img
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1705567243/arboristikasvarovsky/1_kfjsp6.webp"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* image - end */}
        </section>
      </div>
    </div>
  );
}
