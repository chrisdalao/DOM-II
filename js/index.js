// Your code goes here
//Elements
const navBtnArr = document.querySelectorAll("a");
const imagesArr = document.querySelectorAll("img");
const pTagArr = document.querySelectorAll("p");
const containerDiv = document.querySelector(".home");
const alertDiv = document.createElement("div");
const moreBtn = document.createElement("button");


window.addEventListener('scroll', function () {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (scrolled === scrollable && document.documentElement.scrollHeight <= 1980) {
        alertDiv.setAttribute("class", "bottom-alert-div");
        alertDiv.textContent = "You've reached the bottom of the page! CONGRATULATIONS!";
        alertDiv.classList.toggle('large');
        containerDiv.appendChild(alertDiv);
    }

})
//Event Listeners


navBtnArr.forEach(function (navBtn) {
    navBtn.addEventListener('click', function (event) {
        navBtn.style.color = "white";
        navBtn.style.padding = "10px";
        navBtn.style.backgroundColor = "#17A2B8";
        navBtn.style.borderRadius = "4px";
        event.preventDefault();
    })


    navBtn.addEventListener('mouseleave', function () {
        navBtn.style.color = "#212529";
        navBtn.style.padding = "0px";
        navBtn.style.backgroundColor = "white";
        navBtn.style.borderRadius = "0px";
    })


})

imagesArr.forEach(function (image) {

    image.addEventListener('dragend', function () {
        image.style.display = "none";
    })

    image.addEventListener('dblclick', function () {
        image.classList.toggle('large');
    })

    alertDiv.addEventListener('dblclick', function () {
        window.scrollTo(0, 0);
        location.reload();
        image.style.display = "block";
    })

})


pTagArr.forEach(function (pTag) {

    pTag.addEventListener('dblclick', function () {
        pTag.classList.toggle('large');
    });

    pTag.addEventListener('mouseleave', function () {
        if (pTag.classList.toggle('large')) {
            pTag.classList.toggle('large');
        };
    });

});



