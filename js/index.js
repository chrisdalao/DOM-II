// Your code goes here
//Elements
const navBtnArr = document.querySelectorAll("a");
const imagesArr = document.querySelectorAll("img");
const pTagArr = document.querySelectorAll("p");
//Event Listeners


navBtnArr.forEach(function(navBtn){
    navBtn.addEventListener('click', function(event) {
        navBtn.style.color = "white";
        navBtn.style.padding = "10px";
        navBtn.style.backgroundColor = "#17A2B8";
        navBtn.style.borderRadius = "4px";
        event.preventDefault();
      })

    
    navBtn.addEventListener('mouseover',function(){
        navBtn.style.color = "#212529";
        navBtn.style.padding = "0px";
        navBtn.style.backgroundColor = "white";
        navBtn.style.borderRadius = "0px";
    })

    
})

imagesArr.forEach(function(image){
    // image.addEventListener('dragstart', function(){
    //     image.style.borderRadius = "1000px";
    // })

    image.addEventListener('dragend', function(){
        image.style.display = "none";
    })

    window.addEventListener('scroll', function(){
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        if(scrolled === scrollable && image.style.display === "none"){
            image.style.display = "block";
        }
        
    })

})


pTagArr.forEach(function(pTag){

    pTag.addEventListener('dblclick', function (e) {
        pTag.classList.toggle('large');
      });

    pTag.addEventListener('mouseleave', function(){
        if(pTag.classList.toggle('large')){
            pTag.classList.toggle('large');
        };
    })

});



