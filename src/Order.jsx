import { useState } from "react";
import "./styles/Order.css";
import PizzaFooter from "./components/PizzaFooter";
import Checkout from "./components/Checkout";
import PizzaCounter from "./components/PizzaCounter";
import TextInputs from "./components/TextInputs";
import PizzaBoyutSelector from "./components/PizzaBoyutSelector";
import PizzaHamurSelector from "./components/PizzaHamurSelector";
import PizzaExtras from "./components/PizzaExtras";

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
            scelerisque nisi sagittis et.
          </p>
        </section>
        <form>
          <div className="pizzaForm-init-container">
            <PizzaBoyutSelector
              pizzaSize={form.pizzaSize}
              handleChange={handleChange}
            />
            <PizzaHamurSelector
              pizzaDoughThickness={form.pizzaDoughThickness}
              handleChange={handleChange}
            />
          </div>
          <PizzaExtras
            choosenExtras={form.choosenExtras}
            handleChange={handleChange}
          />
          <TextInputs
            userName={form.userName}
            userNote={form.userNote}
            handleChange={handleChange}
          />
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
