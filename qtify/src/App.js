import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./app.module.css";
import Carousel from "./components/Carousel/Carousel";
function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

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

  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section title="Top Albums" data={topAlbums} />
        <Section title="New Albums" data={newAlbums} />
      </div>
    </div>
  );
}

export default App;
