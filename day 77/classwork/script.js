const images = [
    // ""
]

let count = 0;

nextBtn.addEventListener("click", function(){
    count += 1;
 
    if(count >= images.length){
        count = 0;
    }

    images.src = images[count];
})

pervBtn.addEventListener("click", function(){
    count -= 1;

    if(count < 0){
        count = images.length - 1;
    }

    img.src = images[count];
})
