
data = [];

window.googleDocCallback = function () { return true; };

function processIgnite(){
	var parameters = location.search.substring(1).split("&");

	var name = parameters[0].split("=");
	return name[1];
}



function saveData(progress){
	var first_clean = progress.split("data: [");
	var second_clean = first_clean[1].split("]");
	alert(second_clean[0]);
}