var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var display = document.querySelector(".image");
var carousel = ["test.png", "test2.jpg"];
var x=0;

next.addEventListener("click", function() {
	x++;
	if(x<2) {
	display.setAttribute("src", carousel[x]);
	}
});
prev.addEventListener("click", function() {
	x--;
	if(x === -1) {
	x++;
	display.setAttribute("src", carousel[x]);
	}
});