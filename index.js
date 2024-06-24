const btns = document.querySelectorAll(".btn")
const resertBtn = document.querySelector("#resert-btn")
const msgContainer = document.querySelector(".msg-container")
const msgContainer2 = document.querySelector(".tieMatch")
const newGameBtn = document.querySelector("#new-btn")
const newGameBtn2 = document.querySelector("#new-btn2")
const msg = document.querySelector("#msg")
const tieMatch = document.querySelector(".tieMatch")

let turn0 = true ; // playerX , player0
// let count = 0;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = () =>{
    turn0 = true;
    enableBtns();
    msgContainer.classList.add("hide")
    msgContainer2.classList.add("hide")
}

let matchTie = true;
let checkTie = 0

btns.forEach((btns)=>{

    btns.addEventListener("click" ,()=>{
        console.log("box was clicked");
        if (turn0) {
            //player0
            btns.innerHTML = "<img src=\'circle.png\' width=\'50px\' height=\'50px\' class='img1'>"
            turn0 = false;
            
        }
        else{
            //playery
            btns.innerHTML = "<img src=\'cross.png\' width=\'50px\' height=\'50px\' class='img1'>"
            turn0 = true;
        }
        btns.disabled = true;
        checkWinner();

        if(btns.disabled === true){
            checkTie += 1
            console.log(checkTie)
            console.log(matchTie)

            if(checkTie == 9){
                console.log(matchTie)
                matchTieShow()

            }
        }


    });
});

const disableBtns = () => {
    for(let stopbtn of btns ){
        stopbtn.disabled = true;
    
    }
}

const enableBtns = () => {
    for(let stopbtn of btns ){
        stopbtn.disabled = false;
        stopbtn.innerText = ""; 
        checkTie = 0
    }
}

const showWinner = (winner) =>{
msg.innerHTML = `congrats winner is ${winner}`
msgContainer.classList.remove("hide")
disableBtns()
}

const matchTieShow = () =>{
    tieMatch.classList.remove("hide")

}



const checkWinner = () =>{

    for(let pattern of winPattern){
        // console.log(pattern[0], pattern[1], pattern[2])
        // console.log(
        //     btns[pattern[0]].innerText ,
        //     btns[pattern[1]].innerText, 
        //     btns[pattern[2]].innerText

        // );

        const posValue1 =   btns[pattern[0]].innerHTML;
        const posValue2 =   btns[pattern[1]].innerHTML;
        const posValue3 =   btns[pattern[2]].innerHTML;

        if(posValue1 != "" && posValue2 != "" && posValue3 != ""){

            if(posValue1 === posValue2 && posValue2 === posValue3){

              

                console.log("winner" , posValue1);
                showWinner(posValue1);
                matchTie = false
            }
            else{
                console.log("tie")
            }
           

            
        }
    }
}


newGameBtn.addEventListener("click" , resetGame);
newGameBtn2.addEventListener("click" , resetGame);
resertBtn.addEventListener("click" , resetGame)
