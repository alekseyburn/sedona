var link = document.querySelector(".find-btn");
var popup = document.querySelector(".search-form");
var first = popup.querySelector("[name=arrival-date]");
var last = popup.querySelector("[name=departure-date]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("first");
} catch (err) {
  isStorageSupport = false;
}

popup.classList.add("search-form-hide");
link.addEventListener("click", function(evt) {
  evt.preventDefault ();
  popup.classList.toggle("search-form-hide");
  popup.classList.remove("search-form-error");


  if (storage) {
    first.value = storage;
    last.focus();
  } else {
    first.focus();
  }
});

popup.addEventListener("submit", function(evt) {
  if (!first.value || !last.value) {
    evt.preventDefault();
    popup.classList.remove("search-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("first", first.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode ===27) {
    evt.preventDefault();

    if (popup.classList.contains("search-form-hide")) {
      popup.classList.remove("search-form-hide");
      popup.classList.remove("search-form-error");
    }
  }
});

var minusAd = document.getElementById("adults-btn-minus");
var plusAd = document.getElementById("adults-btn-plus");
var numberAd = document.getElementById("adults-amount");
var unitsAd = numberAd.value.replace(/\d/g, "");
minusAd.onclick = function () {
  numberAd.value = parseInt(numberAd.value)-1+unitsAd;
  if (numberAd.value < 0) {
    numberAd.value = 0;
  };
};
plusAd.onclick = function () {
  numberAd.value = parseInt(numberAd.value)+1+unitsAd;
};
var minusCh = document.getElementById("children-btn-minus");
var plusCh = document.getElementById("children-btn-plus");
var numberCh = document.getElementById("child-amount");
var unitsCh = numberCh.value.replace(/\d/g, '');
minusCh.onclick = function () {
  numberCh.value = parseInt(numberCh.value)-1+unitsCh;
  if (numberCh.value < 0) {
    numberCh.value = 0;
  };
};
plusCh.onclick = function () {
  numberCh.value = parseInt(numberCh.value)+1+unitsCh;
};
