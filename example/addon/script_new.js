VanillaTilt.init(document.querySelector("#image-comparison-slider"), {
  max: 5,
  speed: 800,
  scale: 1.02
});

const slider = document.querySelector("#image-comparison-slider");
const sliderImgWrapper = document.querySelector("#image-comparison-slider .img-wrapper");
const sliderHandle = document.querySelector("#image-comparison-slider .handle");

slider.addEventListener("mousemove", sliderMouseMove);
slider.addEventListener("touchmove", sliderMouseMove);

function sliderMouseMove(event) {
  if (isSliderLocked) return;

  const sliderLeftX = slider.offsetLeft;
  const sliderWidth = slider.clientWidth;
  const sliderHandleWidth = sliderHandle.clientWidth;

  let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
  if (mouseX < 0) mouseX = 0;
  else if (mouseX > sliderWidth) mouseX = sliderWidth;

  sliderImgWrapper.style.width = `${((1 - mouseX / sliderWidth) * 100).toFixed(4)}%`;
  sliderHandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth / 2}px)`;
  
///////////////////////////////////////////////////////////////////////////////////////
  if (mouseX === sliderWidth) {
    mouseX = 5; // Set mouseX to 0 to move the mouse to the left
    sliderImgWrapper.style.width = '100%';
    sliderHandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth / 2}px)`;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
     localStorage.setItem("editus_points", Number(localStorage.getItem("editus_points")) + 0.01);
        document.getElementById('point').innerHTML="<div class='animate__animated animate__bounceIn'><img src='coin.png' width='1.1%'><b style='background-color:black;'>x"+Number(localStorage.getItem("editus_points")).toFixed(3)+"</b></div>"

confetti({
  angle: randomInRange(55, 125),
  spread: randomInRange(50, 70),
  particleCount: randomInRange(50, 100),
  origin: { y: 0.6 },
});
    

    randomR()
   


    
    //changePattern()
    
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
