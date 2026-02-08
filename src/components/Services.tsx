"use client";

import { motion } from "framer-motion";
import { Hammer, Trees, Shovel, HardHat, Home, Snowflake } from "lucide-react";

const services = [
    {
        title: "Spring & Fall Clean Up",
        icon: <Trees className="w-8 h-8" />,
        img: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&q=80&w=800",
        desc: "Complete property cleanup including leaf removal, mulching, and debris clearing."
    },
    {
        title: "Tree Service",
        icon: <HardHat className="w-8 h-8" />,
        img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
        desc: "Commercial and residential tree trimming, removal, and maintenance."
    },
    {
        title: "Lawn Maintenance",
        icon: <Trees className="w-8 h-8" />,
        img: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=800",
        desc: "Reliable commercial and residential mowing and lawn care services."
    },
    {
        title: "Snow Removal",
        icon: <Snowflake className="w-8 h-8" />,
        img: "https://images.unsplash.com/photo-1516937941348-c09645f31e88?auto=format&fit=crop&q=80&w=800",
        desc: "24/7 Commercial and residential snow plowing and salting."
    },
    {
        title: "Deck, Patio & Fence",
        icon: <Hammer className="w-8 h-8" />,
        img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
        desc: "High-quality craftsmanship for custom decks, patios, and fences."
    },
    {
        title: "Construction & Remodeling",
        icon: <Shovel className="w-8 h-8" />,
        img: "https://images.unsplash.com/photo-1581094794329-cd1361daca69?auto=format&fit=crop&q=80&w=800",
        desc: "Expert craftsmanship for home additions, remodeling, and concrete work."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-32 px-6 bg-charcoal">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="text-safety-orange font-black text-xs tracking-[0.4em] uppercase mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                        ELITE CRAFTSMANSHIP.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/5] group overflow-hidden bg-black cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url('${service.img}')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent z-10" />

                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <div className="text-safety-orange mb-4 group-hover:scale-110 transition-transform origin-left duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-sm font-medium tracking-wide translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Top Right Index */}
                            <div className="absolute top-8 right-8 font-black text-white/10 text-4xl italic group-hover:text-safety-orange/20 transition-colors">
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
