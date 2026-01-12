export function Footer() {
    return (
        <footer className="bg-black py-20 border-t border-gray-800 text-gray-500 text-sm">
            <div className="container mx-auto px-4 md:px-12 max-w-5xl">
                <p className="mb-8 hover:underline cursor-pointer">Questions? Contact us.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {["FAQ", "Help Center", "Account", "Media Center", "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use", "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us", "Speed Test", "Legal Notices", "Only on StreamX"].map((link) => (
                        <a key={link} href="#" className="hover:underline">{link}</a>
                    ))}
                </div>

                <div className="dropdown dropdown-top mb-6">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-outline btn-neutral rounded-sm text-gray-400 gap-2">
                        English
                    </div>
                </div>

                <p>StreamX International</p>
            </div>
        </footer>
    );
}
