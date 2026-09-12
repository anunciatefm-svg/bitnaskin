const routines = [
  {
    title: "Limpieza facial",
    description:
      "Elimina impurezas y prepara tu piel para una rutina perfecta.",
    icon: "🫧",
  },
  {
    title: "Hidratación profunda",
    description:
      "Recupera la suavidad y luminosidad con productos hidratantes.",
    icon: "💧",
  },
  {
    title: "Anti edad",
    description:
      "Activos coreanos para cuidar y renovar la apariencia de tu piel.",
    icon: "✨",
  },
  {
    title: "Piel sensible",
    description:
      "Fórmulas suaves para una piel equilibrada y protegida.",
    icon: "🌸",
  },
];


export function Routines(){

return (

<section className="bg-[#FFF9F6] py-20">


<div className="max-w-7xl mx-auto px-6">


<div className="text-center mb-14">


<p
className="
text-[#E98C87]
uppercase
tracking-[5px]
text-xs
"
>
Encuentra tu rutina
</p>



<h2

className="
mt-4
text-4xl
font-semibold
text-[#222]
"

>
Cuida tu piel según tus necesidades
</h2>



<p

className="
mt-4
text-gray-500
"

>
Selecciona una rutina creada con inspiración coreana.
</p>



</div>




<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-8
"

>


{
routines.map((routine,index)=>(


<div

key={index}

className="
group
bg-white
rounded-[35px]
p-8
text-center
border
border-[#F7E4DF]
hover:shadow-xl
transition-all
duration-300
hover:-translate-y-2
"

>


<div

className="
mx-auto
w-20
h-20
rounded-full
bg-[#FCE8E5]
flex
items-center
justify-center
text-5xl
shadow-sm
group-hover:scale-110
transition
"

>

{routine.icon}

</div>



<h3

className="
mt-7
text-xl
font-semibold
text-[#222]
"

>

{routine.title}

</h3>



<p

className="
mt-4
text-gray-500
text-sm
leading-7
"

>

{routine.description}

</p>



<button

className="
mt-6
text-[#E98C87]
font-medium
hover:underline
"

>

Ver rutina →

</button>



</div>


))

}


</div>


</div>


</section>


)

}