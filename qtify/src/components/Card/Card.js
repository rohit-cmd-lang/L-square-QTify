import React from "react";
import { Chip } from "@mui/material";

import styles from "./Card.module.css";
const Card = ({ data }) => {
  const { image, follows, title } = data;
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={image} alt="album" />
        <div className={styles.banner}>
          <Chip
            label={`${follows} follows`}
            size="small"
            className={styles.chip}
          />
        </div>
      </div>
      <div className={styles.wrapperTitle}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
