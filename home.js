document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Populate featured collections
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
    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.getElementById('menu-toggle');
        const navbarNav = document.querySelector('.navbar nav');
        
        menuToggle.addEventListener('click', () => {
            navbarNav.classList.toggle('active');
        });
    });
    
    
    // Populate best sellers
    const bestSellers = [
        { name: "Radiant Solitaire Ring", price: "₹66,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYX3k68Q4-_3jBfrFkM3m70C62nvwHBGA7Mg&s" },
        { name: "Sapphire Halo Necklace", price: "₹73,650", image: "https://i.etsystatic.com/24342610/c/1624/1624/187/284/il/d415f5/4336312280/il_300x300.4336312280_omfq.jpg" },
        { name: "Emerald Cut Earrings", price: "₹11,400", image: "https://m.media-amazon.com/images/I/419EI9Z1oTL._AC_UY300_.jpg" },
        { name: "Pearl Strand Bracelet", price: "₹1,500", image: "https://m.media-amazon.com/images/I/51SNQUubn1L._AC_AC_SY300_QL15_.jpg" },
    ];

    const bestSellersContainer = document.getElementById('best-sellers');
    bestSellers.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
            <div class="heart-icon">
                 <i data-lucide="heart"></i>
             </div>
        `;
        bestSellersContainer.appendChild(productCard);
    });

    // Initialize Lucide icons again for dynamically added content
    lucide.createIcons();

    // Handle newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}`);
        e.target.reset();
    });

    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.closest('.product-card').querySelector('.product-name').textContent;
            alert(`Added ${productName} to cart`);
        });
    });

    // Favorite functionality
    document.querySelectorAll('.heart-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            icon.classList.toggle('text-red-500');
            const productName = icon.closest('.product-card').querySelector('.product-name').textContent;
            if (icon.classList.contains('text-red-500')) {
                alert(`Added ${productName} to favorites`);
            } else {
                alert(`Removed ${productName} from favorites`);
            }
        });
    });
});
