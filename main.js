var open=1;
var won=0;
var robo =0;
var moves=0;
document.getElementById('toggle-sidebar').addEventListener('click',()=>{
const sideNav = document.getElementById('side-nav');
if (sideNav.style.width === '250px') {
    sideNav.style.width = '0';
    open=1;
} else {
    sideNav.style.width = '250px';
    open=0;
}
});
let roboS=() => {
    if(moves ===0 && robo===0) {
        robo = 1;
        document.getElementById("roboChange").innerHTML="<b>PLAYER mode</b>";
    }
    else if(moves===0&& robo===1) {
        robo=0;
        document.getElementById("roboChange").innerHTML="<b>ROBO mode</b>"
    }
}
let change= () => {
    if(open===1) {
        document.getElementById('toggle-sidebar').innerText= 'CLOSE';
    }
    else {
        document.getElementById('toggle-sidebar').innerText= 'OPEN';
    }
}
let change1=() => {
    const val=document.getElementById('color').value;
    document.body.style.backgroundColor=val;
}

var grid=[[null,null,null],[null,null,null],[null,null,null]];
let currentPlayer='X';
let updateBoard=() => {
    let index=0;
    const box=document.querySelectorAll(".holder");
    for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
            if(grid[i][j]===null) {
                box[index].textContent=" ";
            }
            else if(grid[i][j]==='X') {
                box[index].textContent="X";
            }
            else if(grid[i][j]==='O') {
                box[index].textContent="O";
            }
            index++;
        }
    }
}
var found=0;
var found1=0;
function check() {
    for(i=0;i<3;i++) {
        found=0;
        found1=0;
        for(j=0;j<3;j++) {
            if(grid[i][j]==='X') {
                found++;
            }
            if(grid[i][j]==='O') {
                found1++;
            }
            if(found===3||found1===3) {
                alert(`player:${currentPlayer} won!!`);
                won=1;
                increamentScore(currentPlayer);
            }
        }
    }
    for(i=0;i<3;i++) {
        found=0;
        found1=0;
        for(j=0;j<3;j++) {
            if(grid[j][i]==='X') {
                found++;
            }
            if(grid[j][i]==='O') {
                found1++;
            }
            if(found===3||found1===3) {
                alert(`player: ${currentPlayer} won!!`);
                won=1;
                increamentScore(currentPlayer);
            }
        }
    }
    found=0;
    found1=0;
    for(i=0;i<3;i++) {
        if(grid[i][i]==='X') {
            found++;
        }
        if(grid[i][i]==='O') {
            found1++;
        }
        if(found===3||found1===3) {
            alert(`player:${currentPlayer} won!!`);
            won=1;
            increamentScore(currentPlayer);
        }
    }
    found=0;
    found1=0;
    for(i=0;i<3;i++) {
        if(grid[i][2-i]==='X') {
            found++;
        }
        if(grid[i][2-i]==='O') {
            found1++;
        }
        if(found===3||found1===3) {
            alert(`player:${currentPlayer} won!!`);
            won=1;
            increamentScore(currentPlayer);
        }
    }
    if(moves===9 && won===0) {
        alert("its a draw!!");
        won=1;
    }
}

function move(x,y) {
    if(won===0&& grid[x][y]===null) {
        grid[x][y]=currentPlayer;
        updateBoard();
        moves++;
        check();
    if(currentPlayer==='X' ) {
        currentPlayer='O';
    }
    else {
        currentPlayer='X';
    }
    if(robo===1 && won===0) {
        roboMove();
    }
    }
}
function resetBoard() {
    currentPlayer='X';
    moves=0;
    won=0;
    for(i=0;i<3;i++) {
        for(j=0;j<3;j++) {
            grid[i][j]=null;
        }
    }
    updateBoard();
}
let x,y
function roboMove() {
    if(won===0) {
    do {
        x = Math.floor(Math.random() * 3);
        y = Math.floor(Math.random() * 3);
    }while(grid[x][y]!==null);
    grid[x][y]='O';
    moves++;
    updateBoard();
    check();
    if(won===0) {
    currentPlayer='X';
    }
    console.log("robo move()");
    }
}
let increamentScore=(currentPlayer)=> {
    let scoreX=document.getElementById("scoreX");
    let scoreO=document.getElementById("scoreO");
    if(currentPlayer==='X') {
        scoreX.innerText++;
    }
    else if(currentPlayer==='O') {
        scoreO.innerText++;
    }
}
let resetScore=()=> {
    let scoreX=document.getElementById("scoreX");
    let scoreO=document.getElementById("scoreO");
    scoreO.innerText=0;
    scoreX.innerText=0;
}
const colorPicker = document.getElementById('color');

colorPicker.addEventListener('input', function(event) {
  const selectedColor = event.target.value;
  document.body.style.backgroundColor = selectedColor;
});