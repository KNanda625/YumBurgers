$(document).ready(function() {

    // PUT to update burger to devoured
    $(".devour").on("click", function(event){
        event.preventDefault();

        let burger_id = $(this).attr("data-id");
        console.log(burger_id);

        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + burger_id
        }).then(function(data) {
            location.reload()
        })

        // do something with burger_id
        // update burger where id = burger_id to be devoured=true
    
    })

})