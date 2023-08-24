

function myFunction(){
    let a = document.getElementById("Toggle-btn");
    let b = document.getElementById("Toggle-menu");

    if(b.style.display == "block"){
        b.style.display = "none";
    }
    else{
        b.style.display = "block";
    }
}


function mySlider1(){

    var c = document.getElementById("Mover-div");
    var d = document.getElementById("Previous-btn");
    var e = document.getElementById("Next-btn");
    var f = document.getElementsByClassName("Slider-main-1");

    var i;
        // for(i = 0; i < f.length; i++ ){}
            // c.style.transform = "translate3d(-1236.58px, 0px, 0px)";
            // c.style.transitionDuration = "300ms";
    
    if(c.style.transform == "translate3d(0px, 0px, 0px)"){
        c.style.transform = "translate3d(-1236.58px, 0px, 0px)";
        c.style.transitionDuration = "300ms";
    }
    else if(c.style.transform == "translate3d(-1236.58px, 0px, 0px)"){
        c.style.transform = "translate3d(-2473.16px, 0px, 0px)";
        c.style.transitionDuration = "300ms";
    }
    else if(c.style.transform == "translate3d(-2473.16px, 0px, 0px)"){
        c.style.transform = "translate3d(-3709.74px, 0px, 0px)";
        c.style.transitionDuration = "300ms";
    }
    else{
        c.style.transform = "translate3d(0px, 0px, 0px)";
        c.style.transitionDuration = "300ms";
    }
    
}

function mySlider2(){

    var g = document.getElementById("Mover-div");
    var h = document.getElementById("Previous-btn");
    var j = document.getElementById("Next-btn");
    var k = document.getElementsByClassName("Slider-main-1");

    var i;
        // for(i = 0; i < f.length; i++ ){}
            // c.style.transform = "translate3d(-1236.58px, 0px, 0px)";
            // c.style.transitionDuration = "300ms";
    
    if(g.style.transform == "translate3d(-3709.74px, 0px, 0px)"){
        g.style.transform = "translate3d(-2473.16px, 0px, 0px)";
        g.style.transitionDuration = "300ms";
    }
    else if(g.style.transform == "translate3d(-2473.16px, 0px, 0px)"){
        g.style.transform = "translate3d(-1236.58px, 0px, 0px)";
        g.style.transitionDuration = "300ms";
    }
    else if(g.style.transform == "translate3d(-1236.58px, 0px, 0px)"){
        g.style.transform = "translate3d(0px, 0px, 0px)";
        g.style.transitionDuration = "300ms";
    }
    else{
        g.style.transform = "translate3d(-3709.74px, 0px, 0px)";
        g.style.transitionDuration = "300ms";
    }
    
}

