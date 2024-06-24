import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function GenreTabs({ genres, selectedGenre, setSelectedGenre }) {
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "8px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedGenre}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "var(--color-primary)",
            },
          }}
          textColor="var(--color-white)"
        >
          {genres.map((genre, index) => (
            <Tab
              sx={{ textTransform: "none" }}
              key={genre.key}
              label={genre.label}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
