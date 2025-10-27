export default function About() {
    return (
        <section id="about" className="py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        I'm a developer focused on learning and building practical projects. I enjoy clean code, simple interfaces and iterating on ideas.
                    </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">My Story</h3>
                            <p className="text-gray-400 leading-relaxed">
                                I'm a passionate full-stack developer with over 3 years of experience creating 
                                web applications. I love turning complex problems into simple, beautiful designs.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies, reading about 
                                design trends, or working on personal projects that challenge my skills.
                            </p>
                        </div>
                        
                        {/* Skills */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">Skills & Technologies</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium text-gray-300">Frontend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Tailwind</span>
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Next.js</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium text-gray-300">Backend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
                                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Express</span>
                                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">MongoDB</span>
                                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">PostgreSQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Stats/Experience */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/3 border border-white/8 rounded-xl p-6 text-center">
                                <div className="text-xl font-semibold text-white mb-2">Personal Projects</div>
                                <div className="text-gray-400 text-sm">A few small solo projects</div>
                            </div>
                            <div className="bg-white/3 border border-white/8 rounded-xl p-6 text-center">
                                <div className="text-xl font-semibold text-white mb-2">Learning</div>
                                <div className="text-gray-400 text-sm">Continuously improving skills</div>
                            </div>
                            <div className="bg-white/3 border border-white/8 rounded-xl p-6 text-center">
                                <div className="text-xl font-semibold text-white mb-2">Open Source</div>
                                <div className="text-gray-400 text-sm">Occasional small contributions</div>
                            </div>
                            <div className="bg-white/3 border border-white/8 rounded-xl p-6 text-center">
                                <div className="text-xl font-semibold text-white mb-2">Design</div>
                                <div className="text-gray-400 text-sm">Focus on clean, usable UIs</div>
                            </div>
                        </div>
                        
                        {/* Timeline */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">Learning & Projects</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="text-white font-medium">Personal Projects</h4>
                                        <p className="text-gray-400 text-sm">Small web apps and experiments focused on improving UI and code structure.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="text-white font-medium">Self-Study</h4>
                                        <p className="text-gray-400 text-sm">Studying modern frontend patterns, accessibility, and practical tooling.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}