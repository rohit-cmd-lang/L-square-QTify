import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./app.module.css";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);
  const [selectedGenreIdx, setSelectedGenreIdx] = useState(0);

  const generateTopAlbums = async () => {
    let url = "https://qtify-backend-labs.crio.do/albums/top";
    try {
      const response = await axios.get(url);
      const albums = response.data;
      setTopAlbums(albums);
    } catch (error) {
      console.log(error);
    }
  };
  const generateNewAlbums = async () => {
    let url = "https://qtify-backend-labs.crio.do/albums/new";
    try {
      const response = await axios.get(url);
      const albums = response.data;
      setNewAlbums(albums);
    } catch (error) {
      console.log(error);
    }
  };

  const generateSongs = async () => {
    let url = "https://qtify-backend-labs.crio.do/songs";
    try {
      const response = await axios.get(url);
      const songsData = response.data;
      setSongs(songsData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGenres = async () => {
    let url = "https://qtify-backend-labs.crio.do/genres";
    try {
      const response = await axios.get(url);
      const data = response.data.data;
      setGenres([{ key: "all", label: "All" }, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
    generateSongs();
    fetchGenres();
  }, []);

  const filiteredSongs =
    selectedGenreIdx === 0
      ? songs
      : songs.filter((song) => song.genre.key === genres[selectedGenreIdx].key);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section title="Top Albums" data={topAlbums} type="albums" />
        <Section title="New Albums" data={newAlbums} type="albums" />
        <Section
          title="Songs"
          data={filiteredSongs}
          type="songs"
          genres={genres}
          selectedGenre={selectedGenreIdx}
          setSelectedGenre={setSelectedGenreIdx}
          showTabs={true}
        />
      </div>
    </div>
  );
}

export default App;
