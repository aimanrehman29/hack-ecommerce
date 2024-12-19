import SlidingCarousel from './Carousel'

export default function Home() {
  const products = [
    {
      name: 'Nike Air Max Pulse',
      category: "Women's Shoes",
      price: '13,995',
      image: '/images/Image (5).png',
    },
    {
      name: 'Nike Air Max Pulse',
      category: "Men's Shoes",
      price: '13,995',
      image: '/images/Image (5).png',
    },
    {
      name: 'Nike Air Max 97 SE',
      category: "Men's Shoes",
      price: '16,395',
      image: '/images/Image (6).png',
    },
    {
      name: 'Nike Air Max 97 SE',
      category: "Men's Shoes",
      price: '16,395',
      image: '/images/Image (6).png',
    }, {
      name: 'Nike Air Max 97 SE',
      category: "Men's Shoes",
      price: '16,395',
      image: '/images/Rectangle (3).png',
    },
   {
    name: 'Nike Air Max 97 SE',
    category: "Men's Shoes",
    price: '16,395',
    image: '/images/Rectangle (2).png',
  },
  ];

  return (
    <div className="mt-2 ">
      <SlidingCarousel products={products} />
    </div>
  );
}
