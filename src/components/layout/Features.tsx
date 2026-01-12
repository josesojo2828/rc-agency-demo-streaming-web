import { Monitor, TabletSmartphone } from "lucide-react";

export function Features() {
    return (
        <section className="bg-black py-20 border-t border-gray-800">
            {/* Feature 1 */}
            <div className="container mx-auto px-4 md:px-12 mb-24">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Enjoy on your TV</h2>
                        <p className="text-xl md:text-2xl text-gray-300">
                            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                        </p>
                    </div>
                    <div className="flex-1 relative">
                        <Monitor className="w-full h-auto max-w-lg mx-auto text-gray-900" style={{ strokeWidth: 0.5 }} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1593784618753-389280d4682b?auto=format&fit=crop&q=80&w=400"
                                alt="TV Content"
                                className="w-[60%] h-[55%] object-cover mb-4"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature 2 */}
            <div className="container mx-auto px-4 md:px-12 mb-24">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Download your shows to watch offline</h2>
                        <p className="text-xl md:text-2xl text-gray-300">
                            Save your favorites easily and always have something to watch.
                        </p>
                    </div>
                    <div className="flex-1 relative">
                        <div className="relative max-w-lg mx-auto">
                            <img
                                src="https://images.unsplash.com/photo-1512428559087-560fa5ce7d25?auto=format&fit=crop&q=80&w=600"
                                alt="Mobile"
                                className="w-full h-auto rounded-xl"
                            />
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black border border-gray-700 p-4 rounded-xl flex items-center gap-4 w-[70%] shadow-2xl">
                                <div className="h-12 w-8 bg-gray-800 rounded-sm overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 text-left">
                                    <p className="font-bold text-sm">Stranger Things</p>
                                    <p className="text-xs text-blue-500">Downloading...</p>
                                </div>
                                <div className="loading loading-spinner text-blue-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Watch everywhere</h2>
                        <p className="text-xl md:text-2xl text-gray-300">
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        </p>
                    </div>
                    <div className="flex-1 text-center">
                        <TabletSmartphone className="w-64 h-64 mx-auto text-primary" />
                    </div>
                </div>
            </div>
        </section>
    );
}
