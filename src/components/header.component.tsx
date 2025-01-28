'use client'

import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full grid grid-cols-3 p-4 header">
            {/* Logo */}
            <div>

            </div>

            {/* Categorías */}
            <div className="flex justify-center items-center gap-4">
                <p className="text-lg font-medium hover:underline hover:font-bold hover:text-xl cursor-pointer">Hombres</p>
                <p className="text-lg font-medium hover:underline hover:font-bold hover:text-xl cursor-pointer">Mujeres</p>
                <p className="text-lg font-medium hover:underline hover:font-bold hover:text-xl cursor-pointer">Joyería</p>
                <p className="text-lg font-medium hover:underline hover:font-bold hover:text-xl cursor-pointer">Electrónicos</p>
            </div>

            {/* Búsqueda y carrito*/}
            <div className="flex justify-end items-center gap-4">
                <div className="bg-light flex items-center pl-2 pr-20 py-1 gap-2 rounded-full cursor-pointer">
                    <img src="/svg/search.svg" alt="search" className="h-[25px] object-contain" />
                    <p className="text-lg">Buscar</p>
                </div>

                <div className="flex items-center gap-2">
                    <img src="/svg/profile.svg" alt="profile" className="h-[30px] object-contain cursor-pointer" />
                    <img src="/svg/cart.svg" alt="cart" className="h-[35px] object-contain cursor-pointer" />
                </div>
            </div>
        </div>
    );
}