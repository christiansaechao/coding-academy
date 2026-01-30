import React from "react";
import {
  Heart,
  ShoppingCart,
  User,
  Compass,
  ShoppingBag,
  Shield,
} from "lucide-react";

export const Navbar = () => {
  const links = [
    { name: "explore", icon: Compass },
    { name: "shop", icon: ShoppingBag },
    { name: "support", icon: Shield },
  ];

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-center items-center gap-4">
        <div className="bg-red-500 px-6 py-4">
          <a className="border-3 py-1 px-2 rounded-full border-white">
            Nintendo
          </a>
        </div>
        {links.map((link) => (
          <div className="flex gap-2">
            {<link.icon />}
            <a>{link.name}</a>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-6">
        <input placeholder="search" />
        <button>
          <Heart />
        </button>
        <button>
          <ShoppingCart />
        </button>
        <button>
          <User /> <div>Log In / Sign Up</div>
        </button>
      </div>
    </div>
  );
};
