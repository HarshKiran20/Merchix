import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import API from "../services/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    API.get("/products").then(res => setProducts(res.data));
  }, []);

  const filteredProducts = category
    ? products.filter(p =>
        p.category
          ? p.category.toLowerCase() === category
          : p.name.toLowerCase().includes(category)
      )
    : products;

  return (
    <section className="animate-fadeIn max-w-7xl mx-auto px-6 py-20">
      
      {/* PAGE HEADER */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-2xl md:text-3xl font-semibold">
          {category
            ? category.charAt(0).toUpperCase() + category.slice(1)
            : "All Products"}
        </h1>

        {category && (
          <Link
            to="/products"
            className="text-sm underline underline-offset-4 hover:text-gray-600"
          >
            Show All
          </Link>
        )}
      </div>

      {/* PRODUCTS GRID */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map(p => (
            <div
              key={p._id}
              className="group bg-white rounded-2xl overflow-hidden border
                         hover:shadow-xl transition duration-300"
            >
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606813909359-3c16c24b0d88"
                  alt={p.name}
                  className="w-full h-full object-cover
                             group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="font-medium text-lg mb-1">
                  {p.name}
                </h3>

                <p className="text-gray-500 mb-4">
                  ₹{p.price}
                </p>

                <Link
                  to={`/product/${p._id}`}
                  className="inline-flex items-center gap-1
                             text-sm font-medium underline
                             underline-offset-4
                             hover:text-gray-600"
                >
                  View Product
                  <span className="group-hover:translate-x-1 transition">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
