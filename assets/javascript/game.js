$('#start-window').hide();
$('#done-window').hide();

/*window.onload = function() {
    $('#trivia-game').hide();
    
    $("#start-btn").on("click", startGame);
};*/

var count = 60;
var timer = $('#timer');
timer.html(count);

setInterval(timeIt, 1000);




if (count == 0){
    done();
}


$('#submit-btn').on('click', function(){
    done();

    $('#trivia-game').hide();
    $('#done-window').show();
});

$('#restart-btn').on('click', function(){
    location.reload();
});


function done(){


}

function timeIt(){
    if (count > 0){
        count--;

        timer.html(count);    
    }
    
    
}

function startGame() {
    $('#trivia-game').show();
    $('#start-window').hide();
}



