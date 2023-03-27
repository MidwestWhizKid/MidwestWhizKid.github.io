(() => {
    const logos = [
        "MWK key logo v2 HQ - Who you kiddin'.png",
        "MWK key logo v2 HQ - Whiz on kid.png",
        "MWK key logo v2 HQ.png",
    ];
    const logo = document.querySelector(".logo");
    logo.addEventListener("click", () => {
        logo.src = logos[Math.random * 3];
    });
})();
