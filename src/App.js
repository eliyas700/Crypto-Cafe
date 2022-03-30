import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import CoinDetails from "./Components/CoinDetails/CoinDetails";
import Coins from "./Components/Coins/Coins";
import BdOffice from "./Components/Contact/BdOffice";
import Contact from "./Components/Contact/Contact";
import UsOffice from "./Components/Contact/UsOffice";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins />} />
        <Route
          path="/coin-details/:id"
          element={<CoinDetails></CoinDetails>}
        ></Route>
        <Route path="/contact" element={<Contact />}>
          <Route path="us-office" element={<UsOffice />}></Route>
          <Route path="bd-office" element={<BdOffice />}></Route>
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
