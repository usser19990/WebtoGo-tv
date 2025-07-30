
document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    de: { "WebtoGo TV": "WebtoGo Fernsehen" },
    tr: { "WebtoGo TV": "WebtoGo Televizyonu" },
    it: { "WebtoGo TV": "WebtoGo TV Italiana" },
    bg: { "WebtoGo TV": "WebtoGo Телевизия" },
    ru: { "WebtoGo TV": "WebtoGo ТВ" }
  };
  const lang = navigator.language.slice(0, 2);
  const text = translations[lang];
  if (text) {
    document.querySelectorAll("h1").forEach(el => {
      if (text[el.textContent]) {
        el.textContent = text[el.textContent];
      }
    });
  }
});
