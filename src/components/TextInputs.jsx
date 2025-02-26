export default function TextInputs({ userName, handleChange, userNote }) {
  return (
    <div className="pizzaForm-textInputs">
      <div className="pizzaForm-name">
        <label htmlFor="costumer-name">İsim - Soyad:</label>
        <input
          name="userName"
          type="text"
          id="costumer-name"
          value={userName}
          onChange={handleChange}
        />
      </div>
      <div className="pizzaForm-not">
        <label htmlFor="costumer-name">Siparis Notu</label>
        <p>Siparişine eklemek istediğin bir not var mı?</p>
        <textarea
          id="costumer-note"
          name="userNote"
          rows="5"
          cols="33"
          value={userNote}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
