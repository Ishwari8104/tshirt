function validateForm() {
    const tagline = document.getElementById("tagline").value;
    if (tagline.length > 50) {
        alert("Tagline cannot exceed 50 characters.");
        return false; 
    }

    const phone = document.getElementById("phone").value;
    const phonePattern = /^\d{9}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must have exactly 9 digits.");
        return false; 
    }

    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email address.");
        return false; 
    }

    // Process order and generate the receipt
    generateReceipt();
    
    return true;
}

function generateReceipt() {
    // Get form input values
    const tagline = document.getElementById("tagline").value;
    const color = document.getElementById("color").value;
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;
    const deliveryDate = document.getElementById("delivery_date").value;
    const street = document.getElementById("street_address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zipcode = document.getElementById("zipcode").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Get the current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    // Create the receipt message
    const receiptMessage = `
        Order Receipt:
        Date: ${formattedDate}
        Tagline: ${tagline}
        Color: ${color}
        Size: ${size}
        Quantity: ${quantity}
        Delivery Date: ${deliveryDate}
        Street Address: ${street}
        City: ${city}
        State: ${state}
        Zip Code: ${zipcode}
        Email: ${email}
        Phone: ${phone}
    `;

    // Display the receipt message in an alert
    alert(receiptMessage);
}
