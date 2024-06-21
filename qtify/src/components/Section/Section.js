import { useState } from "react";
import Card from "../Card/Card";
import styles from "./section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data }) => {
  const [showAll, setShowAll] = useState(false);

  const handleCollapseToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleCollapseToggle}>
          {showAll ? "Collapse" : "Show All"}
        </h4>
      </div>
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {showAll ? (
            <div className={styles.wrapper}>
              {data.map((card) => (
                <Card data={card} key={card.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderCardComponent={(data) => <Card data={data} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
