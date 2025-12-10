import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Guhan Prasath</h1>
            <p className={styles.description}>
              Full-stack developer specializing in MERN stack and Next.js with 3 years of experience building scalable web applications. Expert in React/Next.js frontend development and Node.js/Express/MongoDB backend architecture. Focused on performance optimization and delivering solutions that drive business goals.
            </p>
            <a href="mailto:guhanprasath923@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/guhan.jpg")} alt="hero-image" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero;