import { useState, useEffect } from 'react';
import { Search, Bell, MonitorPlay } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 ease-in-out px-4 md:px-12 py-4 flex items-center justify-between ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
            <div className="flex items-center gap-8">
                <a href="#" className="text-3xl font-black text-primary tracking-tighter uppercase flex items-center gap-1">
                    <MonitorPlay className="w-8 h-8 fill-current" /> StreamX
                </a>
                <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
                    <li className="hover:text-white transition-colors cursor-pointer font-bold">Home</li>
                    <li className="hover:text-white transition-colors cursor-pointer">TV Shows</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Movies</li>
                    <li className="hover:text-white transition-colors cursor-pointer">New & Popular</li>
                    <li className="hover:text-white transition-colors cursor-pointer">My List</li>
                </ul>
            </div>

            <div className="flex items-center gap-6">
                <Search className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
                <Bell className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
                <div className="avatar placeholder cursor-pointer">
                    <div className="bg-neutral-focus text-neutral-content rounded-md w-8">
                        <span className="text-xs font-bold">U</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
