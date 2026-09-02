document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        once: true,
        duration: 800
    });

    // Animasi Efek Ketik pada Hero Section
    const textArray = ["Digital Creator", "Instagram Enthusiast", "@yyosepmb_"];
    let textIndex = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("typing-text");

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typingElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    }

    type();
});