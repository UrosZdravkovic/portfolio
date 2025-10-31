import heroImage from '../assets/heroImage.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                                <h1 className="text-4xl lg:text-6xl font-bold text-white">
                                    Hi, I'm <span className="text-blue-400">Uroš</span>
                                </h1>
                                <h2 className="text-xl lg:text-2xl text-gray-300 font-light">
                                    Full-Stack Developer & UI/UX Designer
                                </h2>
                            </div>
                        
                        <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                            I create beautiful, functional, and user-centered digital experiences. 
                            Passionate about clean code, modern design, and solving complex problems.
                        </p>
                        
                        <div className="flex gap-4">
                            <a href="#projects" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm font-medium">
                                View Projects
                            </a>
                            <a href="#contact" className="inline-block border border-white/15 text-white px-6 py-2 rounded-lg hover:bg-white/6 transition-colors duration-200 text-sm font-medium">
                                Contact Me
                            </a>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex gap-6 pt-4">
                            <a 
                                href="https://www.linkedin.com/in/uro%C5%A1-zdravkovi%C4%87" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://github.com/UrosZdravkovic" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    
                    {/* Image/Avatar */}
                    <div className="flex justify-center lg:justify-center">
                            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-white/3 border border-white/8 flex items-center justify-center">
                                <img 
                                    src={heroImage} 
                                    alt="Uroš Zdravković" 
                                    className="w-full h-full object-cover rounded-full"
                                />

                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}