import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const QUESTIONS = [
    {
        q: "What is StreamX?",
        a: "StreamX is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
    },
    {
        q: "How much does StreamX cost?",
        a: "Watch StreamX on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts."
    },
    {
        q: "Where can I watch?",
        a: "Watch anywhere, anytime. Sign in with your StreamX account to watch instantly on the web at streamx.com from your personal computer or on any internet-connected device that offers the StreamX app."
    },
    {
        q: "How do I cancel?",
        a: "StreamX is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-black py-20 border-t border-gray-800">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-12">Frequently Asked Questions</h2>

                <div className="space-y-2">
                    {QUESTIONS.map((item, index) => (
                        <div key={index} className="bg-neutral">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex justify-between items-center bg-gray-900 hover:bg-gray-800 transition-colors"
                            >
                                <span className="text-xl md:text-2xl font-medium">{item.q}</span>
                                {openIndex === index ? <X className="w-8 h-8" /> : <Plus className="w-8 h-8" />}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 text-xl md:text-2xl border-t border-black bg-gray-900">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-lg mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
                        <input type="email" placeholder="Email address" className="input input-lg bg-black/50 border border-gray-500 rounded-md w-full" />
                        <button className="btn btn-lg btn-primary rounded-md text-xl px-12 font-bold text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
