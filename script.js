let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(direction) {
    showSlide(slideIndex + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    /** TODO: Add a comment form **/
    const userName = document.getElementById("userName");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment");
    const cArea = document.getElementById("commentArea");

    function validateForm(event) {
        event.preventDefault();

        if (userName.value.trim() === "" || userName.value === null || userName.value.length > 8) {
            alert("Name is invalid. Please try again!");
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const validateEmail = emailPattern.test(email.value);
        if (!validateEmail) {
            alert("The email you entered is not valid.");
            return false;
        }

        if (comment.value.trim() === "" || comment.value.trim() === null) {
            alert("Please enter your comment.");
            return false;
        }

        const cText = `name: ${userName.value}, email: ${email.value}, comment: ${comment.value}`;
        addComment(cText);
    }

    function addComment(cText) {
        const cElement = document.createElement("li");
        cElement.textContent = cText;
        cArea.appendChild(cElement);
    }

    const form = document.querySelector("#commentForm");
    form.addEventListener("submit", validateForm);
});