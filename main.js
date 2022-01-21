let turn = "X";
let gameover = false;
let winaudio = new Audio('/Tic-Tac-Toe/winaudio.mp3')
let clickaudio = new Audio('/Tic-Tac-Toe/click.wav')
document.querySelector(".gameContainer").style.display = "none";



// function for changing turn
function changeturn() {


    clickaudio.play()
    if (turn === "X") {
        return "O";
    }
    else {
        return "X";
    }

}

// function for checking win
function checkWin(p1, p2) {
    let boxtext = document.getElementsByClassName('boxText');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(e => {
        // e=each element of win in loop 
        // e[0]=0,3,6,0,1...(first element of each array of win)
        // boxtext[n]=nth box having class boxText
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            var winner;
            if (turn === "X") {
                winner = p2;
            }
            else { winner = p1; }
            document.querySelector('#info').innerText = winner + ' won';
            gameover = true
            document.getElementById('cogradulation').style.width = '250px';
            document.getElementById('xogif').style.width = '0px';

            document.querySelector('#info').style.fontSize = '3vw';
            document.querySelector('#info').style.paddingTop = '2px';
            document.querySelector('#info').style.paddingBottom = '2px';
            document.querySelector('#info').style.color = 'rgb(255 24 24)';
            winaudio.play();
        }
    })
}

//  
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        var p1 = document.querySelector('#p1').value;
        var p2 = document.querySelector('#p2').value;
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            var name;
            if (turn === "X") {
                name = p1;
            }
            else { name = p2 }
            checkWin(p1, p2);
            if (!gameover) {
                document.getElementById("info").innerText = "Turn for " + name;
            }
        }
    })
});

// reset btn
function reset() {
    // alert('dds')
    let boxtext = document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    gameover = false
    document.getElementById("info").innerText = "Turn for " + turn;
    document.getElementById('cogradulation').style.width = '0px';
    document.getElementById('xogif').style.width = '135px';
    document.querySelector('#info').style.fontSize = '20px';
    document.querySelector('#info').style.color = 'black';
    document.querySelector('#info').style.paddingTop = '14px';
    document.querySelector('#info').style.paddingBottom = '14px';
    var p1 = document.querySelector('#p1').value;
    document.getElementById("info").innerText = "Turn for " + p1;
}

//  taking name

function start() {
    // var p1 =document.querySelector('#p1').value;
    // var p2 =document.querySelector('#p2').value;
    document.getElementById("intro").style.display = "none";
    document.querySelector(".gameContainer").style.display = "flex";
    var p1 = document.querySelector('#p1').value;
    document.getElementById("info").innerText = "Turn for " + p1;
    // alert(p1)


    // alert('fe')
}
