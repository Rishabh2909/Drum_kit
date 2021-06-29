
function makesound(key)
{
    switch(key)
    {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play(); 
            break;
        case 'a' || 'A':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's' || 'S':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd' || 'D':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j' || 'J':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k' || 'K':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break; 
        case 'l' || 'L':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;  
        default: console.log(buttonInnerHTML);

    }
}



for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event){

    makesound(event.key);
    buttonAnimation(event.key);
});


function buttonAnimation(currentkey)
{
    var activebutton = document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 100);
}