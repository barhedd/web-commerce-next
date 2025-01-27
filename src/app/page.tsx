import Header from "@/components/header.component";
import ProductsViewer from "@/components/home/products-viewer.component";
import { productsService } from "@/services";

export default async function Home() {
  const products = await productsService.getAllProducts();

  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* Barra de navegación */}
      <Header />

      <div className="w-full h-full flex flex-col overflow-y-auto pt-10">
        {/* Banner principal */}
        <div className="w-full">

        </div>

        <div className="w-full max-w-[1836px] flex flex-col gap-6">
          {/* Categoría de recomendados */}
          <ProductsViewer products={products} />

          {/* Categoría de recomendados */}
          <ProductsViewer products={products} />

          {/* Categoría de recomendados */}
          <ProductsViewer products={products} />

          {/* Categoría de recomendados */}
          <ProductsViewer products={products} />
        </div>
      </div>
    </div>
  );
}
