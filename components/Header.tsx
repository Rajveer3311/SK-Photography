'use client'

import { usePathname } from 'next/dist/client/components/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSelected, setIsSelected] = useState('HOME');
    const pathname = usePathname();
      const [isScrolled, setIsScrolled] = useState(false);


    const navItems = [
        { label: 'HOME', href: '/' },
        { label: 'WEDDINGS', href: '/weddings' },
        { label: 'PRE-WEDDINGS', href: '/pre-weddings' },
        { label: 'FASHION', href: '/fashion' },
        { label: 'INSTAGRAM', href: '/instagram' },
        { label: 'ABOUT US', href: '/about' },
        { label: 'CONTACT US', href: '/contact' },
    ]

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
            <nav className={`fixed top-0 w-full z-50  dark:shadow-none transition-colors duration-300 ${isScrolled ? 'bg-white/50 dark:bg-black/90 backdrop-blur-xs shadow-sm ' : 'bg-transparent backdrop-blur-none shadow-none'}`}>
                <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
                    <Link href={"/"} className="text-xl font-bold tracking-tighter text-black dark:text-white">
                        SK PHOTOGRARY
                    </Link>
                    <div className="hidden md:flex gap-6 items-center font-manrope text-sm tracking-tight">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                className={`text-sm ${item.href === pathname ? 'text-black dark:text-white font-bold border-b-2 border-black pb-1' : 'text-gray-500 dark:text-gray-400 font-medium'} hover:text-black dark:hover:text-white transition-colors duration-300`}
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <button className="md:hidden text-primary">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </nav>
            {/* <header className="w-full px-12 py-8 flex justify-between items-center">
                <div className="logo-container">
                    <div className="bracket bracket-tl" />
                    <div className="bracket bracket-tr" />
                    <div className="bracket bracket-bl" />
                    <div className="bracket bracket-br" />
                    <div className="text-center">
                        <span className="block font-['Manrope'] text-xl font-extrabold tracking-[0.1em] leading-none">CHINTUPATHAK</span>
                        <span className="block font-['Manrope'] text-[0.5rem] tracking-[0.4em] mt-1">PHOTOGRAPHY</span>
                    </div>
                </div>
                <nav className="hidden lg:flex gap-8">
                    <a className="text-[0.6rem] tracking-[0.15em] font-medium hover:opacity-60 transition-opacity" href="#">HOME</a>
                    <a className="text-[0.6rem] tracking-[0.15em] font-medium hover:opacity-60 transition-opacity" href="#">WEDDINGS</a>
                    <a className="text-[0.6rem] tracking-[0.15em] font-medium hover:opacity-60 transition-opacity" href="#">PRE-WEDDINGS</a>
                    <a className="text-[0.6rem] tracking-[0.15em] font-medium hover:opacity-60 transition-opacity" href="#">FASHION</a>
                    <a className="text-[0.6rem] tracking-[0.15em] font-medium hover:opacity-60 transition-opacity" href="#">INSTAGRAM</a>
                    <a className="text-[0.6rem] tracking-[0.15em] font-medium hover:opacity-60 transition-opacity" href="#">ABOUT US</a>
                </nav>
            </header> */}
        </>
    )
}
