

import React from 'react';
import { client } from "../../../sanity-migration/dist/sanityClient";
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  sizes: string[];
  image: {
    asset: {
      _ref: string;
    };
  };
}

async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] {
    _id,
    name,
    price,
    tags,
    image,
    description,
    discountPercentage,
    priceWithoutDiscount,
    rating,
    ratingCount,
    sizes,
  }`;
  return client.fetch(query);
}

const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <div className="p-6">
      <h1 className="text-6xl font-bold mb-6 text-[#155915]">The Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 bg-white shadow-md rounded-lg border-[#D32F2F]">
            <h2 className="text-xl font-semibold mb-2 text-[#155915]">{product.name}</h2>
            <Image
              src={urlFor(product.image).url()}
              alt={product.name || "Product image"} // Ensuring a fallback alt text
              width={500}
              height={500}
              style={{ width: '100%', height: 'auto' }}
            />
            <p className="font-semibold text-lg text-[#125012]">Price: ${product.price}</p>
            <p className="text-[#125012] mb-2">{product.description}</p>
            <p className="text-[#125012] mb-2">Price Without Discount: ${product.priceWithoutDiscount}</p>
            {product.tags.length > 0 && <p className="text-gray-500">Tags: {product.tags.join(', ')}</p>}

            {/* Join sizes as a string if available */}
            {product.sizes && product.sizes.length > 0 && (
              <p className="text-[#125012]">Available Sizes: {product.sizes.join(', ')}</p>
            )}

            <p className="text-[#125012]">Rating: {product.rating} ({product.ratingCount} reviews)</p>
            <p className="text-[#125012] mb-2">Rating Counts: {product.ratingCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

