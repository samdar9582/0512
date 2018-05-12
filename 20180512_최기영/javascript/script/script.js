var n = 0;
var last = $(".imgs").find("img").length - 1;

$(".imgs").find("img").not(last).css("margin-left", "-2000px");

setInterval(function(){
    $(".imgs").find("img").eq(n).css("margin-left", "0");
    $(".imgs").find("img").not(":eq(" + n + ")").css("margin-left", "-2000px");
    
    var last = $(".imgs").find("img").length - 1;
    
    if (n == last){
        n = 0;
    }else{
        n++;
    }
}, 2000);