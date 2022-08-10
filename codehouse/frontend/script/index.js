document.querySelector(".light").addEventListener("click", function() {
    document.querySelector("body").style.background = "#fff";
})

document.querySelector(".dark").addEventListener("click", function() {
    document.querySelector("body").style.background = "#000";
    document.querySelector(".dashboard-container").style.background = "#fff";
})