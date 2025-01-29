import { Button } from "../ui/button";

// Define the type for a product
interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

// Props for the Cards component
interface CardsProps {
  products: Product[];
}

export default function Cards({ products }: CardsProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#1F2937] mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#1F2937]">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {product.description}
              </p>
              <p className="mt-2 text-lg font-bold text-[#D97706]">
                {product.price}
              </p>
              <Button className="mt-4 w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90">
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}