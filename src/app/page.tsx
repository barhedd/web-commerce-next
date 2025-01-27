import Header from "@/home/header.component";
import ProductsViewer from "@/home/products-viewer.component";
import { productsService } from "@/services";

export default async function Home() {
  const data = await productsService.getAllProducts();
  console.log(data);

  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* Barra de navegación */}
      <Header />

      <div className="w-full h-full flex flex-col overflow-y-auto">
        {/* Banner principal */}
        <div className="w-full">

        </div>

        <div className="w-full max-w-[1836px] flex flex-col gap-6">
          {/* Categoría de recomendados */}
          <ProductsViewer products={data} />

          {/* Categoría de recomendados */}
          <ProductsViewer products={data} />

          {/* Categoría de recomendados */}
          <ProductsViewer products={data} />

          {/* Categoría de recomendados */}
          <ProductsViewer products={data} />
        </div>
      </div>
    </div>
  );
}
