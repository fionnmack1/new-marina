async function loadProducts() {
  const res = await fetch("products.json");
  const products = await res.json();

  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    const cheapest = Math.min(...product.prices.map(p => p.price));

    let priceRows = "";

    product.prices.forEach(p => {
      const best = p.price === cheapest ? "⭐ Best Price" : "";

      priceRows += `
        <div class="price-row">
          <span>${p.store}</span>
          <span>$${p.price} ${best}</span>
          <a href="${p.link}" target="_blank">Buy</a>
        </div>
      `;
    });

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" class="product-image">
      <h2>${product.name}</h2>
      <div class="prices">
        ${priceRows}
      </div>
    `;

    container.appendChild(card);
  });
}

loadProducts();
