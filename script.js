// Testing GODARD

console.log("Welcome To GODARD's Website");

// Preloader GODARD

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      document.getElementById('preloader').style.animation = 'splitAndMove 1.5s forwards';
    }, 3000);
});

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

// header sticky & go to top

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

// navbar toggle

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
});


// Navs Click Toggle

const btn8 = document.getElementById("navsss")
btn8.addEventListener("click",function(){
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
});
const btn9 = document.getElementById("navsss1")
btn9.addEventListener("click",function(){
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
});
const btn10 = document.getElementById("navsss2")
btn10.addEventListener("click",function(){
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
});
const btn11 = document.getElementById("navsss3")
btn11.addEventListener("click",function(){
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
});
const btn12 = document.getElementById("navsss4")
btn12.addEventListener("click",function(){
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
});

// skills toggle

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}

// dark & light theme toggle

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

// check & apply last time selected theme from localStorage

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

// mouse move effect 

const cursor = document
    .querySelector(".custom-cursor");
  
// Adding the animations when the
// mouse button is clicked
  
window.addEventListener("mousedown", (event) => {
    if (!cursor.classList.contains("click")) {
        cursor.classList.add("click");
  
        setTimeout(() => {
            cursor.classList.remove("click");
        }, 800);
    }
});
  
// Getting the position of the cursor
window.addEventListener("mousemove", (event) => {
    let x = event.pageX - cursor.offsetWidth / 2,
        y = event.pageY - cursor.offsetHeight / 2;
  
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

// Add this code at the bottom of your HTML body

  // Wait for the page to load
  window.addEventListener('load', function() {
    // Hide the pre-loader after 3 seconds
    setTimeout(function() {
      document.getElementById('preloader-container').style.display = 'none';
    }, 3000);
  });


  document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay of 3 seconds (3000 milliseconds)
    setTimeout(function () {
        // Add the "loaded" class to the body element to hide the preloader
        document.body.classList.add("loaded");
    }, 3000);
  });