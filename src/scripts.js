/* Menu mobile */
const menu = document.getElementById("menu");
const menubtn = document.getElementById("menu-btn");
const blurOverlay = document.getElementById("blur-overlay");

/* dark-mode */
const darkmode = document.getElementById("darkmode");

/* slide-projetos */
const track = document.getElementById("track");
const slides = Array.from(track.children);
const prevButton = document.getElementById("arrow-left");
const nextButton = document.getElementById("arrow-right");
let currentIndex = 0;

/* Doots */
const dotsContainer = document.getElementById("dots");
const dots = Array.from(dotsContainer.children);

/* Abrir menu hamburguer */
const openMenu = () => {
  const isOpen = menu.style.display === "block";
  menu.style.display = isOpen ? "none" : "block";

  if (isOpen) {
    blurOverlay.classList.remove("opacity-100", "pointer-events-auto");
    blurOverlay.classList.add("opacity-0", "pointer-events-none");
    menubtn.textContent = "menu";
  } else {
    blurOverlay.classList.remove("opacity-0", "pointer-events-none");
    blurOverlay.classList.add("opacity-100", "pointer-events-auto");
    menubtn.textContent = "✖";
  }
};

/* Fechar menu hamburguer */
const closeMenu = () => {
  menu.style.display = "none";
  blurOverlay.classList.remove("opacity-100", "pointer-events-auto");
  blurOverlay.classList.add("opacity-0", "pointer-events-none");
  menubtn.textContent = "menu";
};

menubtn.addEventListener("click", openMenu);

document.addEventListener("click", e => {
  if (!menu.contains(e.target) && !menubtn.contains(e.target)) closeMenu();
});

menu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

/* dark-mode*/
darkmode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
})

/* slide-projetos*/
function updateSlidePosition() {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.remove("fas", "far", "active");
    dot.classList.add(index === currentIndex ? "fas" : "far");
    if (index === currentIndex) {
      dot.classList.add("active");
    }
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlidePosition();
    updateDots();
  });
});

nextButton.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlidePosition();
    updateDots();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
    updateDots();
  }
});

window.addEventListener('resize', updateSlidePosition);
updateSlidePosition();
updateDots();

/* Contatos*/
function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const telefone = "5544997032921";

  if (nome === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  const texto = `Olá! Meu chamo ${nome}.\n${mensagem}`;

  const msgFormatada = encodeURIComponent(texto);

  const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;

  window.open(url, '_blank');

}