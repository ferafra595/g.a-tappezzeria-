// === CONFIG (modifica questi valori se serve) ===
const WHATSAPP_NUMBER = "393299695570"; // formato wa.me (senza + e senza spazi)
const INSTAGRAM_USERNAME = "ga_tappezzeria"; // cambia se diverso
const EMAIL_TO = "info@ga-tappezzeria.it"; // cambia se diverso

// Messaggio precompilato WhatsApp
const WA_MESSAGE = encodeURIComponent(
  "Ciao! Vorrei un preventivo per il ripristino del volante.\n" +
  "Auto: \n" +
  "Richiesta (pelle/alcantara, cuciture colore): \n" +
  "Allego foto del volante."
);

function waLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`;
}

function igLink() {
  return `https://instagram.com/${INSTAGRAM_USERNAME}`;
}

// Navbar mobile
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Set link CTA
const waTop = document.getElementById("waTop");
if (waFoto) waFoto.href = url;
const waQuote = document.getElementById("waQuote");
const waBottom = document.getElementById("waBottom");
const igDm = document.getElementById("igDm");

[waTop, waQuote, waBottom].forEach(el => {
  if (el) el.href = waLink();
});
if (igDm) igDm.href = igLink();

// Year footer
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Form -> apre mail (no backend)
const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(leadForm);
    const name = (data.get("name") || "").toString().trim();
    const contact = (data.get("contact") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const subject = encodeURIComponent("Richiesta preventivo - Ripristino volante");
    const body = encodeURIComponent(
      `Nome: ${name}\nContatto: ${contact}\n\nRichiesta:\n${message}\n`
    );

    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
  });
}
