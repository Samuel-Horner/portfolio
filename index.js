const html = document.querySelector("html");

// Theme
const darkModeIcon = "/images/dark-mode.svg";
const lightModeIcon = "/images/light-mode.svg";
const themeIcon = document.getElementById("theme-toggle");

let theme = localStorage.getItem("theme");
if (!theme) {
    theme = "light";
    localStorage.setItem("theme", "light");
}

setTheme();

function changeTheme() {
    theme = theme == "dark" ? "light" : "dark";
    setTheme();
}

function setTheme() {
    if (theme == "dark") {
        darkMode();
    } else {
        lightMode();
    }
}

function darkMode() {
    html.setAttribute("data-theme", "dark");
    themeIcon.src = darkModeIcon;
    localStorage.setItem("theme", "dark");
}

function lightMode() {
    html.setAttribute("data-theme", "light");
    themeIcon.src = lightModeIcon;
    localStorage.setItem("theme", "light");
}

// Progress Bar
// https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
const progressBar = document.getElementById("progress-bar");
const scroller = document.getElementById("content");
scroller.onscroll = function () {
    progressBarUpdate();
};

function progressBarUpdate() {
    const height = scroller.clientHeight;
    const scrollHeight = scroller.scrollHeight - height;
    const scrollTop = scroller.scrollTop;
    const percent = scrollTop / scrollHeight * 100;
    progressBar.style.flexBasis = Math.min(percent, 100) + "%";
}

