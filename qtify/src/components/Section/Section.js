import { useState } from "react";
import Card from "../Card/Card";
import styles from "./section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import GenreTabs from "../GenreTabs/GenreTabs";
const Section = ({
  title,
  data,
  type,
  showTabs,
  selectedGenre,
  setSelectedGenre,
  genres,
}) => {
  const [showAll, setShowAll] = useState(false);

  const handleCollapseToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type !== "songs" ? (
          <h4 className={styles.toggleText} onClick={handleCollapseToggle}>
            {showAll ? "Collapse" : "Show All"}
          </h4>
        ) : null}
      </div>
      {showTabs && (
        <GenreTabs
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      )}
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {showAll ? (
            <div className={styles.wrapper}>
              {data.map((card) => (
                <Card data={card} key={card.id} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderCardComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
