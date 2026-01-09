import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import hero1 from "../assets/hero/hero1.jpeg";
import hero2 from "../assets/hero/hero2.jpeg";
import hero3 from "../assets/hero/hero3.jpeg";

import api from "../services/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          className="h-[80vh]"
        >
          {[hero1, hero2, hero3].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img
                  src={img}
                  alt="Merchix Hero"
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center">
                  <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight">
                      Luxury Products. <br />
                      Unbeatable Prices.
                    </h1>

                    <p className="mt-4 text-white/80 max-w-xl">
                      Thoughtfully curated products designed for everyday use.
                      Quality, simplicity, and trust at the core.
                    </p>

                    <Link
                      to="/products"
                      className="inline-block mt-6 bg-white text-black px-8 py-3 text-sm font-medium rounded-full hover:bg-gray-100 transition"
                    >
                      Shop Products
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Featured Products
            </h2>
            <Link
              to="/products"
              className="text-sm font-medium text-gray-600 hover:text-black transition"
            >
              View all →
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 8).map((product) => (
              <div
                key={product._id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition">
                    <Link
                      to={`/product/${product._id}`}
                      className="mb-4 bg-white text-black text-sm px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
                    >
                      View Product
                    </Link>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
