"use client"
import Image from 'next/image';
import { useState } from 'react';

const SlidingCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 3 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="p-4 mt-20 ">
      {/* Title and Buttons Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Best of Air Max</h2>
        {/* Navigation Buttons */}
        <div className="flex space-x-2">
            <h1 className='text-2xl'>shop</h1>
          <button
            onClick={goToPrevious}
            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="w-1/3 flex-shrink-0 p-2 flex flex-col items-center"
            >
              {/* Product Image */}
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-full"
                />
              </div>
              {/* Product Details */}
              <div className="text-center mt-2">
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-gray-500">{product.category}</p>
                <p className="font-bold mt-2">₹ {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlidingCarousel;
