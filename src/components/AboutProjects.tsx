import ProjectSlider from './ProjectSlider'
import SkillCard from './SkillCard'
import { skills } from '../data/skills'
import { projects } from '../data/projects'

export default function AboutProjects() {

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
                                {skills.map((skill, index) => (
                                    <SkillCard
                                        key={index}
                                        icon={skill.icon}
                                        name={skill.name}
                                        color={skill.color}
                                    />
                                ))}
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