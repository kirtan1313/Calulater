let a = document.getElementById('enterValue');
let b = document.getElementById('showValue');
let c = document.getElementById('allClear');


const myButton = (val) => {


    if (a.innerHTML == 0) {
        a.innerHTML = '';
        a.innerHTML += val;
    }else{
        a.innerHTML += val;
    }
}

const clear1 = () => {

    a.innerHTML = ' ';
    a.innerHTML = '0';
}

const back = () => {
    a.innerHTML = a.innerHTML.slice(0, -1);
    if(a.innerHTML == ''){
        a.innerHTML = 0;
    }
}

const myAllClear = () => {

    let str = a.innerHTML;
    let ans = eval(str);
    a.innerHTML = `=${ans}`;
}

