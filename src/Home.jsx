import "./styles/Home.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./components/Footer";
import NavSelectors from "./components/NavSelectors";
import Cards from "./components/Cards";

const Home = ({ setItemPrice }) => {
  let history = useHistory();

  function handleClick() {
    history.push("/order");
  }

  return (
    <>
      <div className="hero">
        <section>
          <img
            src="./images/iteration-1-images/logo.svg"
            alt=""
            className="hero-logo"
          />
          <p className="ital1">firsatı kaçırma</p>
          <h1 className="hero-slogan">
            <span>KOD ACIKTIRIR</span>
            <span>PİZZA, DOYURUR</span>
          </h1>
          <button onClick={handleClick} id="aciktim">
            ACIKTIM
          </button>
        </section>
      </div>
      <main>
        <NavSelectors />
        <Cards />
        <div className="menu">
          <div className="menuHeadings">
            <h2 className="ital2">en çok paketlenen menüler</h2>
            <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
          </div>
          <NavSelectors />
          <div className="menuItems"></div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
