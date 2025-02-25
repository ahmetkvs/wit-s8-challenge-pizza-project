import { useState, useEffect } from "react";
import "./styles/Order.css";
import PizzaFooter from "./components/PizzaFooter";

const extraIngrediants = [
  "Sucuk",
  "Mantar",
  "Zeytin",
  "Biber",
  "Domates",
  "Soğan",
  "Jalapeño",
  "Mozzarella",
  "Ton Balığı",
  "Mısır",
  "Sosis",
  "Ananas",
  "Pastırma",
  "Kekik",
  "Peynir",
];

export default function Order() {
  const [pizzaSize, setPizzaSize] = useState("");
  const [pizzaDoughThickness, setPizzaDoughThickness] = useState("");
  const [choosenExtras, setChoosenExtras] = useState([]);

  return (
    <>
      <header>
        <div className="header-content">
          <img src="./images/iteration-1-images/logo.svg" alt="logo" />
          <nav>
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
      <p>{pizzaDoughThickness}</p>
      <p>{pizzaSize}</p>
      <p>{choosenExtras}</p>
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
                  onChange={(event) => setPizzaSize(event.target.value)}
                  checked={pizzaSize === "s"}
                  type="radio"
                  name="pizza-boyut"
                  id="pizza-boyut-s"
                  value="s"
                />
                <label htmlFor="pizza-boyut-s">Küçük</label>
              </span>
              <span>
                <input
                  onChange={(event) => setPizzaSize(event.target.value)}
                  checked={pizzaSize === "m"}
                  type="radio"
                  name="pizza-boyut"
                  id="pizza-boyut-m"
                  value="m"
                />
                <label htmlFor="pizza-boyut-m">Orta</label>
              </span>
              <span>
                <input
                  onChange={(event) => setPizzaSize(event.target.value)}
                  checked={pizzaSize === "l"}
                  type="radio"
                  name="pizza-boyut"
                  id="pizza-boyut-l"
                  value="l"
                />
                <label htmlFor="pizza-boyut-l">Büyük</label>
              </span>
            </div>
            <div className="pizzaForm-hamur">
              <label htmlFor="pizza-hamur">Hamur Seç:</label>

              <select
                onChange={(event) => setPizzaDoughThickness(event.target.value)}
                name="pizza-hamur"
                id="pizza-hamur"
                value={pizzaDoughThickness}
              >
                <option value="" disabled selected>
                  Hamur Kalınlığı
                </option>
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
                    name="toppings"
                    value={topping}
                    onChange={(event) =>
                      setChoosenExtras([...choosenExtras, event.target.value])
                    }
                  />
                  {topping}
                </label>
              ))}
            </div>
          </div>
          <div className="pizzaForm-textInputs">
            <div className="pizzaForm-name">
              <label htmlFor="costumer-name">İsim - Soyad:</label>
              <input type="text" id="costumer-name" />
            </div>
            <div className="pizzaForm-not">
              <label htmlFor="costumer-name">Siparis Notu</label>
              <p>Siparişine eklemek istediğin bir not var mı?</p>
              <textarea type="textarea" id="costumer-name" rows="5" cols="33" />
            </div>
          </div>
          <div className="pizzaForm-checkout-container">
            <div className="pizzaForm-pizzaCounter">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <div className="pizzaForm-checkout">
              <div className="pizzaForm-checkoutTexts">
                <h3>Sipariş Toplamı</h3>
                <span>
                  <p className="pizzaCheckout-extras">Seçimler</p>
                  <p>25</p>
                </span>
                <span className="red-text">
                  <p className="pizzaCheckout-extras">Seçimler</p>
                  <p>100</p>
                </span>
              </div>
              <button>SİPARİŞ VER</button>
            </div>
          </div>
        </form>
        <footer></footer>
      </main>
    </>
  );
}
