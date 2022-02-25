$(document).ready(function(){
    $(".second").waypoint(function(direction){
        if(direction=="down"){
            $("header").addClass("sticky-nav");
        }else{
            $("header").removeClass("sticky-nav");
        }
    })
});


// $(".features").waypoint(function(direction) {
//     $(".top").addClass('animate__animated animate__fadeIn');
// });

