var link = document.querySelector(".find-btn");
var popup = document.querySelector(".search-form");

popup.classList.add("search-form-show");
link.addEventListener("click", function(evt) {
evt.preventDefault ();
popup.classList.toggle("search-form-show");
});
