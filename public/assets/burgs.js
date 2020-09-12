$(function(){
    $(".create-form").on("submit",function(event){
        event.preventDefault();
        var newBurg={
            name: $("#ca").val().trim(),
        };
        $.ajax("/api/burgs",{
            type:"POST",
            data:newBurg
        }).then(
            function(){
                console.log("attempted a new creation");
                location.reload();
            }
        );
    });
});