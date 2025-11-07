export interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
}

export const projects: Project[] = [
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