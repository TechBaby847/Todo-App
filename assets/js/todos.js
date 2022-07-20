//check of specific todos by clicking
$("ul").on("click", "li", function(){
    // //if li is grey,turn black 
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     })
    // }
    // //else, turn grey
    // else{
    //     $(this).css({
    //         color: "grey",
    //         textDecoration: "line-through"
    //     });
    // }
    $(this).toggleClass("completed");
});

$("ul").on("click", "span ", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        //getting new todoText from input
       let todoText = $(this).val();
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
    }
});
$(".plus").click(function(){
    $("input[type = 'text']").fadeToggle();
});