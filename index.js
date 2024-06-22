const html = document.querySelector("html");

// Theme
const darkModeIcon = "images/dark-mode.svg"
const lightModeIcon = "images/light-mode.svg"
const themeIcon = document.getElementById("theme-toggle")

let theme = "dark";
themeIcon.src = darkModeIcon;

function changeTheme() {
    if (theme == "dark") {
        lightMode();
    } else {
        darkMode();
    }
}

function darkMode() {
    html.setAttribute("data-theme", "dark");
    theme = "dark";
    themeIcon.src = darkModeIcon;
}

function lightMode() {
    html.setAttribute("data-theme", "light");
    theme = "light";
    themeIcon.src = lightModeIcon;
}

// Progress Bar
// https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
const progressBar = document.getElementById("progress-bar");
const scroller = document.getElementById("content");
scroller.onscroll = function () { progressBarUpdate() };

function progressBarUpdate() {
    let height = scroller.clientHeight;
    let scrollHeight = scroller.scrollHeight - height;
    let scrollTop = scroller.scrollTop;
    let percent = scrollTop / scrollHeight * 100;
    progressBar.style.width = percent + "%";
} 