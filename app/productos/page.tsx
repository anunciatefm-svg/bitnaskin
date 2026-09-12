import { products } from "@/database/products";
import { ProductCard } from "@/components/ecommerce/ProductCard";


export default function ProductsPage(){


return (

<main className="bg-[#FFF9F6] min-h-screen">


<section className="py-20">


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
Catálogo
</p>



<h1

className="
mt-4
text-5xl
font-semibold
text-[#222]
"

>
Todos nuestros productos
</h1>



<p

className="
mt-5
text-gray-500
max-w-2xl
mx-auto
"

>
Descubre nuestra selección de skincare coreano
para crear una rutina ideal para tu piel.
</p>



</div>




<div

className="
flex
justify-between
items-center
mb-8
"

>


<p className="text-gray-600">

{products.length} productos disponibles

</p>



<select

className="
bg-white
border
border-gray-200
rounded-full
px-5
py-3
text-sm
outline-none
"

>

<option>
Más destacados
</option>

<option>
Mayor precio
</option>

<option>
Menor precio
</option>


</select>



</div>




<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-8
"

>


{
products.map((product)=>(


<ProductCard

key={product.id}

product={product}

/>


))

}



</div>



</div>


</section>


</main>


)

}