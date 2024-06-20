import React from "react";
import qtifylogo from "../../assets/qtifylogo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={qtifylogo} alt="qtify logo" width={67} />
    </div>
  );
};

export default Logo;
