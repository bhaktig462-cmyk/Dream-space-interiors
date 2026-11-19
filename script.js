/* Contact Section */

.contact-section {
    padding: 90px 0;
    background: #f8f5f0;
}

.contact-section h2 {
    color: #49372b;
    font-size: 36px;
    font-weight: bold;
}

.contact-info {
    background: #795548;
    color: white;
    padding: 40px;
    border-radius: 12px;
}

.contact-info h3 {
    margin-bottom: 25px;
}

.contact-info p {
    margin: 20px 0;
}

.contact-section .form-control {
    padding: 14px;
    border: 1px solid #ddd;
    border-radius: 7px;
}

.contact-section .form-control:focus {
    border-color: #a77b55;
    box-shadow: 0 0 5px #a77b55;
}// Back To Top Function

const topButton = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});