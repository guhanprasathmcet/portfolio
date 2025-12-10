import React from 'react'
import styles from './ProjectSection.module.css';

const ProjectSection = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsContent}>
        
        {/* Project 1 */}
        <div className={styles.projectItem}>
          <h3 className={styles.projectTitle}>Marketing Landing Pages and Interactive Banners</h3>
          <ul className={styles.projectDetails}>
            <li>• Developed and maintained 30–50 marketing landing pages, delivering updates based on business requirements. Managed 20 versions of interactive banners to guide customers into the loan origination flow, driving lead generation and enhancing overall user engagement.</li>
            <li>• Implemented dynamic Loan Officer pages with unique URLs for each officer using Next.js. Developed a Loan Officer API to fetch officer details and customer reviews, allowing users to interact with and select the most suitable loan officers.</li>
            <li>• Developed a Next.js server-side rendered Home Snapshot page to display property details across U.S. locations based on user location. Integrated dynamic loan price graphs to visualize home price trends and updates, enhancing user experience and decision-making.</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className={styles.projectItem}>
          <h3 className={styles.projectTitle}>Multipage Lead Form with Self-Enquiry Flow</h3>
          <ul className={styles.projectDetails}>
            <li>• Developed responsive landing pages integrated with a multi-step lead form to capture user information and automatically direct users into the self-enquiry loan origination flow. Successfully generated over 50,000 leads, improving lead conversion, and streamlining the loan application process.</li>
            <li>• Implemented a dedicated Red-Zone API within the multi-step lead form to save user input in real-time. Ensured partially completed leads were captured if users abandoned the form, enabling future engagement and improving overall customer experience.</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className={styles.projectItem}>
          <h3 className={styles.projectTitle}>Rocket-Mr. Cooper Merge Migration</h3>
          <ul className={styles.projectDetails}>
            <li>• Migrated all Mr. Cooper web pages to the Rocket platform after the company merger. Developed an endpoint to redirect Mr. Cooper customers to Rocket pages for lead generation while capturing leads in both databases simultaneously, ensuring seamless data continuity and a consistent customer experience.</li>
            <li>• Implemented the Rocket Rates Page to fetch updated rates from an endpoint every 30 minutes using a cron job. Ensured users always see the latest rates, enhancing accuracy, and delivering a seamless customer experience.</li>
          </ul>
        </div>

        {/* Project 4 */}
        <div className={styles.projectItem}>
          <h3 className={styles.projectTitle}>Internal Projects for Mr. Cooper</h3>
          <ul className={styles.projectDetails}>
            <li>• <strong>Inventory Management System</strong> - Built a full-stack Inventory Management System using React.js and Next.js for the frontend, with Node.js/Express.js and MongoDB for backend CRUD operations. Implemented user authentication, real-time updates, and deployed the application using Azure DevOps for continuous integration and deployment.</li>
            <li>• <strong>Ideas Portal</strong> - Developed an Ideas Portal using React.js, allowing employees to submit suggestions for improving company processes, products, and services, enhancing collaboration and innovation.</li>
            <li>• <strong>Entry Management System</strong> - Developed an Entry Management System using Node.js for the backend and React.js with Redux for frontend state management to track entries of non-employees, ensuring secure and efficient access management.</li>
            <li>• <strong>BCP Portal</strong> - Developed a Business Continuity Plan (BCP) Portal using the MERN stack to create and manage policies for the BCP team. Integrated Azure Microsoft Entra ID (AD groups) to assign admin access dynamically on the portal based on group membership, ensuring secure and role-based access control.</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default ProjectSection;
