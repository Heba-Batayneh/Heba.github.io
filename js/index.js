$(document).ready( function(){

$(".first-list-element").addClass("active"); /* يجعل زر الفيديوهات المقترحه في الصفحة الرئيسية تطبق عليها تنسيقات ال active */ 

$(".nav-item").click(function(){
$(".nav-item").removeClass("active");
$(this).addClass("active");
});

$("#toggler").click(function(event) {
$("#warp").toggleClass('toggled');
 
var right = $(".sidebar").css("right");
if(right == '0px') {
    $(".sidebar").css({"right": "-25rem"});
    $(".layer").fadeOut();
}
else {
$(".sidebar").css({"right": "0" });
$(".layer").fadeIn();
}    
});

$(".layer").click(function(){
    $(".sidebar").css({"right": "-25rem"});
    $(".layer").fadeOut();
});

$(".search-icon").click(function(){

    $(".search-input").slideToggle("slow");
});

});