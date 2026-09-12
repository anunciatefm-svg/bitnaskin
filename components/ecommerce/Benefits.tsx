const benefits = [
  {
    icon: "✦",
    title: "Productos originales",
    description:
      "Seleccionamos marcas coreanas auténticas para tu rutina.",
  },
  {
    icon: "♡",
    title: "Envíos rápidos",
    description:
      "Recibe tus productos de forma segura y confiable.",
  },
  {
    icon: "◌",
    title: "Atención personalizada",
    description:
      "Te ayudamos a encontrar la rutina ideal para tu piel.",
  },
  {
    icon: "✓",
    title: "Pagos seguros",
    description:
      "Compra con tranquilidad y protección.",
  },
];


export function Benefits(){

return (

<section className="bg-white py-16">


<div className="max-w-7xl mx-auto px-6">


<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"

>


{
benefits.map((item,index)=>(


<div

key={index}

className="
text-center
p-8
rounded-[30px]
bg-[#FFF9F6]
hover:shadow-lg
transition
"

>


<div

className="
mx-auto
w-16
h-16
rounded-full
bg-[#FCE8E5]
flex
items-center
justify-center
text-[#E98C87]
text-3xl
font-bold
"

>

{item.icon}

</div>



<h3

className="
mt-5
font-semibold
text-lg
text-[#222]
"

>

{item.title}

</h3>



<p

className="
mt-3
text-sm
text-gray-500
leading-6
"

>

{item.description}

</p>



</div>


))

}


</div>


</div>


</section>


)

}