let display = document.querySelector(".display-content");

display.innerHTML = 0;

let button = document.querySelectorAll(".btn");

button.forEach(function(button){
    button.addEventListener("click",function(e){
        if(e.target.innerHTML=='c'){
            display.innerHTML = 0;
        }else if(e.target.innerHTML=='='){
             display.innerHTML = eval(display.innerHTML);
        }else{
            if(display.innerHTML=='0'){
                display.innerHTML='';
            }
            display.innerHTML += e.target.innerHTML; 
        }

    });

});