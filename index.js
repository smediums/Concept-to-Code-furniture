const slider = document.querySelector(".slider");
const sliderBtns = [...document.querySelector(".btns").children];
const header = document.querySelector("header");
const toggler = document.getElementById("toggler");

//Menu toggle
toggler.addEventListener("click", () => {
  header.classList.toggle("showNav");
});

//Slider functionality
let count = 0;
const handleCurSlide = (e) => {
  //prv btn
  if (e.currentTarget === sliderBtns[0] && count > 0) {
    count--;
    slider.style.transform = `translateX(-${count * 100}vw)`;
  }
  if (e.currentTarget === sliderBtns[0] && count === 0) {
    slider.style.transform = `translateX(-${count * 200}vw)`;
    count = 3;
  }

  //nxt btn
  if (e.currentTarget === sliderBtns[1] && count < 3) {
    count++;
    slider.style.transform = `translateX(-${count * 100}vw)`;
  }
  if (e.currentTarget === sliderBtns[1] && count === 3) {
    slider.style.transform = `translateX(-${count * 0}vw)`;
    count = 0;
  }
  console.log(count);
};

sliderBtns[0].addEventListener("click", handleCurSlide);
sliderBtns[1].addEventListener("click", handleCurSlide);
