// Example JS file
// document.getElementById('alertButton').addEventListener('click', () => {
//     alert('Button Clicked!');
// });
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
            // Add event listener to handle form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from actually submitting and refreshing the page
    event.preventDefault();
        
                // Get the form data (optional, for debugging)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Display success message in the UI
    successMessage.style.display = 'block';
    // Log success message and form data to the console
    console.log('Form Submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
        
                // Optionally, clear the form fields
    form.reset();
});
// Product data stored in JavaScript
const products = [
    {
        name: "Product A",
        description: "This is a Product A",
        price: 10
    },
    {
        name: "Product B",
        description: "This is a Product B",
        price: 20
    },
    {
        name: "Product C",
        description: "This is a Product C",
        price: 30
    },
    {
        name: "Product D",
        description: "This is a Product D",
        price: 40
    }
];

// Function to dynamically create cards and display them in the HTML
function displayProducts() {
    const container = document.getElementById('product-container'); // Get the container div
    container.innerHTML = ""; // Clear any existing content

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card', 'col-sm-3', 'm-4');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h4');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = product.name;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text', 'my-4');
        cardText.textContent = product.description;

        const priceText = document.createElement('p');
        priceText.classList.add('text-primary');
        priceText.textContent = `Price : $${product.price}`;

        // Append elements to card body and card
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(priceText);
        card.appendChild(cardBody);

        // Append the card to the container
        container.appendChild(card);
    });
}

// Call the function to display products when the page loads
document.addEventListener('DOMContentLoaded', displayProducts);
