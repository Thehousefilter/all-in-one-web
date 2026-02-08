"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Hammer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "bg-charcoal/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-8"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-64 h-16">
                        <Image
                            src="/logo.png"
                            alt="All In One Home Improvement"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    {["Work", "Services", "About", "Reviews"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium tracking-wide text-foreground/70 hover:text-safety-orange transition-colors uppercase"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-safety-orange text-charcoal text-xs font-black tracking-widest px-6 py-3 rounded-none hover:bg-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
                    >
                        GET A QUOTE
                    </Link>
                </div>

                {/* Mobile Nav Toggle (Simplified for now) */}
                <div className="md:hidden text-foreground">
                    <Link href="#contact" className="text-xs font-black tracking-widest text-safety-orange">
                        QUOTE
                    </Link>
                </div>
            </div>
        </nav>
    );
}
