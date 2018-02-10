var email = document.getElementById("js-emailInput"),
	wrongText = document.getElementById("js-wrongText"),
	cancelBtn = document.getElementById("js-cancelBtn"),
	submitBtn = document.getElementById("js-submitBtn"),
	forgottenPass = document.getElementById("js-forgottenPass"),
	isTrue = false;

email.addEventListener("click", function() {
	email.setAttribute("style", "border: 1px solid #a39797;");
	wrongText.setAttribute("style", "display: none;");
});

submitBtn.addEventListener("click", function() {
	email.setAttribute("style", "border: 1px solid #ff0000;");
	if(isTrue == false) wrongText.setAttribute("style", "display: block;");
	else wrongText.setAttribute("style", "display: block; top: 86%;");
});

forgottenPass.addEventListener("click", function() {
	isTrue = true;
	document.getElementById("js-hiddenParagraphs").setAttribute("style", "display: block;");
	email.setAttribute("style", "border: 1px solid #a39797;");
	wrongText.setAttribute("style", "display: none;");
	document.getElementById("js-passInput").setAttribute("style", "display: none;");
	document.getElementById("js-rememberContent").setAttribute("style", "display: none;");
	forgottenPass.setAttribute("style", "display: none;");
	document.getElementById("js-cancelBtn").setAttribute("style", "display: block;");
});

cancelBtn.addEventListener("click", function() {
	isTrue = false;
	document.getElementById("js-hiddenParagraphs").setAttribute("style", "display: none;");
	email.setAttribute("style", "border: 1px solid #a39797;");
	wrongText.setAttribute("style", "display: none;");
	document.getElementById("js-passInput").setAttribute("style", "display: block;");
	document.getElementById("js-rememberContent").setAttribute("style", "display: flex;");
	forgottenPass.setAttribute("style", "display: block;");
	document.getElementById("js-cancelBtn").setAttribute("style", "display: none;");
})