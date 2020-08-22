// key - value
// name - project
var uniqueNames = {};

var names = [
				'Hope_Tech',
				'Tech_Fest',
				'Party',
			];

var data = {};

var flagOnce = true;

function processDict(){
	var dict = {};
	data['Hope_Tech'] = 0;
	data['Tech_Fest'] = 0;
	data['Party'] = 0;

}

var chart; 

function saveData(progress){
	processDict();
	var first_clean = progress.split("data: [");
	var second_clean = first_clean[1].split("]");
	var third_clean = second_clean[0].split(",");
	
	third_clean[0] = third_clean[0].replace(/\s/g, '');

	for (i = 0; i < third_clean.length - 2; i += 3) { 
		if (names.includes(third_clean[i+1]))	
			uniqueNames[third_clean[i]] = third_clean[i+1]
	}

	Object.entries(uniqueNames).forEach(([key, value]) => {
		data[value] = data[value] + 1
	 });
	drawcharts(data);
}

function drawcharts(data){
	console.log(data);
	var ind = 0;
	var temp = 0;
	
	drawElements(0, "Hope_Tech");
	drawElementPie("Hope_Tech" + "-" + "Hope_Tech", "Hope_Tech", 0);
	ind++;
	temp = 0;
	flagOnce = true;
	
}


function drawElements(ind, person){

	var rowFirst = document.createElement('div');
	rowFirst.className = "row mt-3 justify-content-center";
	

	var card = document.createElement('div');
	card.className = "card shadow grafica"

	var header = document.createElement('div');
	header.className = "card-header"
	header.innerHTML += "Graficaishon"

	var body = document.createElement('div');
	body.className = "card-body"

	var container = document.createElement('div');
	container.className = "container"

	var row = document.createElement('div');
	row.className = "row"
	row.id = names[ind];
	//row.style.height = 400 + 'px';

	container.appendChild(row);
	body.appendChild(container);
	card.appendChild(header);
	card.appendChild(body);
	rowFirst.appendChild(card);

	document.getElementById("0").appendChild(rowFirst);
	
}

function drawElementPie(id, person, ind){
	
	var col = document.createElement('div');
	col.className = "col"

	var canvas = document.createElement('canvas');
	canvas.id = id;

	col.appendChild(canvas);

	document.getElementById(names[ind]).appendChild(col);

	drawPie(id, person, ind);
}



function drawPie(id, person, ind){
	console.log(data)
	var densityData = {
		label: '# Igniters',
		data: [data["Hope_Tech"], data['Tech_Fest'], data['Party']]
	  };

	chart = new Chart(document.getElementById(id), {
	    type: 'bar',
	    data: {
			labels: ["Hope Tech", "Tech Fest", "Party"],
			datasets: [densityData]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						callback: function(value) {if (value % 1 === 0) {return value;}}
					}
				}]
			}
		}
	});
}

   
function updatePie(){
	var jqxhr = $.ajax({
		url: url,
		method: "POST",
		dataType: "json",
		data: {},
		success: function(e){
		  saveDataUpdate(e);
		}
	  })
}

function saveDataUpdate(progress){
	processDict();
	var first_clean = progress.split("data: [");
	var second_clean = first_clean[1].split("]");
	var third_clean = second_clean[0].split(",");
	
	third_clean[0] = third_clean[0].replace(/\s/g, '');

	for (i = 0; i < third_clean.length - 2; i += 3) { 
		if (names.includes(third_clean[i+1]))	
			uniqueNames[third_clean[i]] = third_clean[i+1]
	}


	Object.entries(uniqueNames).forEach(([key, value]) => {
		data[value] = data[value] + 1
	 });
	 console.log(data)
	 chart.data.datasets[0].data = [data["Hope_Tech"], data['Tech_Fest'], data['Party']]
	 chart.update();  
}