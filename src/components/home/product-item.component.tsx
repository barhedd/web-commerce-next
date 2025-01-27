'use client'

import Link from "next/link";

export default function ProductItem({ id, image, name, category, price }: { id: number, image: string, name: string, category: string, price: number }) {
    return (
        <Link href={`/product/${id}`}>
            <div className="w-full flex flex-col gap-5">
                <img 
                    src={image} 
                    alt={name} 
                    className="h-[300px] object-contain bg-transparent"
                />

                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <p className="font-bold">{name}</p>
                        <p className="text-dark">{category}</p>
                    </div>

                    <p>${price}</p>
                </div>
            </div>
        </Link>
    );
}