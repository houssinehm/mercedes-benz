// ------------Silde 1 ----------------
const wrapper = document.querySelector(".slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pagination = document.querySelector(".pagination");

const totalSlides = document.querySelectorAll(".cardx").length;
let currentIndex = 0;
const slidesPerView = 3;

function updateSlider() {
    wrapper.style.transform = `translateX(${-currentIndex * (100 / slidesPerView)}vw)`;
    updatePagination();
}

function updatePagination() {
    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

function createPagination() {
    for (let i = 0; i <= totalSlides - slidesPerView; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateSlider();
        });
        pagination.appendChild(dot);
    }
    updatePagination();
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - slidesPerView) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

window.addEventListener("resize", updateSlider);
createPagination();

// ------------Silde 2 ----------------
const wrapperAlt = document.querySelector(".slidesy");
const prevBtnAlt = document.getElementById("prevBtny");
const nextBtnAlt = document.getElementById("nextBtny");
const paginationAlt = document.querySelector(".paginationy");

const totalSlidesAlt = document.querySelectorAll(".slide").length;
let currentIndexAlt = 0;
const slidesPerViewAlt = 3;

function updateSliderAlt() {
    wrapperAlt.style.transform = `translateX(${-currentIndexAlt * (100 / slidesPerViewAlt)}vw)`;
    updatePaginationAlt();
}

function updatePaginationAlt() {
    document.querySelectorAll(".doty").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndexAlt);
    });
}

function createPaginationAlt() {
    for (let i = 0; i <= totalSlidesAlt - slidesPerViewAlt; i++) {
        const dot = document.createElement("div");
        dot.classList.add("doty");
        dot.addEventListener("click", () => {
            currentIndexAlt = i;
            updateSliderAlt();
        });
        paginationAlt.appendChild(dot);
    }
    updatePaginationAlt();
}

nextBtnAlt.addEventListener("click", () => {
    if (currentIndexAlt < totalSlidesAlt - slidesPerViewAlt) {
        currentIndexAlt++;
        updateSliderAlt();
    }
});

prevBtnAlt.addEventListener("click", () => {
    if (currentIndexAlt > 0) {
        currentIndexAlt--;
        updateSliderAlt();
    }
});

window.addEventListener("resize", updateSliderAlt);
createPaginationAlt();