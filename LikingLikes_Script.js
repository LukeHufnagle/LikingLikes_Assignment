var count = 0;

var countElement = document.querySelector("#count");

function add1(){
    count++;
    countElement.innerText = count + " like(s)";
    console.log(count)
}

var startCount = 0;

var countElement2 = document.getElementById("count2");

function add1two(){
    startCount++;
    countElement2.innerText = startCount + " like(s)"
    console.log(startCount);
}

var count3 = 0;

var countElement3 = document.querySelector("#count3");

function add1three(){
    count3++;
    countElement3.innerText = count3 + " like(s)"
}
