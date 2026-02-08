"use client";



export default function GoogleReviews() {


    return (
        <section id="reviews" className="py-20 px-6 bg-charcoal border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <span className="text-safety-orange font-black text-xs tracking-[0.4em] uppercase mb-4 block">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        WHAT OUR CLIENTS <span className="text-stroke italic text-white/20">SAY</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Review 1 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "Frank and his crew did an excellent job installing knotty pine tongue and groove on our ceilings. Very pleased with the craftsmanship and end result, looks beautiful. The crew was very friendly and courteous. We will definitely continue to utilize All In One for additional projects! We highly recommend!"
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Shari Replogle</p>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "Frankie and his crew did an amazing job from resurfacing our deck staining and hanging the trellis i will definitely recommend them to anyone who needs any type of home improvement thanks again guys and for putting up with our little barker"
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Jim Adams</p>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "Frank and his crew were amazing. Had an entire kitchen remodel done, couldn't be happier with the results. He gave me everything I asked for. Great group of guys. Definitely recommend to anyone that has a big or small job needing done."
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Terra Marie</p>
                    </div>
                    {/* Review 4 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "All In One built our deck this fall, did a great job, friendly, polite, clean up tools everday. They keep their Promises. Frank, Mark and Tyler kept us informed everyday of the process..."
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Dyan Toepfer</p>
                    </div>
                    {/* Review 5 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "The crew was the best! They went above and beyond removing my massive tree. Clean up was amazing! I would recommend them to EVERYONE, hands down! Thanks a lot guys!"
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Dana Pearson</p>
                    </div>
                    {/* Review 6 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "All in One did a fantastic job Spring cleaning! Fixed the outdoor lights, removed unsightly tree stumps, cleared a nearly 1/2 acre lot of brush and weeds as well as old fallen trees. Amazing do-it-all team! Thanks All in One! Can’t wait to call you again for a bathroom remodel!"
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Mike Cascio</p>
                    </div>

                    {/* Review 7 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "Called them to trim and remove some trees that were encroaching on my neighbors property. They got out quick to give an estimate. They were well priced and did great work!"
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Gary Jahnke</p>
                    </div>

                    {/* Review 8 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "Frank and his crew did a great job trimming and taking down our bad trees, cleaning the gutters, and power washing the house. They were efficient, tidy, and very professional! We will be calling again for future projects."
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Bailey MH</p>
                    </div>

                    {/* Review 9 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "We have used them several times and always have a good experience! Easy to get a hold of, on time, you get exactly what you ask for and they are fair priced! Will always be my first call for ANYTHING exterior home improvement."
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Sam Lawler</p>
                    </div>

                    {/* Review 10 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "5 stars all the way! Professional, reliable, knowledgable, quality work. They also have handled my snow removal for the past 4 years, and I appreciate waking up for work after it snows all night to see that Frank and his team have already been there."
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Abbie Pro</p>
                    </div>

                    {/* Review 11 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "I am so happy we chose All In One Home Improvement for the job of building our deck. This company is very professional, great quality of work and takes pride in every aspect of work that is performed. All the plans and expenses were reviewed in detail."
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Linda Brien</p>
                    </div>

                    {/* Review 12 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "Tore out and replaced our retaining wall and installed a cement patio. Did an excellent job."
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Mike Butler</p>
                    </div>

                    {/* Review 13 */}
                    <div className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-safety-orange/50 transition-colors">
                        <div className="flex text-safety-orange mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            "Purchased firewood from Frank. The wood that was delivered was perfect! Highly recommend doing business with him! He really stands behind his word. Possibly one of the last honest and reliable guys out there!!!"
                        </p>
                        <p className="text-white font-bold text-sm tracking-wide">- Living Waterz</p>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-foreground/40 text-xs font-medium tracking-widest uppercase">
                        Rated 5 Stars on Google
                    </p>
                </div>
            </div>
        </section>
    );
}
