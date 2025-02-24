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
          <p className="pizza-description"></p>
        </section>
        <section className="form-section">
          <div className="pizzaForm-boyut-homur-container">
            <div className="pizzaForm-boyut"></div>
            <div className="pizzaForm-hamur"></div>
          </div>
          <div className="pizzaForm-extras"></div>
          <div className="pizzaForm-not"></div>
          <div className="pizzaForm-checkout-container">
            <div className="pizzaForm-pizzaCounter"></div>
            <div className="pizzaForm-checkout"></div>
          </div>
        </section>
      </main>
    </>
  );
}
