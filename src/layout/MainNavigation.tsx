export default function MainNavigation() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navigation = ['Home', 'About', 'Projects', 'Contact'];

    return (
        <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3">
                <ul className="flex gap-6 items-center">
                    {navigation.map((item) => (
                        <li
                            key={item}
                            className="border-l border-white/20 first:border-none pl-6 first:pl-0"
                        >
                            <button
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200 text-sm font-medium"
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}