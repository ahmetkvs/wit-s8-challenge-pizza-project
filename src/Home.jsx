import "./styles/Home.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/order");
  }

  return (
    <div className="hero">
      <main>
        <img
          src="./images/iteration-1-images/logo.svg"
          alt=""
          className="hero-logo"
        />
        <h1 className="hero-slogan">
          <span>KOD ACIKTIRIR</span>
          <span>PİZZA, DOYURUR</span>
        </h1>
        <button onClick={handleClick}>ACIKTIM</button>
      </main>
    </div>
  );
};

export default Home;
