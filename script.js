document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    const items = document.querySelectorAll(
        ".intro, .profile-container, .sidediv, .service-card, .help-text"
    );

    function reveal() {

        items.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < window.innerHeight - 120) {
                item.classList.add("show");
            }
        });
    }

    reveal();

    window.addEventListener("scroll", reveal);

    const cards = document.querySelectorAll(".service-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-6px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

    const count = document.querySelector(".num");

    if (count) {

        let current = 0;
        const target = parseInt(count.textContent);

        count.textContent = "0";

        const timer = setInterval(() => {

            current++;

            count.textContent = current;

            if (current >= target) {
                clearInterval(timer);
            }

        }, 120);
    }

    const profile = document.querySelector(".profile-pic");

    if (profile) {

        let up = true;

        setInterval(() => {

            profile.style.transform =
                up ? "translateY(-8px)" : "translateY(0)";

            profile.style.transition = "1.2s ease";

            up = !up;

        }, 1200);
    }

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";
    topBtn.className = "top-btn";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        topBtn.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});