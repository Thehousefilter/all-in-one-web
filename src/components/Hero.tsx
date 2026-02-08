"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-charcoal">
            {/* Cinematic Background Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for Cinematic Video/Image Slideshow */}
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal z-10" />
                <div className="absolute inset-0 bg-black/40 z-0" />

                {/* Image Placeholder with high-end feel */}
                <div
                    className="w-full h-full bg-cover bg-center animate-slow-zoom"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000')" }} // Premium modern home stock
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >

                    <div className="flex justify-center mb-8">
                        <img src="/project12.jpg" alt="Best of Elgin 2022 Award" className="h-24 md:h-32 object-contain drop-shadow-2xl" />
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8">
                        ALWAYS AT<br />
                        <span className="text-safety-orange">YOUR SERVICE.</span>
                    </h1>
                    <p className="text-sm md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 font-medium tracking-wide drop-shadow-md">
                        Fast, efficient, and honest home improvement services. Fair prices and exceptional customer service guaranteed for Poplar Grove and surrounding areas.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-safety-orange text-charcoal font-black text-sm tracking-widest px-10 py-5 group flex items-center gap-3 w-full sm:w-auto justify-center"
                        >
                            VIEW THE ARTISTRY
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <motion.button
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                            className="border border-white/20 text-white font-black text-sm tracking-widest px-10 py-5 w-full sm:w-auto"
                        >
                            OUR SERVICES
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Indicators */}
            <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-4">
                <div className="h-px w-24 bg-white/20 relative">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute inset-0 bg-safety-orange"
                    />
                </div>
                <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">01 / CINEMATIC HOME REVOLUTION</span>
            </div>

            <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
        </section>
    );
}
