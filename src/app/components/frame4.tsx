import GearUpSection from './GearUp';

export default function Home() {
  const menProducts = [
    { name: 'Nike Dri-FIT ADV TechKnit Ultra', category: "Mens Top", price: '3,895', image: '/images/Image (9).png' },
    { name: 'Nike Dri-FIT Challenger', category: "Mens Shorts", price: '2,495', image: '/images/Image (10).png' },
    { name: 'Nike Dri-FIT Challenger', category: "Mens Shorts", price: '4,495', image: '/images/Rectangle (10).png' },
    { name: 'Nike Dri-FIT Challenger', category: "Mens Shorts", price: '23,495', image: '/images/Rectangle (28).png' },
    
  ];

  const womenProducts = [
    { name: 'Nike Dri-FIT ADV Run Division', category: "Women's Top", price: '5,295', image: '/images/Image (11).png' },
    { name: 'Nike Fast', category: "Womens Leggings", price: '3,795', image: '/images/Image (12).png' },
    { name: 'Nike Fast', category: "Womens Leggings", price: '2,795', image: '/images/Rectangle (33).png' },
    { name: 'Nike Fast', category: "Womens Leggings", price: '7,795', image: '/images/Rectangle (35).png' },
  ];

  return (
    <div>
      <GearUpSection menProducts={menProducts} womenProducts={womenProducts} />
    </div>
  );
}

