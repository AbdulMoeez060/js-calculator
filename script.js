var currNum="",prevNum="",operator="";

const digits = document.querySelectorAll('[data-num]')
const mainNum = document.querySelector('.lower');
const del = document.querySelector('[data-del]');



document.addEventListener('keydown',getNum)
document.addEventListener('keydown',delDigit)


digits.forEach(digit => {
    digit.addEventListener('click',getNum)

})

del.addEventListener('click',delDigit);

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

function delDigit(e){
    if ((e instanceof KeyboardEvent && e.key==='Backspace')||e instanceof PointerEvent) {
        if (currNum.length>0) {
            currNum = currNum.slice(0,-1)
            updateMainNum(currNum)
            
        }
    }
}