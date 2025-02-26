export default function PizzaBoyutSelector({
  pizzaDoughThickness,
  handleChange,
}) {
  return (
    <div className="pizzaForm-hamur">
      <label htmlFor="pizza-hamur">Hamur Seç:</label>

      <select
        onChange={handleChange}
        name="pizzaDoughThickness"
        id="pizza-hamur"
        value={pizzaDoughThickness}
      >
        <option value="ince">İnce Hamur</option>
        <option value="standart">Standart Hamur</option>
        <option value="kalin">Kalin Hamur</option>
      </select>
    </div>
  );
}
