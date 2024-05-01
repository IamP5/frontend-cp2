CART_LIST = document.getElementById("cart-list");

loadCart();

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart"))
  const cartItems = cart.items.reduce(
    (acc, item) => {
      const found = acc.find((x) => x.id === item.id);
      if (found) {
        found.quantity += 1;
      } else {
        item.quantity = 1;
        acc.push(item);
      }
      return acc;
    },
    []
  );

  const cartItemsHTML = cartItems.map((item) => {
    const itemTotal = item.quantity * item.price;
  
    return `
      <li id="wine-${item.id}" class="list-item">
        <span>${item.quantity}x</span>
        <span>${item.name}: </span>
        <span>R$ ${itemTotal.toFixed(2)}</span>
      </li>
    `;
  }).join('');
  
  const totalHTML = `<h2>Total: R$ ${cart.price.toFixed(2)}</h2>`;

  const actionsHTML = `
    <div>
      <button class="button" onclick="checkout()">Finalizar compra</button>
      <button class="button" onclick="clearCart()">Limpar carrinho</button>
    </div>
  `

  
  CART_LIST.innerHTML = cartItemsHTML + totalHTML + actionsHTML;
}