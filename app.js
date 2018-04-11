$(document).ready(function(){
    $(".card").mouseover(function(){
        $(".card").css("box-shadow", "5px 5px 5px grey");
    });
    $(".card").mouseout(function(){
        $(".card").css("box-shadow", "10px 10px 10px grey");
    });
});
