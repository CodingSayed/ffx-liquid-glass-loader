const slides = [
  {
    img: "img/besaid_beach.jpg",
    text: "Tip: If you hear 'HA HA HA', your audio is working perfectly.",
    author: "-Lulu (probably)"
  },
  {
    img: "img/besaid_island_1.jpg",
    text: "Reminder: The sphere grid is not a suggestion. It is a lifestyle.",
    author: "-Wakka"
  },
  {
    img: "img/besaid_island_2.jpg",
    text: "If Blitzball makes no sense, congratulations—you are playing it correctly.",
    author: "-Jecht"
  },
  {
    img: "img/besaid_lake.jpg",
    text: "Tip: Save often. Especially right before you decide, 'I'll just check what's next.'",
    author: "-Auron"
  },
  {
    img: "img/besaid_temple.jpg",
    text: "Warning: Touching suspicious glowing spheres may cause plot progression.",
    author: "-Rikku"
  }
];

const bg = document.querySelector(".bg-slideshow");
const tipEl = document.querySelector(".loading__text");
const authorEl = document.querySelector(".loading__author");

let i = 0;
const FADE_MS = 1200;
const INTERVAL_MS = 6500;

function applySlide(index) {
  const s = slides[index];
  bg.style.backgroundImage = `url("${s.img}")`;
  tipEl.textContent = s.text;
  authorEl.textContent = s.author;
}

function nextSlide() {
  bg.style.opacity = "0";
  tipEl.style.opacity = "0";
  authorEl.style.opacity = "0";

  setTimeout(() => {
    i = (i + 1) % slides.length;
    applySlide(i);

    bg.style.opacity = "1";
    tipEl.style.opacity = "1";
    authorEl.style.opacity = "1";
  }, FADE_MS);
}

applySlide(i);

setInterval(nextSlide, INTERVAL_MS);