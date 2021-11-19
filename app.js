

let adImg = document.querySelector("#adImg");
let deletButton = document.querySelector("#deletButton");
let h4Word = document.querySelector("#buyAd")

let iframe1 = document.querySelector(".fScreen");
let iframe2 = document.querySelector(".sScreen");

let btn1 = document.querySelector("#postYourChannel1");
let btn2 = document.querySelector("#postYourChannel2");

let delAdBtn = document.querySelector(".delAdBtn");

let leftSide = document.querySelector(".leftSide");
let rightSide = document.querySelector(".rightSide");


// delet right ad.

deletButton.addEventListener("click", function (ev) {
    rightSide.style.display = "none";
})

// delet all ad 

delAdBtn.addEventListener("click", function (ev) {
    leftSide.style.display = "none";
    rightSide.style.display = "none";
})


// < !--start iframe-- >


function postYourChannel1() {
    var iframe = $("#forPostyourChannel1");
    iframe.attr("src", iframe.data("src"));
}

function postYourChannel2() {
    var iframe = $("#forPostyourChannel2");
    iframe.attr("src", iframe.data("src"));
}



btn1.addEventListener("click", function (ev) {
    iframe2.style.visibility = "hidden";
    iframe1.style.visibility = "visible";
})

btn2.addEventListener("click", function (ev) {
    iframe1.style.visibility = "hidden";
    iframe2.style.visibility = "visible";
})
