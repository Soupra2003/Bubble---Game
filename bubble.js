function makebubble(){
    var cluttter = "";

for (var i =1; i<=102;i++){
    var random = Math.floor(Math.random()*10)
    cluttter += `<div class="bubble">${random}</div>`;
}
document.querySelector(".btom").innerHTML = cluttter;
}

var timer = 60;
function runtimer(){
     var ti = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timmer").textContent = timer;
        }else{
            document.querySelector(".btom").innerHTML = `<h1 id = "center">Game Over !
            Your Score is ${score}  Refresh it to Restart</h1>`;
            

            clearInterval(ti);
        }
        
    }, 1000);
}

var hitrn = 0;
function gethit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvar").textContent = hitrn;
}

var score =0;
function innerscore(){
    score += 5;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".btom").addEventListener("click", function(details){
    var clicknum = Number(details.target.textContent);
    console.log(clicknum);
    if(clicknum === hitrn){
        innerscore();
        makebubble();
        gethit();
    }
   
    
});





runtimer();
makebubble();
gethit();