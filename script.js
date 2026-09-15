// Номер студии в WhatsApp (замените на свой, в формате без + и пробелов)
const STUDIO_WHATSAPP = "77004042616";

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
