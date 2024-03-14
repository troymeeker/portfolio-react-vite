
import Contact from "./Contact";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.content}>
      
      <div className={styles.heroCopy}>
        <h2 className={styles.heroSection}>Troy Meeker Smoke</h2>
        <p className={styles.heroSection}>
          I strive for continuous improvement and finding solutions
          everyday. I have 5+ years in high level customer service and
          sales in the outdoor industry where I grew through teamwork, time
          management, and communication. When I&apos;m not
          coding, I can be found me trail running, or adventuring around the PNW
          with my wife and dog.
        </p>
         
        <Contact  className={styles.heroSection}/>
    
        </div> 
      <div >
        <img alt="Photo of me!" className={styles.heroPhoto} src="https://media.licdn.com/dms/image/D5603AQGxqtxJVHQJhg/profile-displayphoto-shrink_800_800/0/1664768014494?e=1715817600&v=beta&t=0FcI7-gMtqgrGaDDqHMt6T6tuNoPrHSENynFwaJzqiU"/>
      </div>

    </div>
  );
}

export default Hero;
