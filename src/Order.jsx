import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
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

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "0.8rem",
};

const BASE_PRICE = 80; //Change this later
const EXTRA_PRICE = 5;

export default function Order() {
  const [form, setForm] = useState(initialForm);
  const [checkoutSum, setCheckoutSum] = useState(BASE_PRICE);
  console.log(form);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prevForm) => {
      let updatedExtras;

      if (type === "checkbox") {
        if (checked) {
          updatedExtras = [...prevForm.choosenExtras, value];
          setCheckoutSum((prevSum) => prevSum + 5);
        } else {
          updatedExtras = prevForm.choosenExtras.filter(
            (extra) => extra !== value,
          );
          setCheckoutSum((prevSum) => prevSum - 5);
        }

        return { ...prevForm, choosenExtras: updatedExtras };
      }

      if (type === "number") {
        return { ...prevForm, [name]: Number(value) };
      }

      return { ...prevForm, [name]: value };
    });
  };

  const increaseCounter = () => {
    setForm((prevForm) => {
      const newCount = prevForm.pizzaCounter + 1;
      setCheckoutSum(
        (prevSum) => prevSum + checkoutSum / prevForm.pizzaCounter,
      );
      return { ...prevForm, pizzaCounter: newCount };
    });
  };

  const decreaseCounter = () => {
    setForm((prevForm) => {
      if (prevForm.pizzaCounter > 1) {
        const newCount = prevForm.pizzaCounter - 1;
        setCheckoutSum(
          (prevSum) => prevSum - checkoutSum / prevForm.pizzaCounter,
        );
        return { ...prevForm, pizzaCounter: newCount };
      }
      return prevForm;
    });
  };

  return (
    <>
      <header>
        <div className="header-content">
          <img src="./images/iteration-1-images/logo.svg" alt="logo" />
          <nav id="order-nav">
            <Link to="/" style={linkStyle}>
              Ana Sayfa
            </Link>
            <p>-</p>
            <Link to="/order" style={{ ...linkStyle, fontWeight: "bold" }}>
              Sipariş Oluştur
            </Link>
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
            <Checkout
              checkoutSum={checkoutSum}
              choosenExtras={form.choosenExtras}
              extraPrice={EXTRA_PRICE}
            />
          </div>
        </form>
        <footer></footer>
      </main>
    </>
  );
}
