import React , {useState} from 'react'
import styles from './NavBar.module.css';
import {getImageUrl} from '../../utils.js';
const NavBar = () => {
    const[menuOpen,setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            <img 
            className={styles.menuBtn} 
            src={menuOpen ?
                getImageUrl("nav/closeIcon.png") :
                getImageUrl("nav/menuIcon.png")
            } 
            onClick={()=> setMenuOpen(!menuOpen)}
            alt="menu-btn"/>
            <ul 
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setMenuOpen(!menuOpen)}
            >
                <li><a href="#about">Experience</a></li>
                <li><a href="#experience">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar;