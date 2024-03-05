import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
            <a href="/" className="">Portfolio</a>
      <div>
        <ul>
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
