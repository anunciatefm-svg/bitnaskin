import Link from "next/link";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
  };
};


export function ProductCard({
  product,
}: ProductCardProps) {


return (

<article

className="
group
bg-white
rounded-[32px]
overflow-hidden
shadow-sm
hover:shadow-xl
transition-all
duration-300
hover:-translate-y-2
"

>


<div

className="
relative
h-[260px]
flex
items-center
justify-center
bg-white
p-8
"

>


<img

src={product.image}

alt={product.name}

className="
h-[210px]
w-full
object-contain
drop-shadow-xl
transition
duration-500
group-hover:scale-110
"

/>


</div>



<div className="p-6">



<p

className="
text-xs
tracking-[2px]
text-[#E98C87]
uppercase
"

>

{product.brand}

</p>




<h3

className="
mt-3
text-lg
font-semibold
text-[#222]
min-h-[55px]
"

>

{product.name}

</h3>




<div

className="
mt-3
text-[#E98C87]
text-sm
"

>

★★★★★

</div>




<div

className="
flex
items-center
justify-between
mt-5
"

>


<span

className="
text-xl
font-bold
text-[#222]
"

>

S/ {product.price}

</span>




<Link

href={`/productos/${product.id}`}

className="
bg-[#E98C87]
text-white
px-5
py-2
rounded-full
text-sm
hover:bg-[#d97873]
transition
"

>

Ver producto

</Link>



</div>



</div>



</article>


)

}