import styles from './App.module.css'
import NavBar from './components/NavBar/NavBar';
import Hero from  './components/HeroSection/Hero';
import About from './components/AboutSection/About';
import Experience from './components/ExperienceSection/Experience';
import ProjectSection from './components/ProjectSection/ProjectSection';
import { Contact } from './components/Contact/Contact';

function App() { 
  return (
    <>
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <ProjectSection />
      <Contact />
    </div>
    </>
  )
}

export default App