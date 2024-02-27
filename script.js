// pos = 0;

// right.onclick = function (){
//     alert(hi);
//     if(pos > -500){
//         pos = pos -100;
//         slider.style.left = pos + "%";
//     } else if (pos == -500){
//         pos = 0;
//         slider.style.left = pos + "%";
//     }
// }

pos = 0;

right.onclick = function(){

    if(pos > 0){
        pos = pos -100
        slider.style.left = pos +"%"
    } else if (pos == 0){
                pos = 400;
                slider.style.left = pos + "%";
            }
}

left.onclick = function(){

    if(pos < 400){
        pos = pos +100
        slider.style.left = pos +"%"
    } else if (pos == 400){
                pos = 0;
                slider.style.left = pos + "%";
            }
}
