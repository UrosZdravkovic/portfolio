import MainNavigation from "./layout/MainNavigation"
import Hero from "./components/Hero"
import AboutProjects from "./components/AboutProjects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <MainNavigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <AboutProjects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Uroš Zdravković. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
