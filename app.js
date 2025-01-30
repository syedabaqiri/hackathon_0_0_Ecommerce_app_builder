document.addEventListener("DOMContentLoaded", function () {
    let cart = []; 

    
    function updateCart() {
        const cartList = document.getElementById("cart-list");
        const cartTotal = document.getElementById("cart-total");
        cartList.innerHTML = '';  
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.title} - $${item.price}`;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => removeFromCart(item));
            li.appendChild(removeBtn);

            cartList.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    function addToCart(product) {
        if (!cart.some(item => item.title === product.title)) {
            cart.push(product);
            updateCart();
        }
    }

    function removeFromCart(product) {
        const index = cart.findIndex(item => item.title === product.title);
        if (index !== -1) {
            cart.splice(index, 1);
        }
        updateCart();
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const title = productCard.querySelector('h3').textContent;
            const price = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));

            const product = { title, price };

            addToCart(product);

            event.target.textContent = 'Added!';
            setTimeout(() => {
                event.target.textContent = 'Add to Cart';
            }, 2000);
        });
    });

    document.getElementById("clear-cart").addEventListener("click", function () {
        cart = [];
        updateCart();
    });

    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.textContent.trim().toLowerCase();
            const products = document.querySelectorAll('.product-card');

            products.forEach(product => {
                if (category === 'all' || product.dataset.category.toLowerCase() === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    updateCart();
});
