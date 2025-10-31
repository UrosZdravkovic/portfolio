import { 
    SiReact, 
    SiJavascript, 
    SiTypescript, 
    SiCss3, 
    SiTailwindcss, 
    SiFirebase, 
    SiSupabase 
} from 'react-icons/si'
import ProjectSlider from './ProjectSlider'

export default function AboutProjects() {
    const projects = [
        {
            id: 1,
            title: "Personal Portfolio",
            description: "A lightweight portfolio website to showcase projects and walk-throughs. Built with React, TypeScript and Tailwind.",
            image: "💼",
            technologies: ["React", "TypeScript", "Tailwind"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 2,
            title: "Todo App",
            description: "A small task manager with local persistence and simple sync logic — a solo learning project focused on UX and state management.",
            image: "📝",
            technologies: ["React", "LocalStorage"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 3,
            title: "Weather App",
            description: "Clean weather application with location-based forecasts and responsive design for learning API integration.",
            image: "🌤️",
            technologies: ["JavaScript", "CSS", "API"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ]

    return (
        <section id="about" className="py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* About Me - Left Side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white">
                                About Me
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                I'm a developer focused on learning and building practical projects. I enjoy clean code, simple interfaces and iterating on ideas.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-400 leading-relaxed">
                                I'm passionate about creating web applications that solve real problems. 
                                My focus is on writing clean, maintainable code and building user-friendly interfaces.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                When I'm not coding, I'm exploring new technologies, reading about 
                                design patterns, or working on personal projects that challenge my skills.
                            </p>
                        </div>

                        {/* Skills Grid */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">Skills & Technologies</h3>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="flex flex-col items-center gap-2 p-3 bg-white/3 border border-white/8 rounded-lg hover:bg-white/5 transition-colors">
                                    <SiReact className="w-6 h-6 text-blue-400" />
                                    <span className="text-gray-300 text-xs font-medium">React</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 bg-white/3 border border-white/8 rounded-lg hover:bg-white/5 transition-colors">
                                    <SiJavascript className="w-6 h-6 text-yellow-400" />
                                    <span className="text-gray-300 text-xs font-medium">JS</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 bg-white/3 border border-white/8 rounded-lg hover:bg-white/5 transition-colors">
                                    <SiTypescript className="w-6 h-6 text-blue-500" />
                                    <span className="text-gray-300 text-xs font-medium">TS</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 bg-white/3 border border-white/8 rounded-lg hover:bg-white/5 transition-colors">
                                    <SiCss3 className="w-6 h-6 text-blue-600" />
                                    <span className="text-gray-300 text-xs font-medium">CSS</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 bg-white/3 border border-white/8 rounded-lg hover:bg-white/5 transition-colors">
                                    <SiTailwindcss className="w-6 h-6 text-cyan-400" />
                                    <span className="text-gray-300 text-xs font-medium">Tailwind</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 bg-white/3 border border-white/8 rounded-lg hover:bg-white/5 transition-colors">
                                    <SiFirebase className="w-6 h-6 text-orange-400" />
                                    <span className="text-gray-300 text-xs font-medium">Firebase</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 bg-white/3 border border-white/8 rounded-lg hover:bg-white/5 transition-colors">
                                    <SiSupabase className="w-6 h-6 text-green-400" />
                                    <span className="text-gray-300 text-xs font-medium">Supabase</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projects Slider - Right Side */}
                    <div>
                        <ProjectSlider projects={projects} />
                    </div>
                </div>
            </div>
        </section>
    )
}