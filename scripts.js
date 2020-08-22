



// var names = [
// 				'AlexisSalazar',
// 				'AnaArcos',
// 				'AndresMontemayor',
// 				'AntonioMartinez',
// 				'CesarAngeles',
// 				'EmilioGalindo',
// 				'FernandoRomero',
// 				'FlorBarbosa',
// 				'IvanHerrera',
// 				'LeslieCanales',
// 				'MaximilianoGarcia',
// 				'RicardoReyes',
// 			];

function displayNames() {
	count = 0;
	rowNum = 0;
	//<div class="col"><button type="button" class="btn btn-outline-primary">Primary</button></div>
	names.forEach( function(v, i, array) {
	    name = names[i].split(/(?=[A-Z])/).join(" ");
       	if (count % 3 == 0){
       		var row = document.createElement('div');
       		row.className = 'row mt-4';
       		row.id = rowNum+1;
       		document.getElementById("0").appendChild(row);
       		rowNum++;
       	}
       	var div = document.createElement('div');
       	div.className = 'col';

//<form action="igniteTracker.html" method="POST">
       	var btn = document.createElement('button');
       	btn.type = 'submit';
       	btn.className = 'btn btn-outline-primary btn-block';
       	btn.name = 'tracker'
       	btn.value = names[i];
       	btn.textContent = name;
       	
  		//<input type="submit"  name="price" value="ASC">Price Low to High</input>

       	// var form = document.createElement('form');
       	// form.action = 'igniteTracker.html';
       	// form.method="get";

       	// form.appendChild(btn);
       	// div.appendChild(form);
       	div.appendChild(btn);
       	document.getElementById(rowNum).appendChild(div);
       	//document.body.appendChild(btn);
       	count++;
	});
}
