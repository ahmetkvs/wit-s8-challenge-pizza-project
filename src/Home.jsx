import "./styles/Home.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./components/Footer";

const selectors = [
  "Yeni! Bowl",
  "Pizza",
  "Burger",
  "Kızartmalar",
  "Fast Food",
  "Gazlı İçecek",
];

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
        <div className="navSelectors">
          {selectors.map((item, index) => (
            <div className="navSelector">
              <img
                src={`./images/iteration-2-images/icons/${index + 1}.svg`}
                alt=""
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="cards">
          <div className="cardsLeft">
            <div className="bigCard"></div>
          </div>
          <div className="cardsRight">
            <div className="smallCard"></div>
            <div className="smallCard"></div>
          </div>
        </div>
        <div className="menu">
          <div className="menuHeadings"></div>
          <div className="menuSelectors">
            <div className="menuSelector"></div>
            <div className="menuSelector"></div>
            <div className="menuSelector"></div>
            <div className="menuSelector"></div>
            <div className="menuSelector"></div>
            <div className="menuSelector"></div>
          </div>
          <div className="menuItems"></div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
