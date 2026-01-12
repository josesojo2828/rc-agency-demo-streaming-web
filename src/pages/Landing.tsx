import { Hero } from "../components/layout/Hero";
import { ContentRow } from "../components/layout/ContentRow";
import { Features } from "../components/layout/Features";
import { FAQ } from "../components/layout/FAQ";

// Mock Data
const TRENDING = [
    { id: 1, title: "Stranger Things", match: 98, image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80" },
    { id: 2, title: "The Witcher", match: 95, image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80" },
    { id: 3, title: "Black Mirror", match: 92, image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { id: 4, title: "Dark", match: 99, image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&q=80" },
    { id: 5, title: "Cyberpunk", match: 94, image: "https://images.unsplash.com/photo-1531297461136-82lw9f22f7b8?w=400&q=80" },
    { id: 6, title: "Arcane", match: 97, image: "https://images.unsplash.com/photo-1512428559087-560fa5ce7d25?w=400&q=80" },
    { id: 7, title: "The Last of Us", match: 96, image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80" },
];

const NEW_RELEASES = [
    { id: 8, title: "Inception", match: 91, image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80" },
    { id: 9, title: "Interstellar", match: 98, image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=80" },
    { id: 10, title: "Dune", match: 93, image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&q=80" },
    { id: 11, title: "Blade Runner", match: 95, image: "https://images.unsplash.com/photo-1596727147705-54a7128052a9?w=400&q=80" },
    { id: 12, title: "Matrix", match: 99, image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" },
];

export function Landing() {
    return (
        <div className="bg-base-100 min-h-screen pb-20">
            <Hero />

            <div className="relative z-20 -mt-32 pl-0 md:pl-0 space-y-8">
                <ContentRow title="Trending Now" items={TRENDING} />
                <ContentRow title="New Releases" items={NEW_RELEASES} />
                <ContentRow title="Watch It Again" items={[...TRENDING].reverse()} />
            </div>

            <Features />
            <FAQ />
        </div>
    );
}
