var count = [0,0,0]
var select = [document.querySelector("#count"), document.querySelector("#count2"), document.querySelector("#count3")]

// var countElement = ;

function add(value){
    count[value]++;
    select[value].innerText = count[value] + " like(s)";
    // console.log(count)
}

// var startCount = 0;

// var countElement2 = document.getElementById("count2");

// function add1two(){
//     startCount++;
//     countElement2.innerText = startCount + " like(s)"
//     console.log(startCount);
// }

// var count3 = 0;

// var countElement3 = document.querySelector("#count3");

// function add1three(){
//     count3++;
//     countElement3.innerText = count3 + " like(s)"
// }
