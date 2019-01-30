var a= prompt("剪刀，石頭，布");
var b=Math.random();
if(b<=0.33){
    b="剪刀";
}
else if(b<=0.67){
    b="石頭";
}
else{
    b="布";
}
alert("電腦出"+b);
if(a==b){
  alert("平手");
}
else if(a=="剪刀"){
    if(b=="布"){
        alert("玩家獲勝");
    }
    else{
        alert("電腦獲勝");
    }
}
else if(a=="石頭"){
    if(b=="剪刀"){
        alert("玩家獲勝");
    }
    else{
        alert("電腦獲勝");
    }
}
else{
    if (b=="剪刀"){ 
        alert("電腦獲勝");
    }
    else {
        alert("玩家獲勝");
    }
}