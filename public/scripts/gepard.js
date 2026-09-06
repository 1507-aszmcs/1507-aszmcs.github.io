const gomb = document.getElementById("gepard-mode")
const kep = document.getElementById("gepik-kep")
const hatter = document.getElementById("gepi-hatter")

let klikkSzamlalo = 0;

gomb?.addEventListener("click", () => {
    klikkSzamlalo++;

    if (klikkSzamlalo === 10) {
        easterEgg();
        klikkSzamlalo = 0;
    }
});

function easterEgg(){
    // A kép csere csak a főoldalon létező elemeken fut le
    if (kep) kep.src = "/images/ors.jpg"
    if (hatter) hatter.style.backgroundImage = "url('/images/ors.jpg')";

    const vezetoknekSection = document.getElementById("vezetoknek-section");
    vezetoknekSection?.classList.remove("hidden");
    vezetoknekSection?.classList.add("flex");

    const extFooter = document.getElementById("extendedFooter");
    if (extFooter?.classList.contains("hidden")) {
        const szmcswebResponsiveLink = document.getElementById("respGepiMode");
        szmcswebResponsiveLink?.classList.remove("hidden");
        szmcswebResponsiveLink?.classList.add("flex");
    };
}
