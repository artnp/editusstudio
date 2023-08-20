// Import party-js library for confetti
<script src="https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js"></script>

// Initialize VanillaTilt for image comparison slider
VanillaTilt.init(document.querySelector("#image-comparison-slider"), {
  max: 5,
  speed: 800,
  scale: 1.02
});

const slider = document.querySelector("#image-comparison-slider");
const sliderImgWrapper = document.querySelector("#image-comparison-slider .img-wrapper");
const sliderHandle = document.querySelector("#image-comparison-slider .handle");

// Handle slider mouse movement
slider.addEventListener("mousemove", sliderMouseMove);
slider.addEventListener("touchmove", sliderMouseMove);

function sliderMouseMove(event) {
  // ... (your existing sliderMouseMove code)
  
  if (mouseX === sliderWidth) {
    mouseX = 20;
    sliderImgWrapper.style.width = '100%';
    sliderHandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth / 2}px)`;

    // Call party-js confetti when mouse reaches the right edge
    party.confetti(document.body, {
      count: party.variation.range(20, 40)
    });

    // Call your undefined function randomR()
    randomR();
    
    // You might want to add more code here if needed
    
  }
}

let isSliderLocked = false;

slider.addEventListener("mousedown", sliderMouseDown);
slider.addEventListener("touchstart", sliderMouseDown);
slider.addEventListener("mouseup", sliderMouseUp);
slider.addEventListener("touchend", sliderMouseUp);
slider.addEventListener("mouseleave", sliderMouseLeave);

function sliderMouseDown(event) {
  if (isSliderLocked) isSliderLocked = false;
  sliderMouseMove(event);
}

function sliderMouseUp() {
  if (!isSliderLocked) isSliderLocked = true;
}

function sliderMouseLeave() {
  if (isSliderLocked) isSliderLocked = false;
}
