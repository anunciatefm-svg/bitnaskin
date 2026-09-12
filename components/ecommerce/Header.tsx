import Image from "next/image";


export function Header(){

return (

<header className="w-full bg-white border-b border-gray-100">


<div className="
max-w-7xl
mx-auto
px-8
py-4
flex
items-center
justify-between
">


<Image

src="/images/brand/bitna-logo.png"

alt="Bitna Skin"

width={110}

height={40}

/>



<nav className="
hidden
md:flex
gap-8
text-gray-700
text-sm
">


<a>
Inicio
</a>


<a>
Productos
</a>


<a>
Rutinas
</a>


<a>
Ofertas
</a>


</nav>




<button

className="
bg-[#E98C87]
text-white
px-6
py-3
rounded-full
text-sm
hover:scale-105
transition
"

>

Comprar ahora

</button>



</div>


</header>

)

}