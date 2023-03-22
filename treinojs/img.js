//const iamge = document.querySelector("img"),
//input = document.querySelector("input");

//input.addEventListener("change", () => {
  //  image.src = URL.createObjectURL(input.files[0]);
//});
let box = document.querySelector("div"), input = document.querySelector("input");
input.addEventListener("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value;
});