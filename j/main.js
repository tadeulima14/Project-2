document.addEventListener("DOMContentLoaded", init);

// prepare the page for user interaction
function init() {
    //create shortcut variables
    const container = document.querySelector(".container");
    const frame = document.querySelector(".frame");
    const slides = document.querySelectorAll(".slide");
    const currentSlide = document.querySelector(".current");

    // create the slide controls
    const controls = document.createElement("div");
    controls.className = "controls";
    controls.innerHTML =
        '<a href="#" class="back-btn">Back</a><a href="#" class="next-btn">Next</a>';
    // add the controls to the page
    container.appendChild(controls);

    const backBtn = controls.querySelector(".back-btn");
    const nextBtn = controls.querySelector(".next-btn");

    //add interactivity to the controls
    backBtn.addEventListener("click", showNewSlide);
    nextBtn.addEventListener("click", showNewSlide);

    //setup slides, first hide slides except first one
    slides.forEach((image) => {
        image.classList.add("hide");
        slides[0].classList.remove("hide");
    });
}

function showNewSlide(e) {
    // shortcut variables
    const container = document.querySelector(".container");
    const frame = document.querySelector(".frame");
    const slides = document.querySelectorAll(".slide");
    const currentSlide = document.querySelector(".current");
    const myButton = e.target;
    let nextUp = "";

    //deccomission the currently visible slide
    if (myButton.classList.contains("back-btn")) {
        nextUp = currentSlide.previousElementSibling;
    } else {
        nextUp = currentSlide.nextElementSibling;
    }

    //back button logic
    if (nextUp === null) {
        let index = slides.length - 1;
        nextUp = slides[index];
    }

    //next button logic
    if (nextUp.nodeName !== "IMG") {
    }

    //deccomission the currently visible slide
    currentSlide.classList.toggle("hide");
    currentSlide.classList.toggle("current");

    //show the new slide
    nextUp.classList.toggle("hide");
    nextUp.classList.toggle("current");

    //change the caption text to match the slide
    const txt = currentSlide.alt;
    const caption = frame.querySelector("figcaption");
    caption.textContent = txt;
}
