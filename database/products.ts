export type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured: boolean;
};


export const products: Product[] = [

  {
    id: 1,
    name: "Medicube Collagen Jelly Cream",
    brand: "Medicube",
    category: "Hidratación",
    price: 199,
    image: "/images/products/product-2.jpg",
    description:
      "Crema hidratante coreana con activos reafirmantes para una piel luminosa y suave.",
    featured: true,
  },


  {
    id: 2,
    name: "Medicube Pink Serum",
    brand: "Medicube",
    category: "Anti edad",
    price: 99,
    image: "/images/products/product-3.jpg",
    description:
      "Sérum coreano diseñado para mejorar la apariencia de la piel y aportar luminosidad.",
    featured: true,
  },


  {
    id: 3,
    name: "Deep Vita C Capsule Cream",
    brand: "Medicube",
    category: "Iluminación",
    price: 119,
    image: "/images/products/product-4.jpg",
    description:
      "Crema con vitamina C para ayudar a conseguir una piel más uniforme.",
    featured: true,
  },


  {
    id: 4,
    name: "Red Acne Foam Cleanser",
    brand: "K-Beauty",
    category: "Limpieza",
    price: 89,
    image: "/images/products/product-5.jpg",
    description:
      "Limpiador facial suave ideal para rutinas de limpieza diaria.",
    featured: true,
  },


];