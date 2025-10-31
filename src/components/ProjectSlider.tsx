import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useRef } from 'react'

interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
}

interface ProjectSliderProps {
    projects: Project[]
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
    const swiperRef = useRef<any>(null)

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
                <div className="flex gap-2">
                    <button 
                        onClick={() => swiperRef.current?.swiper?.slidePrev()}
                        className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <FaChevronLeft className="w-3 h-3 text-gray-400" />
                    </button>
                    <button 
                        onClick={() => swiperRef.current?.swiper?.slideNext()}
                        className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <FaChevronRight className="w-3 h-3 text-gray-400" />
                    </button>
                </div>
            </div>

            <div className="project-slider">
                <Swiper
                    ref={swiperRef}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    speed={400}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet custom-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="project-swiper"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="bg-white/3 border rounded-xl border-white/8 overflow-hidden hover:bg-white/5 transition-all duration-300 h-[480px] flex flex-col">
                                {/* Project Image */}
                                <div className="h-48 bg-white/4 flex items-center justify-center text-6xl shrink-0">
                                    {project.image}
                                </div>
                                
                                {/* Project Content */}
                                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                                    <h4 className="text-xl font-semibold text-white">
                                        {project.title}
                                    </h4>
                                    
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span 
                                                key={index}
                                                className="px-2 py-1 bg-white/6 text-gray-200 rounded text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* Project Links */}
                                    <div className="flex gap-4 pt-2">
                                        <a 
                                            href={project.liveUrl}
                                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                                        >
                                            <FaExternalLinkAlt className="w-3 h-3" />
                                            Live Demo
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                                        >
                                            <FaGithub className="w-3 h-3" />
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}