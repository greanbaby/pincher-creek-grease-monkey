const menuToggle = document.querySelector('#menu-toggle');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
});

var coll = document.getElementsByClassName("collapsible-btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.classList.contains("show")) {
      content.classList.remove("show");
    } else {
      content.classList.add("show");
    }
  });
}