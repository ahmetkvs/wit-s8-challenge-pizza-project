export default function Order() {
  return (
    <>
      <header>
        <img src="" alt="logo" />
        <nav>ANASAYFA SECENEKLER SIPARIS OLUSTUR</nav>
      </header>
      <main className="order-content">
        <section className="pizza-section">
          <h3 className="pizza-heading"></h3>
          <span>
            <p className="pizza-fiyat">85TL</p>
            <span>
              <p className="pizza-score">4.9</p>
              <p className="pizza-ratingCount">(200)</p>
            </span>
          </span>
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
