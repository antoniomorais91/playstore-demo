import "./App.css";
import logo from "/playstationstore.webp";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Main from "./components/Main";

function App() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="" className="logo" />
        <Navbar />
      </header>
      <Banner />
      <Main />
    </>
  );
}

export default App;
