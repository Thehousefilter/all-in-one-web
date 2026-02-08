"use client";

import { motion } from "framer-motion";
import { Hammer, ShieldCheck, Award, MapPin } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-32 px-6 bg-charcoal">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/5]"
                >
                    <div className="absolute inset-0 bg-concrete/20 z-0 translate-x-4 translate-y-4" />
                    <div
                        className="absolute inset-0 bg-cover bg-center z-10 grayscale hover:grayscale-0 transition-all duration-1000"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541604193435-22287d32c2c2?auto=format&fit=crop&q=80&w=800')" }}
                    />
                    <div className="absolute bottom-8 right-8 z-20 bg-safety-orange p-8 text-charcoal max-w-[240px]">
                        <Hammer className="w-8 h-8 mb-4" />
                        <p className="text-xl font-black italic tracking-tighter leading-none uppercase">
                            We don't cut corners. We build legacies.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <span className="text-safety-orange font-black text-xs tracking-[0.4em] uppercase mb-6 block">Our Identity</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10 leading-[0.9]">
                        CRAFTSMANSHIP, NOT <span className="text-stroke italic text-white/20">CRAIGSLIST.</span>
                    </h2>
                    <div className="space-y-6 text-foreground/60 font-medium tracking-wide">
                        <p>
                            At All In One Home Improvement Services LLC, we believe construction is an art form. From the first machine on site to the final clean finish, every detail is handled with architectural precision.
                        </p>
                        <p>
                            We don't rush jobs. We don't hide mistakes. We build things we're proud to put our name on. Whether it's a luxury kitchen remodel or a complex hardscape oasis, our mission is to deliver elite quality that stands the test of time.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-12">
                        {[
                            { icon: <ShieldCheck className="w-5 h-5 text-safety-orange" />, label: "LICENSED & INSURED" },
                            { icon: <Award className="w-5 h-5 text-safety-orange" />, label: "ELITE QUALITY" },
                            { icon: <MapPin className="w-5 h-5 text-safety-orange" />, label: "CALEDONIA & ROCKFORD" },
                            { icon: <span className="font-black text-safety-orange leading-none">5.0</span>, label: "STAR SERVICE" }
                        ].map((item) => (
                            <div key={item.label} className="flex items-center gap-3">
                                {item.icon}
                                <span className="text-[10px] font-black tracking-widest text-white uppercase">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <button className="mt-12 border border-white/10 px-8 py-4 text-xs font-black tracking-[0.2em] text-white hover:bg-white hover:text-charcoal transition-all uppercase">
                        LEARN OUR STORY
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
