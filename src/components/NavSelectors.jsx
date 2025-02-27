import "../styles/NavSelectors.css";

const selectors = [
  "Yeni! Bowl",
  "Pizza",
  "Burger",
  "Kızartmalar",
  "Fast Food",
  "Gazlı İçecek",
];

export default function NavSelectors() {
  return (
    <div className="navSelectors">
      {selectors.map((item, index) => (
        <div key={index} className="navSelector">
          <button>
            <img
              key={index}
              src={`./images/iteration-2-images/icons/${index + 1}.svg`}
              alt=""
            />
            <p key={index}>{item}</p>
          </button>
        </div>
      ))}
    </div>
  );
}
