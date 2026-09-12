import { products } from "@/database/products";
import { ProductCard } from "./ProductCard";


export function ProductSection(){

const featuredProducts = products.filter(
(product)=>product.featured
);


return (

<section className="bg-[#FFF9F6] py-16">


<div className="max-w-7xl mx-auto px-6">


<div className="text-center mb-12">


<p

className="
text-[#E98C87]
uppercase
tracking-[5px]
text-xs
"

>
Productos destacados
</p>



<h2

className="
mt-4
text-4xl
font-semibold
text-[#222]
"

>
Favoritos de la belleza coreana
</h2>



<p

className="
mt-4
text-gray-500
"

>
Productos originales seleccionados para tu rutina diaria.
</p>



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
featuredProducts.map((product)=>(

<ProductCard

key={product.id}

product={product}

/>

))

}


</div>



</div>


</section>


)

}