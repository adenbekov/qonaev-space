// Номер студии в WhatsApp (замените на свой, в формате без + и пробелов)
const STUDIO_WHATSAPP = "77004042616";

const LANG_KEY = "qonaev-lang";

function applyLanguage(lang) {
  document.querySelectorAll("[data-ru]").forEach((el) => {
    const text = el.dataset[lang === "kk" ? "kk" : "ru"];
    if (text !== undefined) el.textContent = text;
  });

  document.querySelectorAll("[data-ru-placeholder]").forEach((el) => {
    const text = el.dataset[lang === "kk" ? "kkPlaceholder" : "ruPlaceholder"];
    if (text !== undefined) el.placeholder = text;
  });

  document.documentElement.lang = lang === "kk" ? "kk" : "ru";

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  localStorage.setItem(LANG_KEY, lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

const savedLang = localStorage.getItem(LANG_KEY);
if (savedLang === "kk") applyLanguage("kk");

const form = document.getElementById("bookingForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = data.get("name").trim();
  const phone = data.get("phone").trim();
  const service = data.get("service");
  const date = data.get("date");
  const time = data.get("time");
  const comment = data.get("comment").trim();

  const message =
    `Здравствуйте! Хочу записаться на съёмку.\n` +
    `Имя: ${name}\n` +
    `Телефон: ${phone}\n` +
    `Услуга: ${service}\n` +
    `Дата: ${date}\n` +
    `Время: ${time}` +
    (comment ? `\nКомментарий: ${comment}` : "");

  const url = `https://wa.me/${STUDIO_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  form.reset();
});
