question_turn = "player1";
answer_turn = "player2";
document.getElementById("player1_name").innerHTML = localStorage.getItem("player1_name");
document.getElementById("player2_name").innerHTML = localStorage.getItem("player2_name");

display_turn();
function display_turn() {
    if(question_turn == "player1") {
        document.getElementById("player_question").innerHTML = "Question Turn - " + localStorage.getItem("player1_name");
    }
    else{
        document.getElementById("player_question").innerHTML = "Question Turn - " + localStorage.getItem("player2_name");
    }
    
    if(answer_turn == "player1") {
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + localStorage.getItem("player1_name");
    }
    else {
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + localStorage.getItem("player2_name");
    }
}

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    
    question_number = "<h4>" + number1 + " X "+ number2 + "</h4>";
    input_box = "<br> Answer: <input type='text' id='input_check_box'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
}

function switch_turn() {
    if(question_turn == "player1") {
        question_turn = "player2";
    }
    else{
        question_turn = "player1";
    }
    
    if(answer_turn == "player1") {
        answer_turn = "player2"
    }
    else {
        answer_turn = "player1"
    }
}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    if(get_answer == actual_answer) {
        if(answer_turn == "player1") {
            player1_score = document.getElementById("player1_score").innerHTML;
            update_player1_score = parseInt(player1_score, 10) + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
           
        }
        else {
            player2_score = document.getElementById("player2_score").innerHTML;
            update_player2_score = parseInt(player2_score, 10) + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    
    } 

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    switch_turn();
    display_turn();
}


