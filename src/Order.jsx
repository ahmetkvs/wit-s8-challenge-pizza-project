import "./styles/Order.css";
import PizzaFooter from "./components/PizzaFooter";

export default function Order() {
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
                <input type="radio" name="pizza-boyut-s" id="pizza-boyut-s" />
                <label htmlFor="pizza-boyut-s">Küçük</label>
              </span>
              <span>
                <input type="radio" name="pizza-boyut-m" id="pizza-boyut-m" />
                <label htmlFor="pizza-boyut-m">Orta</label>
              </span>
              <span>
                <input type="radio" name="pizza-boyut-l" id="pizza-boyut-l" />
                <label htmlFor="pizza-boyut-l">Büyük</label>
              </span>
            </div>
            <div className="pizzaForm-hamur">
              <label htmlFor="pizza-hamur">Hamur Seç:</label>

              <select name="pizza-hamur" id="pizza-hamur">
                <option value="ince">İnce Hamur</option>
                <option value="standart">Standart Hamur</option>
                <option value="kalin">Kalin Hamur</option>
              </select>
            </div>
          </div>
          <div className="pizzaForm-name">
            <label htmlFor="costumer-name">İsim - Soyad:</label>
            <input type="text" id="costumer-name" />
          </div>
          <div className="pizzaForm-extras">
            <p id="checkbox-array-label">Ek Malzemeler</p>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>

            <div className="checkbox-array">
              {[
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
              ].map((topping, index) => (
                <label key={index} className="checkbox-array-item">
                  <input type="checkbox" name="toppings" value={topping} />
                  {topping}
                </label>
              ))}
            </div>
          </div>
          <div className="pizzaForm-not"></div>
          <div className="pizzaForm-checkout-container">
            <div className="pizzaForm-pizzaCounter"></div>
            <div className="pizzaForm-checkout"></div>
          </div>
        </form>
      </main>
    </>
  );
}
