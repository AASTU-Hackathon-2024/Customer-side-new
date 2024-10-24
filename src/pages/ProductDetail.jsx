import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProductImage } from '../components/ProductImage';
import { SizeSelector } from '../components/SizeSelector';
import { ColorSelector } from '../components/ColorSelector';
import { RelatedProducts } from '../components/RelatedProducts';
import { Minus, Plus } from 'lucide-react';

const COLORS = [
  { name: 'Olive', value: '#4B5320' },
  { name: 'Black', value: '#000000' },
  { name: 'Navy', value: '#000080' },
];

const SIZES = ['Small', 'Medium', 'Large', 'X-Large'];

const RELATED_PRODUCTS = [
  {
    id: '1',
    name: 'Polo with Contrast Trims',
    price: 120,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800',
  },
  {
    id: '2',
    name: 'Gradient Graphic T-shirt',
    price: 120,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
  },
  {
    id: '3',
    name: 'Polo with Tipping Details',
    price: 120,
    image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800',
  },
  {
    id: '4',
    name: 'Black Striped T-shirt',
    price: 120,
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
  },
];

export function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0].value);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const productImages = [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductImage
            mainImage={productImages[activeImageIndex]}
            thumbnails={productImages}
            onThumbnailClick={setActiveImageIndex}
            activeIndex={activeImageIndex}
          />

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold">One Life Graphic T-shirt</h1>
              <p className="text-2xl font-medium mt-2">Br 120</p>
              <p className="text-gray-600 mt-4">
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft
                and breathable fabric, it offers superior comfort and style.
              </p>
            </div>

            <ColorSelector
              colors={COLORS}
              selectedColor={selectedColor}
              onColorSelect={setSelectedColor}
            />

            <SizeSelector
              sizes={SIZES}
              selectedSize={selectedSize}
              onSizeSelect={setSelectedSize}
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <Minus size={20} />
                </button>
                <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-900 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>

        <RelatedProducts products={RELATED_PRODUCTS} />
      </main>

      <Footer />
    </div>
  );
}