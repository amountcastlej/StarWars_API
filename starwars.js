$('button').click(function(){
    count=Math.floor((Math.random()*10) + 1);
    console.log("The button was clicked")
    $.ajax({
        url: `https://swapi.dev/api/people/${count}`,
        success: function(res){
            console.log(res.name);
            $('h4').text(res.name);
        }
    })
})