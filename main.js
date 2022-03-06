function start(){
    document.getElementById("info_box").classList.add("info_active");
}
function exit(){
    document.getElementById("info_box").classList.remove("info_active");
}
function con(){
    document.getElementById("player_name").classList.add("player_box_active");
    document.getElementById("info_box").classList.remove("info_active");
}
function back(){
    document.getElementById("player_name").classList.remove("player_box_active");
    document.getElementById("info_box").classList.add("info_active");
}
function ok1(){
    document.getElementById("ok1").innerHTML = "✓";
}
function ok2(){
    document.getElementById("ok2").innerHTML = "✓";
}
function con1(){
    player_1 = document.getElementById("player1").value;

    ok1();
}
function con2(){
    player_2 = document.getElementById("player2").value;

    ok2();
}
