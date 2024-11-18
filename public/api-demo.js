document.getElementById('fetch-data').addEventListener('click', async () => {
    const response = await fetch('/api/items');
    const items = await response.json();

    const container = document.getElementById('items-container');
    container.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<h2>${item.name}</h2><p>${item.description}</p><p>Price: $${item.price}</p>`;
        container.appendChild(itemDiv);
    });
});