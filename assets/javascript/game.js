window.onload = function() {
    $('#trivia-game').hide();
    $('#done-window').hide();
    $("#start-btn").on("click", startGame);
};

var count = 60;


var timer = $('#timer');
var correct = 0;
var incorrect = 0;
var blank = 0;


timer.html(count);

setInterval(timeIt, 1000);


if (count == 0){
    done();
}


$('#submit-btn').on('click', done);

$('#restart-btn').on('click', function(){
    location.reload();
});




function done(){


    var checkboxes = document.getElementsByName('question1');
    var vals1 = "";
    for (var i=0; i<checkboxes.length;i++) 
    {
        if (checkboxes[i].checked) 
        {
            vals1 += checkboxes[i].value;
        }
    }

    
    if (vals1 == 15){
        correct++;

        console.log('question 1 is right');
    }
    else if (vals1 == ""){
        blank++;

        console.log('question 1 is blank');
    }
    else {
        incorrect++;

        console.log('question 1 is wrong');
    }


    if ($('#question-2').find('input:checked').val() == 1){
        correct++;

        console.log('question 2 is right');
    }
    else if ($('#question-2').find('input:checked').val() == undefined){
        blank++;

        console.log('question 2 is blank');
    }
    else {
        incorrect++;

        console.log('question 2 is wrong');
    }

    if ($('#question-3').find('input:checked').val() == 3){
        correct++;

        console.log('question 3 is right');
    }
    else if ($('#question-3').find('input:checked').val() == undefined){
        blank++;

        console.log('question 3 is blank');
    }
    else {
        incorrect++;

        console.log('question 3 is wrong');
    }

    if ($('#question-4').find('input:checked').val() == 3){
        correct++;

        console.log('question 4 is right');
    }
    else if ($('#question-4').find('input:checked').val() == undefined){
        blank++;

        console.log('question 4 is blank');
    }
    else {
        incorrect++;

        console.log('question 4 is wrong');
    }


    $('#trivia-game').hide();
    $('#done-window').show();

    $('#num-correct').html(correct);
    $('#num-incorrect').html(incorrect);
    $('#num-blank').html(blank);
    
    
    

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

    setInterval(timeIt, 1000);
}



