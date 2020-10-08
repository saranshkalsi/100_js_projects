// this will select our elements
let b1          = document.querySelector(".prevBtn");
let b2          = document.querySelector(".nextBtn");
let countNumber = document.querySelector("#counter");
// counter starts at 0
let count = 0;
// event listeners
b2.addEventListener("click", function addNum(){
  count++;
    countNumber.textContent = count;  
    if (count > 0 ){
      countNumber.style.color = 'green';
    }
    else if (count === 0) {
      countNumber.style.color = 'black';
    }
});
b1.addEventListener("click", function subNum() {
  count--;
  countNumber.textContent = count;
  if (count < 0 ){
    countNumber.style.color = 'red';
  } 

  else if (count === 0) {
    countNumber.style.color = 'black';
  }
});







