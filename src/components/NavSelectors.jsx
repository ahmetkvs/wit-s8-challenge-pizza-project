import "../styles/NavSelectors.css";

const selectors = [
  "Yeni! Bowl",
  "Pizza",
  "Burger",
  "Kızartmalar",
  "Fast Food",
  "Gazlı İçecek",
];
const getRandomKey = () => Math.random().toString(36).substr(2, 9);

export default function NavSelectors({ handleSelector, activeSelector }) {
  return (
    <div className="navSelectors">
      {selectors.map((item, index) => (
        <div key={getRandomKey()} className="navSelector">
          <button
            onClick={() => handleSelector(index)}
            className={index === activeSelector ? "active" : ""}
          >
            <img
              key={getRandomKey()}
              src={`./images/iteration-2-images/icons/${index + 1}.svg`}
              alt=""
            />
            <p key={getRandomKey()}>{item}</p>
          </button>
        </div>
      ))}
    </div>
  );
}
