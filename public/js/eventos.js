const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");

        if (isLeft){
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems){
            currentItem = 0;
        }

        if (currentItem < 0){
            currentItem = maxItems - 1;
        }

        items.forEach((item) => item.classList.remove("current-item"));

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });

        items[currentItem].classList.add("current-item");

    });
});

// Nada funciona nessa bomba 😁😀 

// const slider = document.querySelector(".slider");
// const sliderContent = document.querySelector(".slider_content");
// const sliderItems = document.querySelectorAll(".slider_item");
// const sliderNavButtons = document.querySelectorAll(".slider_nav_button");

// let currentItemIndex = 0;
// const maxItemIndex = sliderItems.length - 1;

// // Obtendo as referências para os botões de navegação esquerda e direita
// const prevButton = document.querySelector(".left-button");
// const nextButton = document.querySelector(".right-button");

// function updateButtons() {
//   if (currentItemIndex === 0) {
//     prevButton.style.opacity = '0.2';
//     prevButton.disabled = true;
//   } else {
//     prevButton.style.opacity = '1';
//     prevButton.disabled = false;
//   }

//   if (currentItemIndex === maxItemIndex) {
//     nextButton.style.opacity = '0.2';
//     nextButton.disabled = true;
//   } else {
//     nextButton.style.opacity = '1';
//     nextButton.disabled = false;
//   }
// }

// function goToItem(index) {
//   if (index < 0) {
//     currentItemIndex = maxItemIndex;
//   } else if (index > maxItemIndex) {
//     currentItemIndex = 0;
//   } else {
//     currentItemIndex = index;
//   }

//   sliderItems.forEach((item) => item.classList.remove("current-item"));
//   sliderItems[currentItemIndex].classList.add("current-item");
//   updateButtons();
// }

// function slideToNextItem() {
//   goToItem(currentItemIndex + 1);
// }

// function slideToPreviousItem() {
//   goToItem(currentItemIndex - 1);
// }

// sliderNavButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (button.classList.contains("left-button")) {
//       slideToPreviousItem();
//     } else if (button.classList.contains("right-button")) {
//       slideToNextItem();
//     }
//   });
// });

// // Initial setup
// goToItem(currentItemIndex);

// // Auto slide (optional)
// const autoSlideInterval = 0; // Intervalo em milissegundos
// let autoSlideTimer;

// function startAutoSlide() {
//   autoSlideTimer = setInterval(slideToNextItem, autoSlideInterval);
// }

// function stopAutoSlide() {
//   clearInterval(autoSlideTimer);
// }

// // Iniciar o carrossel automático quando a página carregar
// window.addEventListener("load", startAutoSlide);

// // Parar o carrossel automático quando o mouse estiver sobre o carrossel
// slider.addEventListener("mouseenter", stopAutoSlide);

// // Retomar o carrossel automático quando o mouse sair do carrossel
// slider.addEventListener("mouseleave", startAutoSlide);

// // Ao carregar a página, definir o estado inicial dos botões
// updateButtons();