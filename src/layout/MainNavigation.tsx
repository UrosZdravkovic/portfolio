export default function MainNavigation() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3">
                <ul className="flex gap-6 items-center">
                    <li>
                        <button 
                            onClick={() => scrollToSection('hero')}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('about')}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('projects')}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium border-l border-white/20 pl-6"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}