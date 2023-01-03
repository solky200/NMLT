let turn = true;
let clickedCount = 0;
let btnRef = document.querySelectorAll(".btn");

function play(btn) {
    btn.innerText = turn ? 'X' : 'O'
    btn.classList.add(turn ? 'xbtn' : 'obtn')
    btn.setAttribute('disabled', 'disabled')
    turn = !turn
    clickedCount++

    if (clickedCount == 9) {
        alert('Game is finished!')
    }
    winChecker();
}

let winnningPattern = [[0, 1, 2], [0, 3, 6], [2, 5, 8], [6, 7, 8], [3, 4, 5], [1, 4, 7], [0, 4, 8], [2, 4, 6]];
const winChecker = () => {
    for (let i of winnningPattern) {
        console.log(btnRef)
        let [element1, element2, element3] = [btnRef[i[0]].innerText, btnRef[i[1]].innerText, btnRef[i[2]].innerText,];
        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 == element2 && element2 == element3) {
                winFunction(element1);
            }
        }
    }
}
const winFunction = (letter) => {
    if (letter == "X") {
        alert("X wins");
        gameOver();
    } else {
        alert("O wins");
        gameOver();
    }
}


function resetGame() {
    if (!confirm('Bạn có muốn chơi lại không ?')) {
        return;

    }
    let btns = document.getElementsByClassName('btn')
    for (const element of btns) {
        element.innerText = ''
        element.classList.remove('xbtn');
        element.classList.remove('obtn');
        element.removeAttribute("disabled");
        turn = true
        clickedCount = 0;
    }
}

