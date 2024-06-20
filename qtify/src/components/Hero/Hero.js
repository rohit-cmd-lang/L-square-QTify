import HeroImage from "../../assets/vibrating-headphone.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
          <img className={styles.heroImage} src={HeroImage} alt="headphone" />
        </div>
      </section>
    </>
  );
};

export default Hero;
