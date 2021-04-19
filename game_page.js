var player1_name=localStorage.getItem("Player_1");
var player2_name=localStorage.getItem("Player_2");
var player1_scr=0;
var player2_scr=0;
var question_turn=player1_name;
var answer_turn=player2_name;

document.getElementById("player1_tag").innerHTML=player1_name+" : ";
document.getElementById("player2_tag").innerHTML=player2_name+" : ";

document.getElementById("player1_scr").innerHTML=player1_scr;
document.getElementById("player2_scr").innerHTML=player2_scr;

document.getElementById("player_question").innerHTML="Question turn: "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn: "+player2_name;

function Send_Question(){
    value=document.getElementById("word").value;
    word=value.toLowerCase();
    console.log(word);
    char1=word.charAt(1);
    console.log(char1);
    half_word=Math.floor(word.length/2);
    char2=word.charAt(half_word);
    console.log(char2);
    char_last=word.length-1;
    char3=word.charAt(char_last);
    remove_char1=word.replace(char1,"_");
    remove_char2=remove_char1.replace(char2,"_");
    remove_char3=remove_char2.replace(char3,"_");
    console.log(remove_char3);
    Question="<h4 id='Broken_word'>Q. "+remove_char3+"</h4>";
    input="<br>Answer: <input type='text' id='answer'>";
    button="<br><br><button class='btn btn-primary' onclick='Check()'>Check Here!</button>";
    row=Question+input+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

function Check(){
    answer=document.getElementById("answer").value;
    final_answer=answer.toLowerCase();
    console.log(final_answer);
    if(final_answer==word){
        if(answer_turn==player1_name){
            player1_scr=player1_scr+1;
            document.getElementById("player1_scr").innerHTML=player1_scr;
            answer_turn=player2_name;
            document.getElementById("player_answer").innerHTML="Answer turn: "+answer_turn;
        }
        else{
            player2_scr=player2_scr+1;
            document.getElementById("player2_scr").innerHTML=player2_scr;
            answer_turn=player1_name;
            document.getElementById("player_answer").innerHTML="Answer turn: "+answer_turn;
        }
    }

    if(question_turn==player1_name){
        question_turn=player2_name;
        document.getElementById("player_question").innerHTML="Question turn: "+question_turn;
    }
    else{
        question_turn=player1_name;
        document.getElementById("player_question").innerHTML="Question turn: "+question_turn;
    }

    document.getElementById("output").innerHTML="";

}
