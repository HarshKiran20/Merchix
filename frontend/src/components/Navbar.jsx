import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/auth";
import logo from "../assets/logo/brand-logo.jpg";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login");
  };

  return (
    <header className="w-full border-b bg-white">
      
      {/* ===== LAYER 1: TOP NAV ===== */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MERCHIX" className="h-9 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/">Home</Link>

          <div className="relative group cursor-pointer">
            <span>Leather Products</span>
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
              <Link to="/products?category=wallets" className="block px-4 py-2 hover:bg-gray-100">
                Wallets
              </Link>
              <Link to="/products?category=belts" className="block px-4 py-2 hover:bg-gray-100">
                Belts
              </Link>
              <Link to="/products?category=bags" className="block px-4 py-2 hover:bg-gray-100">
                Bags
              </Link>
            </div>
          </div>

          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>

          {!isLoggedIn() ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* ===== LAYER 2: ACTION BAR ===== */}
      <div className="border-t bg-gray-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-xl border rounded px-4 py-2 text-sm"
          />
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link to="/my-orders">My Account</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
      </div>

      {/* ===== MOBILE SLIDE DRAWER ===== */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute right-0 top-0 h-full w-72 bg-white p-6 flex flex-col gap-4">
            
            <button
              className="self-end text-xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <Link to="/" onClick={() => setOpen(false)}>Home</Link>

            <div className="border-t pt-4">
              <p className="font-medium mb-2">Leather Products</p>
              <Link to="/products?category=wallets" className="block px-4 py-2 hover:bg-gray-100">
                Wallets
              </Link>
              <Link to="/products?category=belts" className="block px-4 py-2 hover:bg-gray-100">
                Belts
              </Link>
              <Link to="/products?category=bags" className="block px-4 py-2 hover:bg-gray-100">
                Bags
              </Link>
            </div>

            <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>

            <div className="border-t pt-4">
              <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>
              {isLoggedIn() && (
                <Link to="/my-orders" onClick={() => setOpen(false)}>My Account</Link>
              )}

              {!isLoggedIn() ? (
                <>
                  <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
                  <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
                </>
              ) : (
                <button onClick={handleLogout}>Logout</button>
              )}
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
