// Show button when scrolling down
window.onscroll = function() {
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
const studentFullName = "Mai Hoang Minh";
const studentID = "3123410217";


window.onload = function() {
    document.getElementById("name").value = studentFullName;
    document.getElementById("email").value = `${studentID}@example.com`;
};