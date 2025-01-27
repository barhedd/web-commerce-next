import ProductsViewer from "@/home/products-viewer.component";
import { productsService } from "@/services";


export default async function Home() {
  const data = await productsService.getAllProducts();
  console.log(data);

  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* Barra de navegación */}
      <div className="w-full grid grid-cols-3">
        {/* Logo */}
        <div>

        </div>

        {/* Categorías */}
        <div className="flex justify-center items-center">

        </div>

        {/* Búsqueda y carrito*/}
        <div className="flex justify-end items-center">

        </div>
      </div>

      {/* Banner principal */}
      <div className="w-full">

      </div>

      <div className="w-full max-w-[1836px] flex flex-col">
        {/* Categoría de recomendados */}
        <ProductsViewer products={data} />
      </div>

      {/* Categoría de Lo Más Nuevo */}
      <div className="w-full">

      </div>
    </div>
  );
}
