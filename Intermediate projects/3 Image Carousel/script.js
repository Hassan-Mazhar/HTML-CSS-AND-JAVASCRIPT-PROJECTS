const images = [
    "https://via.placeholder.com/400?text=Image+1",
    "https://via.placeholder.com/400?text=Image+2",
    "https://via.placeholder.com/400?text=Image+3",
    "https://via.placeholder.com/400?text=Image+4"
];

let currentIndex = 0;

const carouselImage = document.getElementById("carousel-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateImage() {
    carouselImage.src = images[currentIndex];
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

updateImage();
