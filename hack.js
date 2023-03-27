(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const logos = [
            "MWK key logo v2 HQ",
            "MWK key logo v2 HQ - Whiz on kid",
            "MWK key logo v2 HQ - Who you kiddin'",
            "MWK key logo v2 HQ - Call me Whizzy",
        ];
        const logo = document.querySelector(".logo");
        logo.addEventListener("click", () => {
            logo.src = `assets/${logos[Math.floor(Math.random() * 4)]}.png`;

            return false;
        });
    });
})();
