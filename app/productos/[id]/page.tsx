import Link from "next/link";
import { products } from "@/database/products";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1>Producto no encontrado</h1>
      </main>
    );
  }

  return (
    <main className="bg-[#fff9f7] min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-16">

        <Link
          href="/productos"
          className="text-[#e98c87] text-sm hover:underline"
        >
          ← Volver a productos
        </Link>


        <div className="grid md:grid-cols-2 gap-14 mt-10">


          {/* IMAGEN */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[520px] object-contain"
            />

          </div>



          {/* INFORMACIÓN */}
          <div className="flex flex-col justify-center">

            <p className="uppercase tracking-[5px] text-[#e98c87] text-sm mb-4">
              {product.brand}
            </p>


            <h1 className="text-5xl font-semibold text-[#202020] leading-tight">
              {product.name}
            </h1>


            <div className="flex gap-1 mt-5 text-[#e98c87]">
              ★★★★★
            </div>


            <p className="text-[#52627a] text-lg mt-6 leading-relaxed">
              {product.description}
            </p>


            <p className="text-4xl font-bold mt-8 text-[#202020]">
              S/ {product.price}
            </p>



            <div className="flex items-center gap-5 mt-8">

              <div className="border rounded-full px-5 py-3">
                − &nbsp; 1 &nbsp; +
              </div>


              <button
                className="
                bg-[#e98c87]
                text-white
                px-10
                py-4
                rounded-full
                hover:opacity-90
                transition
                "
              >
                🛒 Agregar al carrito
              </button>

            </div>


          </div>


        </div>





        {/* BENEFICIOS */}

        <div className="grid md:grid-cols-3 gap-6 mt-20">


          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              ✨ Beneficios
            </h3>

            <p className="text-gray-600">
              Hidratación profunda, textura suave y una rutina inspirada en la belleza coreana.
            </p>

          </div>



          <div className="bg-white rounded-3xl p-8">

            <h3 className="text-xl font-semibold mb-3">
              🌸 Ingredientes destacados
            </h3>

            <p className="text-gray-600">
              Activos seleccionados para complementar tu cuidado diario.
            </p>

          </div>



          <div className="bg-white rounded-3xl p-8">

            <h3 className="text-xl font-semibold mb-3">
              💗 Modo de uso
            </h3>

            <p className="text-gray-600">
              Aplicar sobre la piel limpia y masajear suavemente hasta absorber.
            </p>

          </div>


        </div>





        {/* CONFIANZA */}

        <section className="mt-20 text-center">

          <h2 className="text-3xl font-semibold">
            Compra con confianza en Bitna Skin
          </h2>


          <div className="grid md:grid-cols-4 gap-5 mt-10">

            <div>
              ✨
              <p>Productos seleccionados</p>
            </div>


            <div>
              🇰🇷
              <p>Belleza coreana</p>
            </div>


            <div>
              📦
              <p>Preparación cuidadosa</p>
            </div>


            <div>
              📲
              <p>@bitnaskin_</p>
            </div>

          </div>

        </section>


      </section>


    </main>
  );
}