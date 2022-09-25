const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card_number");
const nameInp = document.getElementById("card_name");
const cardName = document.getElementById("name");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const monthInp = document.getElementById("card_month");
const yearInp = document.getElementById("card_year");
const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card_cvc");
const submitBtn = document.getElementById("submit_btn");
const compeleted = document.querySelector(".thank");
const form = document.querySelector("form");

function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}

function handleSubmit(e) {
    e.preventDefault();
    if (!nameInp.value) {
        nameInp.classList.add('error');
    } else {
        nameInp.classList.remove("error");
    }
    if (!numberInp.value) {
        numberInp.classList.add('error')
    } else if (numberInp.value.length < 16) {
        numberInp.classList.add("error")
    } else {
        numberInp.classList.remove("error");
    }
    if (!monthInp.value) {
        monthInp.classList.add("error")
    } else {
        monthInp.classList.remove("error");
    }
    if (!yearInp.value) {
        yearInp.classList.add("error")
    } else {
        yearInp.classList.remove("error");
    }
    if (!cvcInp.value) {
        cvcInp.classList.add("error")
    } else {
        cvcInp.classList.remove("error");
    }
    if (
      nameInp.value &&
      numberInp.value &&
      monthInp.value &&
      yearInp.value &&
      cvcInp.value &&
      numberInp.value.length == 16
    ) {
      compeleted.classList.remove("hidden");
      form.classList.add("hidden");
    }
  
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);
