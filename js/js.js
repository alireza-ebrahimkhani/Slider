document.addEventListener('DOMContentLoaded', (event) => {
    const slider_div = document.querySelectorAll(".slider")
    slider_div.forEach(function (thisSlider) {
        let imgWrapper_div = thisSlider.querySelector(".slider__imgWrapper");
        let slide_div = thisSlider.querySelectorAll(".slider__slide");

        let arrows_div = document.createElement("div");
        arrows_div.classList.add("slider__arrows");
        thisSlider.appendChild(arrows_div);
        let leftArrow_img = document.createElement("img");
        leftArrow_img.classList.add("slider__leftArrow");
        leftArrow_img.src = "assets/leftArrow.png";
        arrows_div.appendChild(leftArrow_img);
        let rightArrow_img = document.createElement("img");
        rightArrow_img.classList.add("slider__rightArrow");
        rightArrow_img.src = "assets/rightArrow.png";
        arrows_div.appendChild(rightArrow_img);

        var currentSlide = 1;
        //console.log(img_img);
        rightArrow_img.addEventListener("click",function(){
            for(var i =0; )
            slide_div.forEach(function(thisSlide , index){
                //console.log(thisSlide, index);
                if(thisSlide.classList.contains("slider__slide--show")){
                    thisSlide.classList.remove("slider__slide--show");
                    currentSlide = index + 1;
                    console.log (currentSlide);
                    thisSlide.nextElementSibling.classList.add("slider__slide--show");
                }
                
            });
        });
        leftArrow_img.addEventListener("click",function(){
            console.log(slide_div);
        });
    });
})
