export default function Checkout({ checkoutSum, choosenExtras, extraPrice }) {
  return (
    <div className="pizzaForm-checkout">
      <div className="pizzaForm-checkoutTexts">
        <h3>Sipariş Toplamı</h3>
        <span>
          <p className="pizzaCheckout-extras">Seçimler</p>
          <p>{choosenExtras.length * extraPrice}</p>
        </span>
        <span className="red-text">
          <p className="pizzaCheckout-extras">Toplam</p>
          <p>{checkoutSum}</p>
        </span>
      </div>
      <button>SİPARİŞ VER</button>
    </div>
  );
}
