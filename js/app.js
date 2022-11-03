//To Add Smooth Scrolling Anchor Links to Jumps to a Specific Part of a web page
document.querySelectorAll('a[href^="#"]').forEach(achor => {
    achor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

// Scroll to top 
const scrolltp = document.querySelector("#scrolltp");
scrolltp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// to display in the 2nd section  
window.addEventListener("scroll", function () {
    if (window.scrollY >= 700) {
        scrolltp.style.opacity = 1;
    } else {
        scrolltp.style.opacity = 0;
    }
});

// Theme
const themeToggle = document.querySelector(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark"); //lock dark mode starts here
if (darkmode) {
    body.classList.add("dark");
    themeToggle.checked = true;
}
//end
themeToggle.addEventListener("change", function () {
    body.classList.toggle("dark");

    // Lock the darkmode when your refresh the page 
    if (body. classList.contains("dark")) {
        localStorage.setItem("dark", "active");
    } else {
        localStorage.removeItem("dark");
    }
});