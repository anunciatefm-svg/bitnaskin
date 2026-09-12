export function Hero() {
  return (
    <section className="bg-[#FFF9F6] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div>

          <span className="text-sm tracking-[5px] text-[#E98C87] uppercase">
            Belleza femenina
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-semibold leading-tight text-[#1F2937]">
            Encuentra tu belleza,
            <br />
            tu estilo y tu esencia.
          </h1>

          <p className="mt-6 text-lg text-[#475569] max-w-xl leading-relaxed">
            Descubre productos seleccionados de belleza, cuidado personal
            y fragancias pensadas para acompañarte en cada momento.
          </p>


          <button
            className="
            mt-8
            bg-[#E98C87]
            text-white
            px-8
            py-4
            rounded-full
            hover:opacity-90
            transition
            "
          >
            Explorar productos
          </button>


          {/* BENEFICIOS */}
          <div className="mt-10 grid grid-cols-3 gap-6">

            <div>
              <div className="text-2xl">✨</div>
              <p className="text-sm mt-2 text-[#334155]">
                Productos seleccionados
              </p>
            </div>


            <div>
              <div className="text-2xl">🌸</div>
              <p className="text-sm mt-2 text-[#334155]">
                Belleza femenina
              </p>
            </div>


            <div>
              <div className="text-2xl">💗</div>
              <p className="text-sm mt-2 text-[#334155]">
                Experiencia premium
              </p>
            </div>

          </div>

        </div>



        {/* IMAGEN */}
        <div
          className="
          rounded-[35px]
          overflow-hidden
          shadow-xl
          "
        >

          <img
            src="/images/hero/hero-main.jpg"
            alt="Productos de belleza"
            className="
            w-full
            h-[420px]
            object-cover
            "
          />

        </div>


      </div>
    </section>
  );
}