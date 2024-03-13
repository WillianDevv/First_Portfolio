window.onload = () => {
    
    titrehome();
    cursorHover();
    sae105();
    check();
}

let intervalId;

// Animation in home page
function titrehome2 (){
    document.getElementById("home_h11").innerHTML = "Moi c'est"
    document.getElementById("home_h12").innerHTML = "Willian"
    $("#home_h11").css("top","350px")
    $(".homeh1").css("marginLeft","220px")
    homefx()
    clearInterval(intervalId)
    intervalId = setInterval(titrehome, 3000);     
}

function titrehome () {
    document.getElementById("home_h11").innerHTML = "Bienvenue Sur"
    document.getElementById("home_h12").innerHTML = "Mon Portefolio"
    $("#home_h11").css("top","350px")
    $(".homeh1").css("marginLeft","0")
    homefx()
    clearInterval(intervalId)
    intervalId = setInterval(titrehome2, 5000); 
}

function homefx (){
    $("#home_h11").animate({
        top : "250px"
    })
}

// effect on mouse over the sae box
let sae105 = function (){

    $(".boxInfo").mouseover( () => {
        $(".boxInfoChil").css("display","none")
        $("#voir").css("display","block")
    }).mouseout( ()=> {
        $(".boxInfoChil").css("display","block")
        $("#voir").css("display","none")
    })
}

sae105()

// function for the circle cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) =>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + "px";
} )

// function for cursor view
function view () {
    $(".view").mouseover( () =>{
        $(".cursor").stop().animate({
            width : "80px",
            height : "80px"
        },200)
        $("#view").css("display","block");
        $(".view").css("cursor", "none");
        $("#view").css("cursor","none");
    } ).mouseout( () => {
        $(".cursor").stop().animate({
            width : "50px",
            height : "50px"
        },200)
        $("#view").css("display","none");
    } )
}

view()

// function for cursor "go" (show a arrow)
let cursorHover = function() {
  
    $(".arrowHover").mouseover(() => {
        $(".cursor").stop().animate({
            width : "80px",
            height : "80px"
        },200)
        $("#arrow").css("display","block");
        $(".arrowHover").css("cursor","none");
    }).mouseout(() => {
        $(".cursor").stop().animate({
            width : "50px",
            height : "50px"
        },200)
        $("#arrow").css("display","none");
    });

    $(".saeBox").click( () => { window.open("http://willian.maung.mmi-velizy.fr/SAE105/","_blank")  } )
};

// show the screen zoom when mouseover
let saehover = () => {

    $("#screen_detect").mouseover( () =>{
        $("#screen2hover").stop().animate({opacity : "1"},200)
      
    } ).mouseout( () => {
        $("#screen2hover").stop().animate({opacity : "0"},200)
    } )

    $("#screen_detect2").mouseover( () =>{
        $("#screen1hover").stop().animate({opacity : "1"},200)
    } ).mouseout( () => {
        $("#screen1hover").stop().animate({opacity : "0"},200)
    } )

}

saehover()

// Show the cv when click on button
function cv_show () {

    let show = true; 

    $(".cvBTN").click( () => {
        show = !show;
        if (show){
            $("#popup").css("display","none")
        } else  {
            $("#popup").css("display","flex")
        }
    } )

}

cv_show()


$(".fa-rectangle-xmark").click( ()=>{
    $("#shadow_form").css("display","none")
} )

let check = function () {


//  effect when click on send button
$("#send").click( ()=>{
    $("#sendText").animate({
        top : "10px",
        opacity : "0%",
    }).animate({top : "-25px"})

    $("#check").stop().animate({
        opacity : "100%",
        top : "40%"
    }).animate({
        top : "50%",
        opacity : "0"
    }).animate({top : ""})

    $("#sendText").animate({
        top : "0px",
        opacity : "100%",
    })
} )
    
}

