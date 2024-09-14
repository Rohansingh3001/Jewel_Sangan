// collections.js
import { initIcons } from './icons.js';

document.addEventListener('DOMContentLoaded', () => {
    const featuredCollections = [
        { name: "Diamond Elegance", image: "https://m.media-amazon.com/images/I/71FaKQQ+JVL._AC_UY300_.jpg" },
        { name: "Pearl Perfection", image: "https://m.media-amazon.com/images/I/61s+6wj5JDL._AC_UY300_.jpg" },
        { name: "Gold Glamour", image: "https://m.media-amazon.com/images/I/917cGJ-AVcL._AC_UY300_.jpg" },
        { name: "Gemstone Dreams", image: "https://m.media-amazon.com/images/I/81cAItYdFFL._AC_UY300_.jpg" },
    ];

    const collectionsContainer = document.getElementById('featured-collections');
    featuredCollections.forEach(collection => {
        const collectionCard = document.createElement('a');
        collectionCard.href = '#';
        collectionCard.className = 'collection-card';
        collectionCard.innerHTML = `
            <img src="${collection.image}" alt="${collection.name}">
            <div class="collection-overlay">
                <h3 class="collection-name">${collection.name}</h3>
            </div>
        `;
        collectionsContainer.appendChild(collectionCard);
    });

    initIcons();
});
