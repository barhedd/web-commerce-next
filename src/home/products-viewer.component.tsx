'use client'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductItem from "./product-item.component";

export default function ProductsViewer({ products }: { products: any[] }) {
    return (
        <div className="w-full">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
            >
                {
                    products.map((product: any) => {
                        return (
                            <SwiperSlide key={product.id}>
                                <ProductItem
                                    id={product.id}
                                    image={product.image}
                                    name={product.title}
                                    category={product.category}
                                    price={product.price}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}