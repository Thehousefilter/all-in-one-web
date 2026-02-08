"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Pond Installation",
        location: "Poplar Grove, IL",
        img: "/project9.jpg", // Pond/Water feature
        size: "large"
    },
    {
        title: "Custom Deck",
        location: "Rockford, IL",
        img: "/project4.jpg", // Deck per user
        size: "small"
    },
    {
        title: "Tree Removal",
        location: "Roscoe, IL",
        img: "/project7.jpg", // Tree trimming
        size: "medium"
    },
    {
        title: "Lawn Care",
        location: "Belvidere, IL",
        img: "/project8.jpg", // Commercial mowing
        size: "medium"
    },
    {
        title: "Kitchen Remodel",
        location: "Loves Park, IL",
        img: "/project6.jpg", // Kitchen
        size: "large"
    },
    {
        title: "Driveway Concrete",
        location: "Machesney Park, IL",
        img: "/project1.jpg", // Concrete driveway
        size: "small"
    },
    {
        title: "Firewood Service",
        location: "Poplar Grove, IL",
        img: "/project10.png", // Firewood (png)
        size: "medium"
    },
    {
        title: "Large Tree Removal",
        location: "Caledonia, IL",
        img: "/project11.jpg",
        size: "large"
    },
    {
        title: "Backyard Renovation",
        location: "Roscoe, IL",
        img: "/project14.jpg", // Lawn care/Backyard
        size: "medium"
    }
];

export default function Portfolio() {
    return (
        <section id="work" className="py-32 px-6 bg-charcoal border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="text-safety-orange font-black text-xs tracking-[0.4em] uppercase mb-4 block">Our Portfolio</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                            CRAFTSMANSHIP <span className="text-stroke italic text-white/20">GALLERY</span>
                        </h2>
                    </div>
                    <p className="text-gray-300 max-w-sm text-sm font-medium leading-relaxed">
                        We don't just complete projects. We curate experiences. Browse through our recently finished masterpieces.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 auto-rows-[300px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`relative group overflow-hidden bg-charcoal cursor-pointer ${project.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                                }`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                                style={{ backgroundImage: `url('${project.img}')` }}
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span className="text-safety-orange font-bold text-xs tracking-widest uppercase mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {project.location}
                                </span>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
