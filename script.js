var currNum="",prevNum="",operator="";

const digits = document.querySelectorAll('[data-num]')
const mainDis = document.querySelector('.lower');
const prevDis = document.querySelector('.upper');
const del = document.querySelector('[data-del]');
const symbols = document.querySelectorAll('[data-symbol]');




document.addEventListener('keydown',getNum)
document.addEventListener('keydown',delDigit)


digits.forEach(digit => {
    digit.addEventListener('click',getNum)

})

symbols.forEach(sym=>{
    sym.addEventListener('click',symbolPressed);
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
    mainDis.textContent = newNum;
}

function delDigit(e){
    if ((e instanceof KeyboardEvent && e.key==='Backspace')||e instanceof PointerEvent) {
        if (currNum.length>0) {
            currNum = currNum.slice(0,-1)
            updateMainNum(currNum)
            
        }
    }
}

function symbolPressed(e){
    if (prevNum === "") {
        prevNum = currNum;
        operator = e.target.textContent;
        currNum= "";
        updateMainNum(currNum)
        updatePrevNum(prevNum,operator)
    }
}

function updatePrevNum(prev,op){
    prevDis.textContent = `${prev}${op}`;
}