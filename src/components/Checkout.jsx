export default function Checkout() {
  return (
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
  );
}
