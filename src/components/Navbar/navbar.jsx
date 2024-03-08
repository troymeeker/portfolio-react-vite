import styles from './Navbar.module.css'
// import { useState } from 'react';
import { getImageUrl } from "../../utils";


function Navbar() {

  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
            <a className={styles.title} href="/" >Portfolio</a>
            {/* <div className={styles.menuBtn}></div> */}
      <div className={styles.menu}>
       <img className={styles.menuBtn} src={getImageUrl("nav/menuIcon.png")} alt="menu-button"/>

        <ul className={styles.menuItems}>
          <li>
            <a className="nav-item" href="#about">About</a>
          </li>
          <li>
            <a className="nav-item" href="#exp">Experience</a>
          </li>
          <li>
            <a className="nav-item" href="#projects">Projects</a>
          </li>
          <li>
            <a className="nav-item" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
