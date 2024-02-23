import Insta from "./insta";
import Tree from "./tree";
export default function Hero() {
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="mb-2 flex items-center lg:justify-between justify-end py-4 md:mb-12 md:py-8 xl:mb-16">
          <a
            href="/"
            className="hidden items-center text-sm md:text-xl font-bold text-black lg:inline-flex"
            aria-label="logo"
          >
            ARBORISTIKA
            <br />
            SVÁROVSKÝ
          </a>
          <nav className="gap-4 lg:gap-12 flex">
            <a
              href="#sluzby"
              className="block text-sm md:text-lg md:font-semibold text-gray-600 transition duration-200 hover:text-tmavazelena hover:underline-offset-4 hover:underline active:tmavazelena"
            >
              Služby
            </a>
            <a
              href="#tym"
              className="text-sm md:text-lg md:font-semibold text-gray-600 transition duration-200 hover:text-tmavazelena hover:underline-offset-4 hover:underline active:tmavazelena"
            >
              Tým
            </a>
            <a
              href="#kontakt"
              className="text-sm md:text-lg md:font-semibold text-gray-600 transition duration-200 hover:text-tmavazelena hover:underline-offset-4 hover:underline active:tmavazelena"
            >
              Kontakt
            </a>
            <a
              href="https://www.instagram.com/arboristikasvarovsky/"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#000"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </nav>
          {/* nav - end */}
        </header>

        <section className="flex flex-col-reverse justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          {/* content - start */}
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <div className="hidden lg:block">
              <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-6xl">
                <span className="text-tmavazelena">ARBORISTIKA</span> SVÁROVSKÝ
              </h1>
              <p className="mb-8 md:mb-12 font-semibold text-xl xl:text-2xl">
                profesionální péče o dřeviny
              </p>
            </div>
            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              <strong>
                {/* Všechny typy řezů dřevin, kácíme bezpečně i havarijní stromy... */}
                Provádíme komplexní arboristické služby v korunách stromů,
                <br className="hidden md:inline-block lg:hidden" /> na
                underground používáme technologii air-spade
              </strong>
            </p>

            <div className=" flex-col gap-8 sm:flex-row sm:justify-center lg:justify-start hidden md:flex">
              <a
                href="#sluzby"
                className="hidden inline-block rounded-lg bg-tmavazelena px-16 py-4 text-center text-md shadow-neutral-400 shadow-lg font-semibold text-black outline-none transition duration-300 hover:shadow-sm hover:shadow-neutral-300 hover:bg-tmavazelena md:text-base"
              >
                Služby
              </a>

              <a
                href="#kontakt"
                className="inline-block rounded-lg bg-tmavacervena px-16 py-4 text-center text-md font-semibold text-white outline-none transition duration-300 shadow-neutral-400 shadow-lg hover:shadow-sm hover:shadow-neutral-300 md:text-base hover:bg-tmavacervena"
              >
                objednat naše služby
              </a>
            </div>
          </div>
          {/* content - end */}

          {/* image - start */}
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-2/3 md:mt-0">
            <img
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1707405863/arboristikasvarovsky/fido_contact.jpg.jpeg_hsxva1.webp"
              loading=""
              alt="Photo by Fakurian Design"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* image - end */}
          <div className="block mx-auto lg:hidden">
            <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-6xl text-center">
              <span className="text-tmavazelena">ARBORISTIKA</span> SVÁROVSKÝ
            </h1>
            <p className="font-semibold text-xl xl:text-2xl text-center">
              profesionální péče o dřeviny
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
