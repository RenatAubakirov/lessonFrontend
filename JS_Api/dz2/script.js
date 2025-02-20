const images = document.querySelectorAll(".layer");
const container = document.querySelector(".container");

const radioButtons = document.querySelectorAll('input[type="radio"]');
const layers = document.querySelectorAll(".layer");

radioButtons.forEach((radioButton, index) => {
	radioButton.addEventListener("change", () => {
		layers.forEach((layer) => (layer.style.opacity = 0));

		if (radioButton.checked) {
			layers[index].style.opacity = 1;
			console.log(`Эта смена картинка произошла через JS`);
		}
	});
});

let indexElement = 0;

function showAllImages() {
	images[indexElement].style.opacity = 0;
	indexElement = (indexElement + 1) % images.length;
	images[indexElement].style.opacity = 1;
	if (images[indexElement].classList.contains("layer1")) {
		container.style.backgroundColor = "#00ac1d";
	} else if (images[indexElement].classList.contains("layer2")) {
		container.style.backgroundColor = "#1b32fa";
	} else {
		container.style.backgroundColor = "#f8fc1a";
	}
}

setInterval(showAllImages, 5000);