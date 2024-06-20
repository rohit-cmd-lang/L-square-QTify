import React from "react";
import searchIcon from "../../assets/searchicon.png";
import styles from "./searchBar.module.css";
const SearchBar = () => {
  return (
    <form className={styles.wrapper}>
      <input
        className={styles.search}
        placeholder="Search a song of your choice"
      />
      <button className={styles.searchButton}>
        <img src={searchIcon} />
      </button>
    </form>
  );
};

export default SearchBar;
