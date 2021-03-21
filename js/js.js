document.addEventListener('DOMContentLoaded', (event) => {
    const slider_div = document.querySelectorAll(".slider")
    slider_div.forEach(function (thisSlider) {
        let imgWrapper_div = thisSlider.querySelector(".slider__imgWrapper");
        let slide_div = thisSlider.querySelectorAll(".slider__slide");
        slide_div[0].classList.add("slider__slide--show");
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
        
        let index_div = document.createElement("div");
        index_div.classList.add("slider__index");
        thisSlider.appendChild(index_div);
        for (let j = 0; j < slide_div.length; j++){
            let line_div = document.createElement("div");
            line_div.classList.add("slider__line");
            index_div.appendChild(line_div);
        }
        let line_div = index_div.querySelectorAll(".slider__line");
        line_div[0].classList.add("slider__line--active");

        //console.log(img_img);
        rightArrow_img.addEventListener("click",function(){
            for (let i = 0; i < slide_div.length; i++){
                if(slide_div[i].classList.contains("slider__slide--show")){
                    slide_div[i].classList.remove("slider__slide--show");
                    line_div[i].classList.remove("slider__line--active");
                    slide_div[i].setAttribute("class" , "slider__slide ");
                    slide_div[i].classList.add("rtl--out");
                    if(i > slide_div.length-2){
                        i=0;
                        line_div[i].classList.add("slider__line--active");
                        slide_div[i].setAttribute("class", "slider__slide slider__slide--show")
                        slide_div[i].classList.add("rtl--in");
                    }else{
                        line_div[i+1].classList.add("slider__line--active");
                        slide_div[i+1].setAttribute("class", "slider__slide slider__slide--show")
                        slide_div[i+1].classList.add("rtl--in");
                        break;
                    } 
                }
            }
        });
        leftArrow_img.addEventListener("click",function(){
            for (let i = 0; i < slide_div.length; i++){
                if(slide_div[i].classList.contains("slider__slide--show")){
                    slide_div[i].classList.remove("slider__slide--show");
                    line_div[i].classList.remove("slider__line--active");
                    slide_div[i].setAttribute("class" , "slider__slide ");
                    slide_div[i].classList.add("ltr--out");
                    if(i < slide_div.length-2){
                        i=slide_div.length-1;
                        console.log(slide_div.length-1)
                        slide_div[slide_div.length-1].classList.add("slider__slide--show");
                        line_div[slide_div.length-1].classList.add("slider__line--active");
                        slide_div[i].setAttribute("class", "slider__slide slider__slide--show")
                        slide_div[i].classList.add("ltr--in");
                    }else{
                        slide_div[i-1].classList.add("slider__slide--show");
                        line_div[i-1].classList.add("slider__line--active");
                        slide_div[i-1].setAttribute("class", "slider__slide slider__slide--show")
                        slide_div[i-1].classList.add("ltr--in");
                        break;
                    }
                }
            }
        });
    });
});
