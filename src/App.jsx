import "./App.css";
import logo from "/playstationstore.webp";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt=""
          className="logo"
        />
        <Navbar />
      </header>
      <Banner />
    </>
  );
}

export default App;
