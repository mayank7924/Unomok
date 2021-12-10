import * as React from "react";
import First from "./First";
import "./CSS/App.css";
import Second from "./Second";
import yellowpot from "./imgs/yellowpot.jpg";
import redpot from "./imgs/redpot.jpg";
import bluepot from "./imgs/bluepot.jpg";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import TemporaryDrawer from "./Drawer.jsx";

function App() {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <div className="App">
      <h1>Welcome to Our Store</h1>
      <First />
      <h2>FEATURED COLLECTIONS</h2>
      <Button onClick={toggleDrawer(true)}>
        <AddIcon fontSize="large" />
        <Drawer open={state} toggleDrawer={toggleDrawer} onClose={toggleDrawer(false)}>
          <TemporaryDrawer toggleDrawer={toggleDrawer} />
        </Drawer>
      </Button>
      <Second
        img1={yellowpot}
        img2={redpot}
        img3={bluepot}
        name1={"Yellow Pot"}
        name2={"Red Pot"}
        name3={"Blue Pot"}
      />
    </div>
  );
}

export default App;
