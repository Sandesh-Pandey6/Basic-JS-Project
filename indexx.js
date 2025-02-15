let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let turn = true; // Fixed typo from 'trun' to 'turn'

const winpatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] 
];

//Clears and enables boxes
const enableBoxes = () => {
    boxes.forEach(box => {
        box.innerText = ""; // Clears X and O
        box.disabled = false; // Enable clicks
    });
};

const disableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked!");
        if (turn) {
            box.innerText = "X";
            turn = false;
        } else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkWinner(); // Calling winner function
    });
});

const displayWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`; // Fixed typo
    msgcont.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    winpatterns.forEach(pattern => {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            console.log("Winner detected:", val1);
            displayWinner(val1);
        }
    });
};

const btnReset = () => {
    turn = true;
    msgcont.classList.add("hide"); // Hide message
    boxes.forEach(box => {
        box.innerText = ""; // Clear text
        box.disabled = false; // Enable clicks
    });
};

//event listeners
newbtn.addEventListener("click", btnReset);
resetbtn.addEventListener("click", btnReset);
