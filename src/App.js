import First from "./First";
import './CSS/App.css'
import Second from "./Second";
import yellowpot from './imgs/yellowpot.jpg'
import redpot from './imgs/redpot.jpg'
import bluepot from './imgs/bluepot.jpg'
import Drawer from "./Drawer";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Our Store</h1>
      <First />
      <h2>FEATURED COLLECTIONS</h2>
      <Second img1={yellowpot} img2={redpot} img3={bluepot} name1={"Yellow Pot"} name2={"Red Pot"} name3={"Blue Pot"}

        price1={"$100"} price2={"$150"} price3={"$90"} />
      <Drawer />
    </div>
  );
}

export default App;
