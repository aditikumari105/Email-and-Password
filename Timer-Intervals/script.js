let count=0;
let progress=document.querySelector("#progress-bar");
let percentstatus = document.querySelector("#status");
let intv=setInterval(function(){

     if(count<=99){
        count++;
        progress.style.width= `${count}%`;
        percentstatus.textContent= `${count}%`;
     }
     else{
        document.querySelector("h2").textContent="Downloaded";
        clearInterval(intv)     }
},30);