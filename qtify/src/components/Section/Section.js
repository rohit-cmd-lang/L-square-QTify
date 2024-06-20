import { useState } from "react";
import Card from "../Card/Card";
import styles from "./section.module.css";
import { CircularProgress } from "@mui/material";

const Section = ({ title, data }) => {
  const [showAll, setShowAll] = useState(true);

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
      <div className={styles.cardWrapper}>
        <div className={styles.wrapper}>
          {data.map((card) => (
            <Card data={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
