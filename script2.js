const header = document.querySelector("header");
const sectionOne = document.querySelector("#splash_for_responsive");

const faders = document.querySelectorAll(".fade_in");

//sectionOneOptions funktion er her at fortælle hvilke specifikt punkt intersectionobserveren skal lytte efter

const sectionOneOptions = {
    rootMargin: "-300px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("nav_scrolled");
            } else {
                header.classList.remove("nav_scrolled");
            }
        });
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
    threshold: 0.25,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
