document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

let backToTopBtn = document.createElement("div");
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.id = "back-to-top";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const featureItems = document.querySelectorAll(".feature-item");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    },
    {
        threshold: 0.1,
    }
);

featureItems.forEach((item) => {
    observer.observe(item);
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        answer.style.display = answer.style.display === "block" ? "none" : "block";

        const chevronIcon = question.querySelector(".fas");
        chevronIcon.classList.toggle("rotate");
    });
});
