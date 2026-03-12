async function loadProducts(){
  const res = await fetch("products.json");
  const products = await res.json();
  display(products);

  document.getElementById("search").addEventListener("input", e=>{
    const q = e.target.value.toLowerCase();
    const filtered = products.filter(p=>p.name.toLowerCase().includes(q));
    display(filtered);
  });
}

function display(products){
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p=>{
    const card = document.createElement("div");
    card.className="card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <div class="price">$${p.price}</div>
      <a href="${p.link}" target="_blank">View Product</a>
    `;
    container.appendChild(card);
  });
}

loadProducts();
