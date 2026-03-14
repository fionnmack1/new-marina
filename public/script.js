function sortByPrice(products) {
    return products.sort((a, b) => {
        const minA = Math.min(...Object.values(a.prices));
        const minB = Math.min(...Object.values(b.prices));
        return minA - minB;
    });
}

async function displayProducts() {
    const response = await fetch('products.json');
    const products = await response.json();
    const sortedProducts = sortByPrice(products);
    const productList = document.getElementById('product-list');

    sortedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-name">${product.name}</div>
            <div class="price-list">
                ${Object.entries(product.prices).map(([store, price]) =>
                    `<div>${store}: $${price}${price === Math.min(...Object.values(product.prices)) ? ' <span class="best-price">(Best Price)</span>' : ''}</div>`
                ).join('')}
            </div>
            <button onclick="window.open('${product.link}', '_blank')">Buy Now</button>
        `;
        productList.appendChild(productCard);
    });
}

displayProducts();

