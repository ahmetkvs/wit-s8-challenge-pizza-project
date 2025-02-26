import { useState } from "react";
import "./styles/Order.css";
import PizzaFooter from "./components/PizzaFooter";
import Checkout from "./components/Checkout";
import extraIngrediants from "./data/extraIngrediants";
import PizzaCounter from "./components/PizzaCounter";

const initialForm = {
  pizzaSize: "",
  pizzaDoughThickness: "",
  choosenExtras: [],
  userName: "",
  userNote: "",
  pizzaCounter: 1,
};

export default function Order() {
  const [form, setForm] = useState(initialForm);
  console.log(form);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prevForm) => {
      if (type === "checkbox") {
        return {
          ...prevForm,
          choosenExtras: checked
            ? [...prevForm.choosenExtras, value]
            : prevForm.choosenExtras.filter((extra) => extra !== value),
        };
      } else if (type === "number") {
        return { ...prevForm, [name]: Number(value) };
      } else {
        return { ...prevForm, [name]: value };
      }
    });
  };

  const increaseCounter = () => {
    setForm((prevForm) => ({
      ...prevForm,
      pizzaCounter: prevForm.pizzaCounter + 1,
    }));
  };

  const decreaseCounter = () => {
    setForm((prevForm) => ({
      ...prevForm,
      pizzaCounter: Math.max(1, prevForm.pizzaCounter - 1),
    }));
  };

  return (
    <>
      <header>
        <div className="header-content">
          <img src="./images/iteration-1-images/logo.svg" alt="logo" />
          <nav id="order-nav">
            <a href="#">Ana Sayfa</a>
            <p>-</p>
            <a
              href="#"
              style={{
                fontWeight: "bold", //Aktif olan için
              }}
            >
              Sipariş Oluştur
            </a>
          </nav>
        </div>
      </header>
      <main className="order-content">
        <section className="pizza-section">
          <PizzaFooter></PizzaFooter>
          <p className="pizza-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar posuere ipsum id tincidunt. Suspendisse dignissim posuere
            metus, ac pulvinar lectus dictum id. Praesent semper finibus tellus,
            eu pellentesque lectus mollis quis. Pellentesque molestie, nibh
            faucibus ornare gravida, sapien nunc vehicula velit, id elementum
            mauris ipsum a dolor. Integer risus nunc, vestibulum eget venenatis
            vitae, consequat et eros. Maecenas vulputate velit dolor, eu
            scelerisque nisi sagittis et.{" "}
          </p>
        </section>
        <form>
          <div className="pizzaForm-init-container">
            <div className="pizzaForm-boyut">
              <p>Boyut Seç:</p>
              <span>
                <input
                  onChange={handleChange}
                  checked={form.pizzaSize === "s"}
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
                  checked={form.pizzaSize === "m"}
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
                  checked={form.pizzaSize === "l"}
                  type="radio"
                  name="pizzaSize"
                  id="pizza-boyut-l"
                  value="l"
                />
                <label htmlFor="pizza-boyut-l">Büyük</label>
              </span>
            </div>
            <div className="pizzaForm-hamur">
              <label htmlFor="pizza-hamur">Hamur Seç:</label>

              <select
                onChange={handleChange}
                name="pizzaDoughThickness"
                id="pizza-hamur"
                value={form.pizzaDoughThickness}
              >
                <option value="ince">İnce Hamur</option>
                <option value="standart">Standart Hamur</option>
                <option value="kalin">Kalin Hamur</option>
              </select>
            </div>
          </div>
          <div className="pizzaForm-extras">
            <p id="checkbox-array-label">Ek Malzemeler</p>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>

            <div className="checkbox-array">
              {extraIngrediants.map((topping, index) => (
                <label key={index} className="checkbox-array-item">
                  <input
                    type="checkbox"
                    name="choosenExtras"
                    value={topping}
                    onChange={handleChange}
                    checked={form.choosenExtras.includes(topping)}
                  />
                  {topping}
                </label>
              ))}
            </div>
          </div>
          <div className="pizzaForm-textInputs">
            <div className="pizzaForm-name">
              <label htmlFor="costumer-name">İsim - Soyad:</label>
              <input
                name="userName"
                type="text"
                id="costumer-name"
                value={form.userName}
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
                value={form.userNote}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="pizzaForm-checkout-container">
            <PizzaCounter
              increaseCounter={increaseCounter}
              decreaseCounter={decreaseCounter}
              pizzaCounter={form.pizzaCounter}
            />
            <Checkout />
          </div>
        </form>
        <footer></footer>
      </main>
    </>
  );
}
