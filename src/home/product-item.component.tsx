'use client'

export default function ProductItem({ image, name, category, price }: { image: string, name: string, category: string, price: number }) {
    return (
        <div className="w-full flex flex-col gap-5">
            <img 
                src={image} 
                alt={name} 
                className="h-[300px] object-contain bg-transparent"
            />

            <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                    <p className="font-bold">{name}</p>
                    <p>{category}</p>
                </div>

                <p>${price}</p>
            </div>
        </div>
    );
}