'use client';

import Image from 'next/image';
import { HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      img: "/images/chair4.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$59.00",
    },
    {
      id: 2,
      img: "/images/chair2.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$59.00",
    },
    {
      id: 3,
      img: "/images/chair.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$59.00",
    },
    {
      id: 4,
      img: "/images/chair3.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$59.00",
    },
    
  ];

  return (
    <div className="w-full bg-white py-20">
      <h2 className="text-[#3F509E] text-4xl text-center mb-16 font-bold">Featured Products</h2>

      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[400px]">
              <Image
                src={product.img}
                width={200}
                height={250}
                alt={product.name}
                className="object-cover w-[200px] h-[250px] transition-all duration-300 group-hover:scale-105"
              />

              <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full">
                  <HeartIcon className="w-6 h-6 text-gray-700" />
                </button>
                <button className="bg-white p-2 rounded-full">
                  <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
                </button>
                <button className="bg-white p-2 rounded-full">
                  <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              <div className="absolute bottom-0 w-full text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-full py-2 text-sm bg-pink-600 rounded-none hover:bg-pink-800 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-red-500">{product.name}</h3>
              <div className="flex justify-center items-center gap-1 mt-1">
                <span className="text-[#05E6B7] text-4xl">-</span>
                <span className="text-[#F701A8] text-4xl">-</span>
                <span className="text-[#00009D] text-4xl">-</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">Code - {product.code}</p>
              <p className="mt-1 text-dark-blue-900">{product.price}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
