// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector(".darkmode-toggle");

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add("darkmode");
    // 2. Update darkMode in localStorage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove("darkmode");
    // 3. Update darkMode in localStorage
    localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
    // get their darkMode setting
    darkMode = localStorage.getItem("darkMode");

    // if it not current enabled, enable it
    if (darkMode !== "enabled") {
        enableDarkMode();
        // if it has been enabled, turn it off
    } else {
        disableDarkMode();
    }
});

// Add show/hide navbar function when scrolling
let lastScrollTop; // This Varibale will store the top position

const navbar = document.getElementsByClassName("navbar")[0]; // Get The NavBar

// Hide/show bar when scrolling just if viewport width below 835px
window.addEventListener("scroll", function () {
    //on every scroll this funtion will be called

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //This line will get the location on scroll

    if (scrollTop > lastScrollTop) {
        //if it will be greater than the previous
        navbar.style.top = "-90px";
        //set the value to the negetive of height of navbar
    } else if (scrollTop < lastScrollTop) {
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop; //New Position Stored
});
