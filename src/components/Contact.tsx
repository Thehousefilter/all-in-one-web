"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Camera, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, LeadInput } from "@/lib/schemas";
import { submitLead } from "@/lib/supabase";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LeadInput>({
        resolver: zodResolver(leadSchema),
    });

    const onSubmit = async (data: LeadInput) => {
        setIsSubmitting(true);
        try {
            await submitLead({
                ...data,
                status: "new",
            });
            setIsSuccess(true);
            reset();
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            console.error("Submission failed:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 px-6 bg-charcoal border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <span className="text-safety-orange font-black text-xs tracking-[0.4em] uppercase mb-6 block">Get in Touch</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10 leading-[0.9]">
                            START THE<br />
                            <span className="text-stroke italic text-white/20">TRANSFORMATION.</span>
                        </h2>
                        <p className="text-gray-200 max-w-md text-sm font-medium leading-relaxed mb-12">
                            Ready to elevate your space? Send us a quick note or a few photos of your project area. We minimize the talk and maximize the results.
                        </p>

                        <div className="space-y-8">
                            <a href="tel:8155163716" className="flex items-center gap-6 group cursor-pointer w-fit">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-safety-orange transition-colors">
                                    <Phone className="w-5 h-5 text-white group-hover:text-charcoal" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black tracking-widest text-concrete uppercase mb-1">CALL OR TEXT</p>
                                    <p className="text-xl font-black text-white">(815) 516-3716</p>
                                </div>
                            </a>

                            <a href="mailto:allinonethebestone@gmail.com" className="flex items-center gap-6 group cursor-pointer w-fit">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-safety-orange transition-colors">
                                    <Mail className="w-5 h-5 text-white group-hover:text-charcoal" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black tracking-widest text-concrete uppercase mb-1">EMAIL DIRECT</p>
                                    <p className="text-lg font-black text-white">allinonethebestone@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-12 relative overflow-hidden"
                    >
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute inset-0 z-50 bg-charcoal/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
                            >
                                <CheckCircle2 className="w-16 h-16 text-safety-orange mb-4" />
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">VISION RECEIVED</h3>
                                <p className="text-foreground/60 text-sm font-medium">We'll review your project and get back to you within 24 hours.</p>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[10px] font-black tracking-widest text-concrete uppercase block mb-2">FULL NAME</label>
                                    <input
                                        {...register("name")}
                                        type="text"
                                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} px-4 py-4 text-white focus:border-safety-orange outline-none transition-colors`}
                                        placeholder="Enter your name"
                                    />
                                    {errors.name && <p className="text-[8px] font-black text-red-500 tracking-widest mt-1 uppercase">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label className="text-[10px] font-black tracking-widest text-concrete uppercase block mb-2">PHONE NUMBER</label>
                                    <input
                                        {...register("phone")}
                                        type="tel"
                                        className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} px-4 py-4 text-white focus:border-safety-orange outline-none transition-colors`}
                                        placeholder="(000) 000-0000"
                                    />
                                    {errors.phone && <p className="text-[8px] font-black text-red-500 tracking-widest mt-1 uppercase">{errors.phone.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] font-black tracking-widest text-concrete uppercase block mb-2">PROJECT LOCATION</label>
                                <input
                                    {...register("location")}
                                    type="text"
                                    className={`w-full bg-white/5 border ${errors.location ? 'border-red-500' : 'border-white/10'} px-4 py-4 text-white focus:border-safety-orange outline-none transition-colors`}
                                    placeholder="Address or City"
                                />
                                {errors.location && <p className="text-[8px] font-black text-red-500 tracking-widest mt-1 uppercase">{errors.location.message}</p>}
                            </div>

                            <div>
                                <label className="text-[10px] font-black tracking-widest text-concrete uppercase block mb-2">THE VISION</label>
                                <textarea
                                    {...register("vision")}
                                    rows={4}
                                    className={`w-full bg-white/5 border ${errors.vision ? 'border-red-500' : 'border-white/10'} px-4 py-4 text-white focus:border-safety-orange outline-none transition-colors`}
                                    placeholder="What are we building?"
                                />
                                {errors.vision && <p className="text-[8px] font-black text-red-500 tracking-widest mt-1 uppercase">{errors.vision.message}</p>}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                <button
                                    type="button"
                                    className="flex items-center gap-3 border border-white/10 px-8 py-4 text-xs font-black tracking-widest text-white hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
                                >
                                    <Camera className="w-4 h-4 text-safety-orange" />
                                    UPLOAD PHOTOS
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-safety-orange text-charcoal font-black text-xs tracking-widest px-10 py-4 flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg hover:bg-white transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <>
                                            SEND VISION
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
