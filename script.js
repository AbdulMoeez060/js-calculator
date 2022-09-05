var currNum="",prevNum="",operator="";

const digits = document.querySelectorAll('[data-num]')
const mainNum = document.querySelector('.lower');


document.addEventListener('keydown',getNum)
digits.forEach(digit => {
    digit.addEventListener('click',getNum)

})

function getNum(e){
    if (e instanceof KeyboardEvent && (e.key>=0 && e.key <=9)) {
        currNum +=e.key;
        updateMainNum(currNum)
    }
    else if(e instanceof PointerEvent){

        currNum +=e.target.textContent 
        updateMainNum(currNum)
    }
}

function updateMainNum(newNum){
    mainNum.textContent = newNum;
}