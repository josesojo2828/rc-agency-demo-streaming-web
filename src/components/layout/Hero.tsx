import { Play, Info } from "lucide-react";

export function Hero() {
    return (
        <div className="relative h-[80vh] w-full bg-black overflow-hidden">
            {/* Background Image / Video Mock */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
                    alt="Hero Banner"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-base-100/80 via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-4 md:px-12 relative z-10 h-full flex flex-col justify-center pt-20">
                <div className="max-w-xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
                    {/* Series Logo / Title */}
                    <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-white overflow-visible drop-shadow-2xl">
                        CYBER<br /><span className="text-primary">FUTURE</span>
                    </h1>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 mb-6 text-sm font-bold text-gray-300">
                        <span className="text-green-400">98% Match</span>
                        <span className="border border-gray-500 px-1 text-xs">2024</span>
                        <span className="border border-gray-500 px-1 text-xs">16+</span>
                        <span>2h 15m</span>
                        <span className="border border-gray-500 px-1 text-xs">HD</span>
                    </div>

                    <p className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow-md leading-relaxed">
                        In a dystopian future where technology rules, one rebel hacker uncovers a conspiracy that threatens the very fabric of reality.
                    </p>

                    <div className="flex gap-4">
                        <button className="btn btn-lg bg-white text-black hover:bg-white/80 border-0 rounded-md font-bold px-8 gap-2">
                            <Play className="fill-current w-6 h-6" /> Play
                        </button>
                        <button className="btn btn-lg bg-gray-500/40 text-white hover:bg-gray-500/30 border-0 rounded-md font-bold px-8 gap-2 backdrop-blur-sm">
                            <Info className="w-6 h-6" /> More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
