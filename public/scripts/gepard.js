const gomb = document.getElementById("gepard-mode")
const kep = document.getElementById("gepik-kep")
const hatter = document.getElementById("gepi-hatter")

let klikkSzamlalo = 0;

gomb.addEventListener("click", () => {
    klikkSzamlalo++;

    if (klikkSzamlalo === 10) {
        easterEgg();
        klikkSzamlalo = 0;
    }
});

function easterEgg(){
    kep.src = "/images/ors.jpg"
    hatter.style.backgroundImage = "url('/images/ors.jpg')";
}