
import Contact from "./Contact";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className="main">
      <div className={styles.content}></div>
      <div className="main-left">
        <h2>Troy Meeker Smoke</h2>
        <p>
          I strive for continuous improvement and finding solutions
          everyday. I have 5+ years in high level customer service and
          sales in the outdoor industry where I grew through teamwork, time
          management, and communication. When I&apos;m not
          coding, I can be found me trail running, or adventuring around the PNW
          with my wife and dog.
        </p>
        
        <Contact />
      </div> 
      <div className="main-right">photo - right</div>

    </div>
  );
}

export default Hero;
