(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const logos = [
            "MWK key logo v2 HQ.png",
            "MWK key logo v2 HQ - Whiz on kid.png",
            "MWK key logo v2 HQ - Who you kiddin'.png",
        ];
        const logo = document.querySelector(".logo");
        logo.addEventListener("click", () => {
            logo.src = logos[Math.floor(Math.random() * 3)];

            return false;
        });
    });
})();
