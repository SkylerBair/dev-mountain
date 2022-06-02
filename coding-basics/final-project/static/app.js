var skiCartBtn = document.querySelector(".ski-cart-btn");
var tentCartBtn = document.querySelector(".tent-cart-btn");
var sleepingBagCartBtn = document.querySelector(".sleeping-bag-cart-btn");
var harnessCartBtn = document.querySelector(".harness-cart-btn");
var stoveCartBtn = document.querySelector(".stove-cart-btn");
var menuBtn = document.querySelector("#menu-btn");
var menu = document.querySelector(".menu");
var cartCount = document.querySelector(".cart-count");
var count = 0;
var value = document.querySelector("i");
var intput = document.querySelector("input");
var signUpForm = document.querySelector(".email-sign-up");
var signUpBtn = document.querySelector("#sign-up");
var footer = document.querySelector("footer");
var valueProp = value.getAttribute("value");
var skiProductDescription = document.querySelector(".ski-product-description");
var skiImage = document.querySelector("#skis");
var harnessProductDescription = document.querySelector(
  ".harness-product-description"
);
var harnessImage = document.querySelector("#harness");
var stoveProductDiscription = document.querySelector(
  ".stove-product-description"
);
var tentProductDescription = document.querySelector(
  ".tent-product-description"
);
var sleepingBadProductDescription = document.querySelector(
  ".sleeping-bag-product-description"
);

function toCart() {
  count = count + 1;
  if (count === 1) {
    value.setAttribute("value", "1");
  } else {
    value.setAttribute("value", count);
  }
}

function toggleCatMenu() {
  menu.classList.toggle("opened");
}

function SkiDescription() {
  if (skiProductDescription.style.opacity === "1") {
    skiProductDescription.style.opacity = "0";
  } else {
    skiProductDescription.style.opacity = "1";
  }
}

function sleepingBagDescription() {
  if (sleepingBadProductDescription.style.opacity === "1") {
    sleepingBadProductDescription.style.opacity = "0";
  } else {
    sleepingBadProductDescription.style.opacity = "1";
  }
}

function tentDescription() {
  if (tentProductDescription.style.opacity === "1") {
    tentProductDescription.style.opacity = "0";
  } else {
    tentProductDescription.style.opacity = "1";
  }
}

function harnessDescription() {
  if (harnessProductDescription.style.opacity === "1") {
    harnessProductDescription.style.opacity = "0";
  } else {
    harnessProductDescription.style.opacity = "1";
  }
}

function stoveDescription() {
  if (stoveProductDiscription.style.opacity === "1") {
    stoveProductDiscription.style.opacity = "0";
  } else {
    stoveProductDiscription.style.opacity = "1";
  }
}

function submitEmail() {
  var confirmationMsg = document.createElement("p");
  confirmationMsg.textContent =
    "Thanks! we will send you the beta, " + intput.value;
  signUpForm.remove();
  footer.appendChild(confirmationMsg);
}

intput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitEmail();
  }
});
signUpBtn.addEventListener("click", submitEmail);

menuBtn.addEventListener("click", toggleCatMenu);

skiProductDescription.addEventListener("click", SkiDescription);

harnessProductDescription.addEventListener("click", harnessDescription);

stoveProductDiscription.addEventListener("click", stoveDescription);

sleepingBadProductDescription.addEventListener("click", sleepingBagDescription);

tentProductDescription.addEventListener("click", tentDescription);

skiCartBtn.addEventListener("click", toCart);
stoveCartBtn.addEventListener("click", toCart);
harnessCartBtn.addEventListener("click", toCart);
sleepingBagCartBtn.addEventListener("click", toCart);
tentCartBtn.addEventListener("click", toCart);
