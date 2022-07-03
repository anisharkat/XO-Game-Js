let title = document.querySelector(".title");
let turn = 'x';
function winner (){
    square1 = document.getElementById ("item1").firstChild.innerHTML;
    square2 = document.getElementById ("item2").firstChild.innerHTML;
    square3 = document.getElementById ("item3").firstChild.innerHTML;
    square4 = document.getElementById ("item4").firstChild.innerHTML;
    square5 = document.getElementById ("item5").firstChild.innerHTML;
    square6 = document.getElementById ("item6").firstChild.innerHTML;
    square7 = document.getElementById ("item7").firstChild.innerHTML;
    square8 = document.getElementById ("item8").firstChild.innerHTML;
    square9 = document.getElementById ("item9").firstChild.innerHTML ;
    if (square1===square2&& square2===square3 && square1!==''){
        title.innerHTML = `${square1} Is The Winner`;
        document.getElementById("item1").style.background = "#008000";
        document.getElementById("item2").style.background = "#008000";
        document.getElementById("item3").style.background = "#008000";
        setInterval (function(){
            title.innerHTML += ".";
        },1000);
        setTimeout (function (){location.reload()},4000);
    } else if (square4===square5&& square5===square6 && square4!==''){
        title.innerHTML = `${square4} Is The Winner`;
        document.getElementById("item4").style.background = "#008000";
        document.getElementById("item5").style.background = "#008000";
        document.getElementById("item6").style.background = "#008000";
        setInterval (function(){
            title.innerHTML += ".";
        },1000);
        setTimeout (function (){location.reload()},4000);
    } else if (square7===square8&& square8===square9 && square7!==''){
        title.innerHTML = `${square7} Is The Winner`;
        document.getElementById("item7").style.background = "#008000";
        document.getElementById("item8").style.background = "#008000";
        document.getElementById("item9").style.background = "#008000";
        setInterval (function(){
            title.innerHTML += ".";
        },1000);
        setTimeout (function (){location.reload()},4000);
    } else if (square1===square4&& square4===square7 && square1!==''){
        title.innerHTML = `${square1} Is The Winner`;
        document.getElementById("item1").style.background = "#008000";
        document.getElementById("item4").style.background = "#008000";
        document.getElementById("item7").style.background = "#008000";
        setInterval (function(){
            title.innerHTML += ".";
        },1000);
        setTimeout (function (){location.reload()},4000);
    } else if (square3===square6&& square6===square9 && square3!==''){
        title.innerHTML = `${square3} Is The Winner`;
        document.getElementById("item3").style.background = "#008000";
        document.getElementById("item6").style.background = "#008000";
        document.getElementById("item9").style.background = "#008000";
        setInterval (function(){
            title.innerHTML += ".";
        },1000);
        setTimeout (function (){location.reload()},4000);
    } else if (square2===square5&& square5===square8 && square2!==''){
        title.innerHTML = `${square2} Is The Winner`;
        document.getElementById("item2").style.background = "#008000";
        document.getElementById("item5").style.background = "#008000";
        document.getElementById("item8").style.background = "#008000";
        setInterval (function(){
            title.innerHTML += ".";
        },1000);
        setTimeout (function (){location.reload()},4000);
    } else if (square1===square5&& square5===square9 && square1!==''){
        title.innerHTML = `${square1} Is The Winner`;
        document.getElementById("item1").style.background = "#008000";
        document.getElementById("item5").style.background = "#008000";
        document.getElementById("item9").style.background = "#008000";
        setInterval (function(){
            title.innerHTML += ".";
        },1000);
        setTimeout (function (){location.reload()},4000);
    } else if (square3===square5&& square5===square7 && square5!==''){
        title.innerHTML = `${square3} Is The Winner`;
        document.getElementById("item3").style.background = "#008000";
        document.getElementById("item5").style.background = "#008000";
        document.getElementById("item7").style.background = "#008000";
        setInterval (function(){
            title.innerHTML += ".";
        },1000);
        setTimeout (function (){location.reload()},4000);
    }
}
function game (id){
    let element = document.getElementById(id);
    if (turn === 'x' && element.firstChild.innerHTML === ''){
        element.firstChild.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = "O";

    } else if (turn === 'o' && element.firstChild.innerHTML === ''){
        element.firstChild.innerHTML = "O";
        turn = 'x' ;
        title.innerHTML = "X";
    }
    winner();
}