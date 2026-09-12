import "./globals.css";

import { Header } from "@/components/ecommerce/Header";


export const metadata = {

title:"Bitna Skin",

description:"Korean Premium Skincare"

};



export default function RootLayout({

children,

}:{

children:React.ReactNode;

}){


return (

<html lang="es">


<body>


<Header/>


{children}


</body>


</html>

)

}