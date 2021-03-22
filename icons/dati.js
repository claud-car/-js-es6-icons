$(document).ready(function() {

	var animal = $('#selection');


	const icons = [
		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		}
	];

	//ciclo for each
	icons.forEach((icons,index) => {
		//stampo in html le icone
		$('main').append(`
			<div class="box ${icons.type}">
			<div class="box-icon">
			<i class="${icons.family} ${icons.prefix}${icons.name}"></i>
			<p>${icons.name}</p>
			</div>
			</div>
			`);

			//condizione if con l'index per filtrare specificatamente i colori
		$($("main i")[index]).css("color", () => {
			if (icons.type == "animal") {
				console.log("animal");
				return "blue"
			} else if (icons.type == "vegetable") {
				console.log("vegetable");
				return "orange"
			} else if (icons.type == "user") {
				console.log("user");
				return "purple"
			}
		}) //fine condizione if-else

	}) //fine for-each

	//filtro le scelte in base alla selezione
	$("#selection").change(function () {
		//creo const  per poter agire
		const select = $(this).val()

		//condizione per mostrare/nascondere le opzioni
		if (select == "all") {
			//se = all,allora si mostrano tutte le card
			$('.box').show();
		} else{
			//sennò in base alla scelta del select,si nascondono tutte le box,
			//e si mostrano quelle che hanno come classe,quella scelta nel selector
			$('.box').hide();
			$(`.box.${select}`).show();
		}
	})

}) //fine document






// $($("main i")[index]).css("display", () => {
// 	if (icons.type == "vegetable" || icons.type == "user") {
// 		return "none"
// 	}
// })



// if (icons.type == 'animal') {
// 	$('i').css("color","blue");
// }else if (icons.type == 'vegetable') {
// 	$('i').css("color","orange");
// } else {
// 	$('i').css("color","purple");
// }
