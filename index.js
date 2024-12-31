const buttonEl = document.getElementById("button-el");
const conversionsSection = document.getElementById("conversions-section");
const inputEl = document.getElementById("input-el");
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

buttonEl.addEventListener("click", function() {
    const parsedInput = Number(inputEl.value);
    if (parsedInput) {
        conversionsSection.scrollIntoView({behavior: "smooth"});
        appMathLengths(parsedInput);
        appMathVolumes(parsedInput);
        appMathMasses(parsedInput);
    } else {
        inputEl.value = "";
        alert("Please enter a valid number.");
    }
});

function appMathLengths(userInput) {
    const lengthContainer = document.getElementById("length-container");
    const length1And3 = userInput;
    const length2 = userInput * 3.281;
    const length4 = userInput / 3.281;
    lengthContainer.innerHTML = `
        <p><span>${length1And3}</span> meters = <span>${length2.toFixed(3)}</span> feet 
            <div class="divider-line"></div>
        </p>
        <p><span>${length1And3}</span> feet = <span>${length4.toFixed(3)}</span> meters
        </p>
    `
}

function appMathVolumes(userInput) {
    const volumeContainer = document.getElementById("volume-container");
    const volume1And3 = userInput;
    const volume2 = userInput * 0.264;
    const volume4 = userInput / 0.264;
    volumeContainer.innerHTML = `
        <p><span>${volume1And3}</span> liters = <span>${volume2.toFixed(3)}</span> gallons 
            <div class="divider-line"></div>
        </p>
        <p><span>${volume1And3}</span> gallons = <span>${volume4.toFixed(3)}</span> liters
        </p>
    `
}

function appMathMasses(userInput) {
    const massContainer = document.getElementById("mass-container");
    const mass1And3 = userInput;
    const mass2 = userInput * 2.204;
    const mass4 = userInput / 2.204;
    massContainer.innerHTML = `
        <p><span>${mass1And3}</span> kilograms = <span>${mass2.toFixed(3)}</span> pounds 
            <div class="divider-line"></div>
        </p>
        <p><span>${mass1And3}</span> pounds = <span>${mass4.toFixed(3)}</span> kilograms
        </p>
    `
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 575 || document.documentElement.scrollTop > 575) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    inputEl.value = "";
}