export default function Footer() {
    return (
        <footer className="bg-charcoal text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-xl font-black tracking-tighter text-white mb-2">ALL IN ONE</h4>
                    <p className="text-xs text-gray-400 tracking-wide">HOME IMPROVEMENT SERVICES LLC</p>
                </div>

                <div className="flex flex-col items-center md:items-end text-sm font-medium text-gray-300 space-y-1">
                    <a href="tel:8155163716" className="hover:text-safety-orange transition-colors">(815) 516-3716</a>
                    <a href="mailto:allinonethebestone@gmail.com" className="hover:text-safety-orange transition-colors">allinonethebestone@gmail.com</a>
                </div>

                <div className="text-[10px] text-gray-500 font-medium tracking-widest text-center md:text-right">
                    <p>© {new Date().getFullYear()} ALL IN ONE HOME IMPROVEMENT</p>
                    <p className="mt-1">SERVING CALEDONIA, ROCKFORD & BEYOND</p>
                </div>
            </div>
        </footer>
    );
}
