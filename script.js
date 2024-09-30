// Function to show and hide sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section, .modal');
    sections.forEach(section => {
        section.style.display = 'none';  // Hide all sections
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // Show search bar for the products section
    if (sectionId === 'products') {
        document.getElementById('search-bar').style.display = 'block';
        populateProducts();  // Populate products when entering the products section
    } else {
        document.getElementById('search-bar').style.display = 'none';
    }
}

// Purchase Form Functions
function openPurchaseForm(productName) {
    document.getElementById('purchase-form').style.display = 'block';
    document.getElementById('form').reset();  // Reset form fields
}

function closePurchaseForm() {
    document.getElementById('purchase-form').style.display = 'none';
}

function submitForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;

    alert(`Thank you, ${name}! Your order has been placed.\nAddress: ${address}\nEmail: ${email}`);
    closePurchaseForm();
}

// Contact Form Functions
function openContactForm() {
    document.getElementById('contact-form').style.display = 'block';
}

function closeContactForm() {
    document.getElementById('contact-form').style.display = 'none';
}

function submitContactForm() {
    const contactEmail = document.getElementById('contact-email').value;
    const reason = document.getElementById('reason').value;

    alert(`Thank you for contacting us!\nEmail: ${contactEmail}\nReason: ${reason}`);
    closeContactForm();
}

// Function to populate product list
function populateProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  // Clear previous products

    // Example product data
    const products = [
        {
            name: "Mechanical Keyboard",
            description: "A high-quality mechanical keyboard for gaming.",
            image: "keyboard1.jpg"
        },
        {
            name: "Wireless Keyboard",
            description: "A convenient wireless keyboard for your work setup.",
            image: "keyboard2.jpg"
        },
        // Add more products here
    ];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button onclick="openPurchaseForm('${product.name}')">Buy</button>
        `;
        productList.appendChild(productItem);
    });
}

// Search Functionality
function searchProducts() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const productName = item.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}