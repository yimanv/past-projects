var selected = 0;
var x = document.createElement("TABLE");
x.cellPadding = 5;
var numbers = new Array();
var row = 0;
var game = document.getElementById("game");
var random;
var odd = 0;
var id;
var moves = document.getElementById("moves");
var count = 0;
var symbols = new Array();
var total = new Array();
var total2 = new Array();
var clue = document.getElementById("clues");
var idarray= new Array();
var tz = document.createElement("tr");
var tr = document.createElement("tr");
var td = document.createElement("td");
var tx = document.createElement("td");
var cons = document.getElementById("cons");
var type;
var cover = document.getElementById("cover");
var container = document.getElementById("container");
var char = document.getElementById("char");
function createTable(type) {
    moves.innerHTML = "Moves:0";
    container.removeChild(cover);

 
    x.appendChild(tz);
    tz.appendChild(tx);

    tx = document.createElement("td");
    tz.appendChild(tx);

    tx = document.createElement("td");
    tz.appendChild(tx);

    tx = document.createElement("td");

    tz.appendChild(tx);
    tx = document.createElement("td");

    tz.appendChild(tx);
    tx = document.createElement("td");

    tz.appendChild(tx);

    tx = document.createElement("td");
    tx.innerHTML = "Current Total";
    tz.appendChild(tx);

    tx = document.createElement("td");
    tx.innerHTML = "Expected Total";
    tz.appendChild(tx);



    for (var i = 0; i < 7; i++) {

        var tr = document.createElement("tr");
        tr.setAttribute("id", i);
        x.padding = "30";
        x.border = "1";
        game.appendChild(x);

        if (i % 2 == 1) {
            odd = 1;
        }
        else {
            odd = 0;
        }

        for (var z = 0; z < 8; z++) {

            var td = document.createElement("td");
            x.appendChild(tr);

            td.id = 100 + z + row;

            if (i > 4) {
            }

            else {

                if (odd == 0) {
                    if (z == 1) {

                        numbers.push(randomNum(td));

                    }

                    if (z == 2) {

                        equation(td);
                    }

                    if (z == 3) {


                        numbers.push(randomNum(td));
                    }

                    if (z == 4) {

                        equation(td);
                    }
                    if (z == 5) {


                        numbers.push(randomNum(td));
                    }




                }

                if (odd == 1) {

                    if (z == 1) {

                        equation(td);
                    }
                    if (z == 3) {

                        equation(td);
                    }
                    if (z == 5) {

                        equation(td);
                    }
                }


            }
            tr.appendChild(td);

        }

        row = row + 8;

    }


    
    setTotal();
    calculate();
    setGameType(type);
   
shuffle(numbers);
    setNumbers();
    calculateNow();

    x.style.visibility = "hidden";

}
function randomNum(td) {
    random = Math.random() * 100;
    random = Math.ceil(random);

    idarray.push(td.id); 
    
    
    
	            (function (td) {



	                td.addEventListener("click", function () {
	                    if (selected == 0) {
	                        selected = td.id;
	                        id = document.getElementById(selected);

	                        td.style.backgroundColor = "red";

	                    }

	                    else {
	                        var temp = id.innerHTML;

	                        id.innerHTML = td.innerHTML;

	                        id.style.backgroundColor = "initial";
	                        td.innerHTML = temp;
	                        selected = 0;
	                        count = count + 1;
	                        moves.innerHTML = "Moves :" + count;
	                        calculateNow();

	                     
	                    }


	                }, false);
	            })(td);
	            return random;
            }  

        

function equation(td) {


    random = Math.random() *3;
    random = Math.ceil(random);
    if (random == 1) {
    symbols.push("+");
        td.innerHTML = "+";
    }
    if (random == 2) {
        td.innerHTML = "-";
            symbols.push("-");
    }
    if (random == 3) {
        td.innerHTML = "*";
            symbols.push("*");
    }
  /*  if (random == 4) {
        td.innerHTML = "/";
            symbols.push("/");
    }
    */
}


function shuffle(array) {
    var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function calculate() {
   total.push(Math.ceil( eval(numbers[0] + symbols[0] + numbers[1] + symbols[1] +numbers[2])));
   total.push(Math.ceil(eval(numbers[3] + symbols[5] + numbers[4] + symbols[6] + numbers[5])));
   total.push(Math.ceil(eval(numbers[6] + symbols[10] + numbers[7] + symbols[11] + numbers[8])));
   total.push(Math.ceil(eval(numbers[0] + symbols[2] + numbers[3] + symbols[7] + numbers[6])));
  total.push(Math.ceil(eval(numbers[1]+ symbols[3] + numbers[4] + symbols[8]+numbers[7])));
  total.push(Math.ceil(eval(numbers[2] + symbols[4] + numbers[5] + symbols[9] + numbers[8])));
   document.getElementById("107").innerHTML = total[0];
   document.getElementById("123").innerHTML = total[1];
   document.getElementById("139").innerHTML = total[2];
   document.getElementById("149").innerHTML = total[3];
   document.getElementById("151").innerHTML = total[4];
   document.getElementById("153").innerHTML = total[5];


}

function setTotal() {
    document.getElementById("140").innerHTML = "Current Total";
    document.getElementById("148").innerHTML = "Expected Total";
}
function setNumbers() {

    for (var i = 0; i < idarray.length; i++) {
        
        document.getElementById(idarray[i]).innerHTML = numbers[i];
    }
}

function calculateNow() {
   total2[0]= Math.ceil(eval(document.getElementById("101").innerHTML + symbols[0] + document.getElementById("103").innerHTML + symbols[1] + document.getElementById("105").innerHTML));
  total2[1]= Math.ceil(eval(document.getElementById("117").innerHTML + symbols[5] + document.getElementById("119").innerHTML + symbols[6] + document.getElementById("121").innerHTML));
   total2[2]=Math.ceil(eval(document.getElementById("133").innerHTML + symbols[10] + document.getElementById("135").innerHTML + symbols[11] + document.getElementById("137").innerHTML));
   total2[3]= Math.ceil(eval(document.getElementById("101").innerHTML + symbols[2] + document.getElementById("117").innerHTML + symbols[7] + document.getElementById("133").innerHTML));
   total2[4]= Math.ceil(eval(document.getElementById("103").innerHTML + symbols[3] + document.getElementById("119").innerHTML + symbols[8] + document.getElementById("135").innerHTML));
   total2[5]=Math.ceil(eval(document.getElementById("105").innerHTML + symbols[4] + document.getElementById("121").innerHTML + symbols[9] + document.getElementById("137").innerHTML));

    document.getElementById("106").innerHTML = total2[0];
    document.getElementById("122").innerHTML = total2[1];
    document.getElementById("138").innerHTML = total2[2];
    document.getElementById("141").innerHTML = total2[3];
    document.getElementById("143").innerHTML = total2[4];
    document.getElementById("145").innerHTML = total2[5];

   var victory = 0;
    for (var i = 0; i < total.length; i++) {
        if (total[i] == total2[i]) {
            victory = victory + 1;
            if (victory == 6) {
                moves.innerHTML = "The path is clear! I may proceed! You have done well.";
                var timer = document.getElementById("timer");
               timer.innerHTML = "";
                clue.innerHTML = "";
                game.removeChild(x);
                var eureka= document.getElementById("eureka");
                eureka.play();
                var time = setInterval(function () {
                    var timer = document.getElementById("timer").innerHTML = "Timer:" + seconds;
                    seconds = seconds - 1;
                    if (seconds == -1) {

                        moves.innerHTML = "Defeat";
                        timer.innerHTML = "";
                        clue.innerHTML = "";
                        game.removeChild(x);
                        clearInterval(time);

                    }
                }, 1000);
                clearInterval(time);
                char = document.createElement("img");
                char.setAttribute("src", "char.png");
                game.appendChild(char);
                animate(char);
                var speed = document.getElementById("speed");
                speed.pause();
                var med = document.getElementById("med");
                med.pause();
                var stand = document.getElementById("stand");
                stand.pause();
               

            }
        }
    }
}

function original() {
    type = 3;
    createTable(type);
    var go = document.getElementById("go");
    go.play();
    x.style.visibility = "visible";
    zen.style.visibility = "hidden";
    rapid.style.visibility = "hidden";
    standard.style.visibility = "hidden";
   
}

function rapidfire() {
    type = 2;
    createTable(type);
    var go = document.getElementById("go");
    go.play();
    x.style.visibility = "visible";
    zen.style.visibility = "hidden"; 
    rapid.style.visibility = "hidden";
    standard.style.visibility = "hidden";

}

function normal() {
    type = 1;
    createTable(type);
    var go = document.getElementById("go");
    go.play();
    x.style.visibility = "visible";
    zen.style.visibility = "hidden";
    rapid.style.visibility = "hidden";
    standard.style.visibility = "hidden";


}


function setGameType(type) {
    if (type == 1) {
      
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        div.innerHTML = "The first number is:" + numbers[0];
        clue.appendChild(div);

        div2.innerHTML = "The middle is:" + numbers[4];
        clue.appendChild(div2);

        div3.innerHTML = "The last number:" + numbers[8];
        clue.appendChild(div3);
        var stand = document.getElementById("stand");
        stand.play();
        stand.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);


    }

    if (type == 2) {

        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4= document.createElement("div");
        div.innerHTML = "The first number is:" + numbers[0];
        clue.appendChild(div);

        div2.innerHTML = "The middle is:" + numbers[4];
        clue.appendChild(div2);

        div3.innerHTML = "The seventh number:" + numbers[6];
        clue.appendChild(div3);
        div4.innerHTML = "The last number:" + numbers[8];
        clue.appendChild(div4);
        var speed = document.getElementById("speed");
        speed.play();
        countdown();

    }

    if (type == 3) {
        clue.innerHTML = "The middle is:" + numbers[4];
        var med = document.getElementById("med");
        med.play();
        med.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }

}

function countdown() {
    var seconds = 60;
    var time = setInterval(function () {
        var timer = document.getElementById("timer").innerHTML = "Timer:" + seconds;
        seconds = seconds - 1;
        if (seconds == -1) {

            moves.innerHTML = "Defeat. Turn back, your path ends here.";
            timer.innerHTML = "";
            clue.innerHTML = "";
            game.removeChild(x);
            clearInterval(time);
            var speed = document.getElementById("speed");
            speed.pause();

        }
    }, 1000);
}

var zen = document.getElementById("zen");
var rapid = document.getElementById("rapidFire");
var standard = document.getElementById("standard");

zen.addEventListener("click", original, false);
rapid.addEventListener("click", rapidfire, false);
standard.addEventListener("click", normal, false);

animate(char);
function animate(char) {
    var space = 5;

    var anim = setInterval(function () {
        space = space + 5;
        if (space > 1100) {
            space = -200;
        }
        char.setAttribute("hspace", space);
    }, 10);
}