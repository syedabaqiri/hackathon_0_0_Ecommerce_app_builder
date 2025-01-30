document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: 'Mouse', price: '$94.99', description: 'High-quality wireless mouse for gaming and office use.', image: 'mouse.jpg' },
        { id: 2, name: 'Keyboard', price: '$60.99', description: 'Mechanical keyboard with RGB lighting.', image: 'keyboard.jpg' },
        { id: 3, name: 'Headphone', price: '$25.21', description: 'Comfortable headphones with noise cancellation.', image: 'headphone.jpg' },
        { id: 4, name: 'AirPod', price: '$99.99', description: 'Wireless earphones with excellent sound quality.', image: 'airpod.jpg' },
        { id: 5, name: 'AirPod', price: '$99.99', description: 'Wireless earphones with excellent sound quality.', image: 'airpod.jpg' },
        { id: 6, name: 'AirPod', price: '$99.99', description: 'Wireless earphones with excellent sound quality.', image: 'airpod.jpg' },
        { id: 7, name: 'AirPod', price: '$99.99', description: 'Wireless earphones with excellent sound quality.', image: 'airpod.jpg' },
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('productId'));

    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-image').src = product.image;

        
        const reviewList = document.getElementById("review-list");
        const reviews = [];

       
        function updateReviews() {
            reviewList.innerHTML = '';  
            reviews.forEach(review => {
                const li = document.createElement('li');
                li.textContent = review;

                
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = "Delete";
                deleteBtn.addEventListener('click', () => {
                    const index = reviews.indexOf(review);
                    reviews.splice(index, 1);
                    updateReviews();
                });
                li.appendChild(deleteBtn);

                reviewList.appendChild(li);
            });
        }

        
        document.getElementById("review-form").addEventListener("submit", function (e) {
            e.preventDefault();
            const reviewText = document.getElementById("review-text").value.trim();
            if (reviewText) {
                reviews.push(reviewText);
                updateReviews();
                document.getElementById("review-text").value = '';  
            }
        });

        updateReviews(); 
    } else {
        
        document.body.innerHTML = '<h1>Product not found</h1>';
    }
});
