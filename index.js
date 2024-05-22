const btns = document.querySelectorAll(".btn")
const resertBtn = document.querySelector("#resert-btn")
const msgContainer = document.querySelector(".msg-container")
const newGameBtn = document.querySelector("#new-btn")
const msg = document.querySelector("#msg")

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
}

btns.forEach((btns)=>{

    btns.addEventListener("click" ,()=>{
        console.log("box was clicked");
        if (turn0) {
            //player0
            btns.innerText = "0";
            turn0 = false;
        }
        else{
            //playery
            btns.innerText = "X";
            turn0 = true;
        }
        btns.disabled = true;
        checkWinner();
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
    }
}

const showWinner = (winner) =>{
msg.innerText = `congrats winner is ${winner}`
msgContainer.classList.remove("hide")
disableBtns()
}


const tie = (tie) =>{

}

const checkWinner = () =>{

    for(let pattern of winPattern){
        // console.log(pattern[0], pattern[1], pattern[2])
        // console.log(
        //     btns[pattern[0]].innerText ,
        //     btns[pattern[1]].innerText, 
        //     btns[pattern[2]].innerText

        // );

        const posValue1 =   btns[pattern[0]].innerText;
        const posValue2 =   btns[pattern[1]].innerText;
        const posValue3 =   btns[pattern[2]].innerText;

        if(posValue1 != "" && posValue2 != "" && posValue3 != ""){

            if(posValue1 === posValue2 && posValue2 === posValue3){

              

                console.log("winner" , posValue1);
                showWinner(posValue1);
            }
            else{
                console.log("tie")
            }
           

            
        }
    }
}


newGameBtn.addEventListener("click" , resetGame);
resertBtn.addEventListener("click" , resetGame)
