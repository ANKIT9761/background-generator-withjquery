var css = $("h3");
var color1 = $(".color1");
var color2 = $(".color2");
var body = $("#gradient");

function setGradient() {

  var bgcolor="linear-gradient(to right, "+ color1.val()+ ", "+ color2.val()+ ")";

	body.css("background",bgcolor);

console.log(css.text(body.css("background")));
	css.text(body.css("background"));
}

color1.on("input", setGradient);

color2.on("input", setGradient);
