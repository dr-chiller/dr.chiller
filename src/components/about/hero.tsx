// About.jsx
export default function Hero() {
    return (
        <section className="dark:bg-gray-900 dark:text-gray-300 flex items-center justify-center px-6 py-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                
                {/* Left Text Section */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-6">
                        About Us
                    </h1>
                    <p className="text-lg leading-relaxed mb-6">
                        We are committed to delivering high-quality services that make a real 
                        difference. Our team thrives on creativity, innovation, and a deep 
                        understanding of the needs of our community. Through dedication and 
                        expertise, we aim to inspire, educate, and empower.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                        Our vision is to build a better tomorrow by providing tools and resources 
                        that help individuals and businesses reach their full potential.  
                        Together, we create meaningful change.
                    </p>
                </div>

                {/* Right Image Section */}
                <div className="flex justify-center">
                    <img 
                        src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80" 
                        alt="About Us" 
                        className="rounded-2xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </section>
    );
}
