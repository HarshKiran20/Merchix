import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">

        {/* Brand */}
        <div>
          <h3 className="font-semibold text-lg mb-3">MERCHIX</h3>
          <p className="text-gray-600 leading-relaxed">
            Thoughtfully curated products designed for everyday use.
            Quality, simplicity, and trust at the core.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-semibold mb-3">Shop</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">All Products</Link></li>
            <li><Link to="/" className="hover:underline">Wallets</Link></li>
            <li><Link to="/" className="hover:underline">Belts</Link></li>
            <li><Link to="/" className="hover:underline">Bags</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex gap-4 text-lg">
            <a href="#" aria-label="Instagram" className="hover:text-black">📷</a>
            <a href="#" aria-label="Facebook" className="hover:text-black">📘</a>
            <a href="#" aria-label="Telegram" className="hover:text-black">✈️</a>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            We usually reply within 24 hours.
          </p>
        </div>

      </div>

      <div className="border-t text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} MERCHIX. All rights reserved.
      </div>
    </footer>
  );
}
