import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./app.module.css";
function App() {
  const [topAlbums, setTopAlbums] = useState([]);

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

  useEffect(() => {
    generateTopAlbums();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section title="Top Albums" data={topAlbums} />
      </div>
    </div>
  );
}

export default App;
