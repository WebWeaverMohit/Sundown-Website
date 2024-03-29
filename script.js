var fixed = document.querySelector("#fixed-image")
var elemcon = document.querySelector("#elem-container")

elemcon.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
})

elemcon.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
})

var elems = document.querySelectorAll(".elem")

elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

document.querySelector("#pro").addEventListener("click", function(){
    document.querySelector('#img1').classList.add('imageHide') 
    document.querySelector('#img3').classList.add('imageHide') 
    document.querySelector('#img2').classList.remove('imageHide')
    document.querySelector("#des").style.opacity = "30%"
    document.querySelector("#exe").style.opacity = "30%"
    document.querySelector("#pro").style.opacity = "100%"
    document.querySelector("#para").innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
})

document.querySelector("#exe").addEventListener("click", function(){
    document.querySelector('#img1').classList.add('imageHide') 
    document.querySelector('#img2').classList.add('imageHide') 
    document.querySelector('#img3').classList.remove('imageHide') 
    document.querySelector("#des").style.opacity = "30%"
    document.querySelector("#exe").style.opacity = "100%"
    document.querySelector("#pro").style.opacity = "30%"
    document.querySelector("#para").innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
})

document.querySelector("#des").addEventListener("click", function(){
    document.querySelector('#img2').classList.add('imageHide') 
    document.querySelector('#img3').classList.add('imageHide') 
    document.querySelector('#img1').classList.remove('imageHide') 
    document.querySelector("#des").style.opacity = "100%"
    document.querySelector("#exe").style.opacity = "30%"
    document.querySelector("#pro").style.opacity = "30%"
    document.querySelector("#para").innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
  });