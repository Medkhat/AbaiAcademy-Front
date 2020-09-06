var acc = document.getElementsByClassName("accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.paddingTop = 0;
      panel.style.paddingBottom = 0;
      panel.style.maxHeight = null;
    } else {
      panel.style.paddingTop = 20 + "px";
      panel.style.paddingBottom = 20 + "px";
      panel.style.maxHeight = panel.scrollHeight + 40 + "px";
    }
  });
}