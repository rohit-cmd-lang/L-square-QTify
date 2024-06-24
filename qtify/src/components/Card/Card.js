import React from "react";
import { Chip, Tooltip } from "@mui/material";

import styles from "./Card.module.css";
const Card = ({ data, type }) => {
  const { image, follows, title, likes } = data;
  return (
    <>
      {type === "albums" ? (
        <Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="album" />
              <div className={styles.banner}>
                {type === "albums" ? (
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className={styles.chip}
                  />
                ) : (
                  <Chip
                    label={`${likes} Likes`}
                    size="small"
                    className={styles.chip}
                  />
                )}
              </div>
            </div>
            <div className={styles.wrapperTitle}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} alt="album" />
            <div className={styles.banner}>
              {type === "albums" ? (
                <Chip
                  label={`${follows} Follows`}
                  size="small"
                  className={styles.chip}
                />
              ) : (
                <Chip
                  label={`${likes} Likes`}
                  size="small"
                  className={styles.chip}
                />
              )}
            </div>
          </div>
          <div className={styles.wrapperTitle}>
            <p>{title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
