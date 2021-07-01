$(document).ready( function(){

$("#search-filtier-icon").click(function() {
$(".search-filtier").slideToggle("slow");
});

/* تحضير قائمة التصفيه */  
 
$("input:checkbox").click(function () {
 var $box = $(this);

 if ($box.is (":checked")) {
     var group = "input:checkbox[name ='" + $box.attr("name") + "']";
     $(group).prop("checked",false);
     $box.prop("checked",true);
 }

});

});