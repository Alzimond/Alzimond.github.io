function setLanguage(language) {
    localStorage.setItem("language", language);
    updateLanguage();
}

function updateLanguage() {
    const language = localStorage.getItem("language") || "en";

    document.querySelectorAll("[data-en]").forEach(function(element) {
        element.textContent = element.getAttribute("data-" + language);
    });

    document.documentElement.lang = language;
}

document.addEventListener("DOMContentLoaded", updateLanguage);
