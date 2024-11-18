document.getElementById('fetch-menu').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/items'); // Fetch the JSON data
        const items = await response.json();

        const container = document.getElementById('menu-container');
        container.innerHTML = ''; // Clear previous content

        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('col-md-4', 'mb-4'); // Bootstrap grid for responsiveness
            itemDiv.innerHTML = `
                <div class="card">
                    <img src="${item.image}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="text-primary"><strong>Price: $${item.price}</strong></p>
                    </div>
                </div>
            `;
            container.appendChild(itemDiv); // Append the card to the container
        });
    } catch (error) {
        console.error('Error fetching menu data:', error);
    }
});
