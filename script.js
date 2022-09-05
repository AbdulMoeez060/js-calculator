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
    if ((prevNum!=="" && operator!=="")||(prevNum==="" && operator==="")) {
        
        if (e instanceof KeyboardEvent && (e.key>=0 && e.key <=9)) {
            currNum +=e.key;
            updateMainNum(currNum)
        }
        else if(e instanceof PointerEvent){
    
            currNum +=e.target.textContent 
            updateMainNum(currNum)
        }
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

    if (prevNum === "" && e.target.textContent !=='=') {
        prevNum = currNum;
        operator = e.target.textContent;
        currNum= "";
        updateMainNum(currNum)
        updatePrevNum(prevNum,operator)
    }
    if (prevNum !=="" && currNum ==="") {
        operator = e.target.textContent;
        updatePrevNum(prevNum,operator)
    }
    if (prevNum !=="" && currNum !=="" && operator !== "") {
        if (operator ==='+') {
            prevNum = add(prevNum,currNum);
        }
        if (operator==='-') {
            prevNum = subtract(prevNum,currNum);
        }
        if (operator==='*') {
            prevNum = multiply(prevNum,currNum);
        }
        if (operator==='/') {
            prevNum = divide(prevNum,currNum);
        }
        currNum= "";
        if (e.target.textContent) {
            operator = e.target.textContent;
            operator=""
        }
        updateMainNum(currNum)
        updatePrevNum(prevNum,operator)
    }
}

function updatePrevNum(prev,op){
    prevDis.textContent = `${prev}${op}`;
}

function add(num1,num2){
    return `${parseInt(num1)+parseInt(num2)}`
}
function subtract(num1,num2){
    return `${parseInt(num1)-parseInt(num2)}`
}
function multiply(num1,num2){
    return `${parseInt(num1)*parseInt(num2)}`
}
function divide(num1,num2){
    return `${parseInt(num1)/parseInt(num2)}`
}