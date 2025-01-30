document.addEventListener("DOMContentLoaded", function () {
    // Category filtering functionality
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(btn => 
                btn.classList.remove('active'));
            
            button.classList.add('active');
            
            const category = button.textContent.toLowerCase();
            const products = document.querySelectorAll('.product-card');
            
            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Add to Cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = 'Added!';
            setTimeout(() => {
                button.textContent = 'Add to Cart';
            }, 2000);
        });
    });
});
