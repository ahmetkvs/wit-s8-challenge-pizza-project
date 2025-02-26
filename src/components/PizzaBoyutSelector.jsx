export default function PizzaBoyutSelector({ pizzaSize, handleChange }) {
  return (
    <div className="pizzaForm-boyut">
      <p>Boyut Seç:</p>
      <span>
        <input
          onChange={handleChange}
          checked={pizzaSize === "s"}
          type="radio"
          name="pizzaSize"
          id="pizza-boyut-s"
          value="s"
        />
        <label htmlFor="pizza-boyut-s">Küçük</label>
      </span>
      <span>
        <input
          onChange={handleChange}
          checked={pizzaSize === "m"}
          type="radio"
          name="pizzaSize"
          id="pizza-boyut-m"
          value="m"
        />
        <label htmlFor="pizza-boyut-m">Orta</label>
      </span>
      <span>
        <input
          onChange={handleChange}
          checked={pizzaSize === "l"}
          type="radio"
          name="pizzaSize"
          id="pizza-boyut-l"
          value="l"
        />
        <label htmlFor="pizza-boyut-l">Büyük</label>
      </span>
    </div>
  );
}
