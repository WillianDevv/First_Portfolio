$(window).scroll( () => {
    parallax()
} )

// Obtenez la valeur top d'un élément avec l'ID "monElement"
var topValue = $("#part2").offset().top;
// console.log(topValue); 

// parallax effect
function parallax(){

    let vScroll = $(window).scrollTop();

    $("#part2").css("top", 250 + (-vScroll*0.95)+"px")

    $("#elmt1").css("top", 0 + (vScroll*0.35)+ "px")
    $("#elmt3").css("top", 400 + (-vScroll*0.5)+ "px")


    $("#elmt12").css("top", 1370 + (-vScroll*0.45)+ "px")
    $("#elmt32").css("top", 1500 + (-vScroll*0.25)+ "px")
    $("#elmt62").css("top", 1500 + (-vScroll*0.5)+ "px") 


    $("#icon1").css("top",-180 + (vScroll*0.30)+ "px")
    $("#icon2").css("top",1150 + (-vScroll*0.35)+ "px")

    $("#elmt33").css("top",95 + (-vScroll*0.03) + "%")
    $("#elmt23").css("top",-10 + (vScroll*0.02) + "%")
    $("#elmt43").css("top",105 + (-vScroll*0.015) + "%")

    $("#devider").css("top", 1450 + (-vScroll*0.45)+ "px")


    // console.log(vScroll)

    // function for show the second nav bar
    if(vScroll > 150) {
        $(".navBar").stop().animate({
            opacity : "100%",
            top : "0"
        },100)
    }else{
        $(".navBar").stop().animate({
            opacity : "0%",
            top : "-40px"
        },70)
    }
  
}