import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

 const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/mr-cooper-logo.svg")} alt="about-img" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText  }>
              <h3>Mr. Cooper | 2022 - Present</h3>
              <p>• Developed dynamic web pages and interactive banner UIs with React, Next.js, and JavaScript.</p>
              <p>• Implemented secure Node.js/Express backend APIs to capture and store leads effectively.</p>
              <p>• Introduced feature flag functionality using Google Cloud Storage for personalized user experiences.</p>
              <p>• Created comprehensive unit tests to enhance code coverage and verify functionality reliability.</p>
              <p>• Monitored and optimized code quality using SonarQube, adhering to clean coding standards.</p>
            </div>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default About;