"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("HOME");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "WEDDINGS", href: "/weddings" },
    { label: "PRE-WEDDINGS", href: "/pre-weddings" },
    { label: "FASHION", href: "/fashion" },
    { label: "ABOUT US", href: "/about" },
    { label: "CONTACT US", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50  dark:shadow-none transition-colors duration-300 ${isScrolled ? "bg-white/50 dark:bg-black/90 backdrop-blur-xs shadow-sm " : "bg-transparent backdrop-blur-none shadow-none"}`}
      >
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <Link
            href={"/"}
            className="text-xl font-bold tracking-tighter text-black dark:text-white"
          >
            SK PHOTOGRARY
          </Link>
          <div className="hidden md:flex gap-6 items-center font-manrope text-sm tracking-tight">
            {navItems.map((item) => (
              <Link
                key={item.label}
                className={`text-sm ${item.href === pathname ? "text-black dark:text-white font-bold border-b-2 border-black pb-1" : "text-gray-500 dark:text-gray-400 font-medium"} hover:text-black dark:hover:text-white transition-colors duration-300`}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary focus:outline-none bg-white/10 p-2 rounded"
            aria-label="Toggle menu"
          >
            {isMenuOpen ?  <XIcon /> : <MenuIcon /> }
          </button>
        </div>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white/95 dark:bg-black/95 border-t border-gray-200 dark:border-gray-800 shadow-lg`}
        >
          <div className="flex flex-col gap-2 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base ${item.href === pathname ? "text-black dark:text-white font-bold" : "text-gray-600 dark:text-gray-300"} hover:text-black dark:hover:text-white transition-colors duration-300`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
