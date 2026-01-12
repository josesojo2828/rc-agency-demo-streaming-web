import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface ContentItem {
    id: number;
    title: string;
    image: string;
    match: number;
}

export function ContentRow({ title, items }: { title: string, items: ContentItem[] }) {
    const rowRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (rowRef.current) {
            const { current } = rowRef;
            const scrollAmount = direction === 'left' ? -window.innerWidth / 2 : window.innerWidth / 2;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="mb-12 relative group px-4 md:px-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white hover:text-primary transition-colors cursor-pointer inline-flex items-end gap-2 group-hover/title:text-primary">
                {title} <span className="text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">Explore All</span>
            </h2>

            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-black/50 hover:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                    <ChevronLeft className="w-8 h-8 text-white" />
                </button>

                <div
                    ref={rowRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x"
                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex-none w-[160px] md:w-[240px] aspect-[2/3] relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10 cursor-pointer snap-start"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                <h3 className="font-bold text-sm mb-2 drop-shadow-md">{item.title}</h3>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-green-400 font-bold">{item.match}% Match</span>
                                    <button className="bg-white text-black rounded-full p-1.5 hover:scale-110 transition-transform">
                                        <Play className="w-3 h-3 fill-current" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-black/50 hover:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                    <ChevronRight className="w-8 h-8 text-white" />
                </button>
            </div>
        </div>
    );
}
