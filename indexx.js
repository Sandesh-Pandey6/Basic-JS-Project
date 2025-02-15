let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let trun= true; 

const winpatteerns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,6],
    [2,4,6]    
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was being clicked by you");
        if (trun) {
            box.innerText = "X";
            trun= false;
        }else{
            box.innerText = "O";
            trun = true;
        }
        box.disabled = true;

    });
});

const checkwinner = () => {
    for pos1val = boxes{pattern}
    
}