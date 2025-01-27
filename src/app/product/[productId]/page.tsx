import Header from "@/components/header.component";
import { productsService } from "@/services";

export default async function ProductDetail({ params, }: { params: Promise<{ productId: string }> }) {
    const productId = (await params).productId;

    // obtenemos los detalles del producto
    const productDetails = await productsService.getProductById(productId);

    return (
        <div className="w-full h-screen flex flex-col items-center">
            {/* Barra de navegación */}
            <Header />

            <div className="w-full h-full flex flex-col items-center overflow-y-auto pt-10">
                <div className="w-full max-w-[1300px] grid grid-cols-2 gap-10">
                    <div className="flex justify-center">
                        <img
                            src={productDetails.image}
                            alt={productDetails.title}
                            className="h-[500px] object-contain"
                        />
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col">
                                <p className="font-bold">{productDetails.title}</p>
                                <p className="text-dark">{productDetails.category}</p>
                            </div>

                            <p>${productDetails.price}</p>
                        </div>

                        <p>{productDetails.description}</p>

                        <button
                            className="bg-primary hover:bg-primary-tint w-1/2 px-4 py-2 rounded-full text-primary-contrast font-bold"
                        >
                            COMPRAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}