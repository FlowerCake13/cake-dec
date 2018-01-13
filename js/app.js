//console.log(document.getElementsByTagName('*').length)
function allowDrop(event) {
	event.preventDefault();
}

function drag(event) {
	event.dataTransfer.setData('text', event.target.id);
}

function drop(event){
	var data = getData(text);
	event.target.appendChild(document.getElementById(data));
}

window.onload = function(){
	var searchBar = document.getElementById('search');
	var tab = document.getElementsByClassName('tablink');
	var tabcontent = document.getElementsByClassName('tabcontent');
	var layerSelect = document.getElementById('layerSelect');
	var typeSelect = document.getElementById('layerSelect-type');
	var widthSelect = document.getElementById('layerSelect-width');
	var heightSelect = document.getElementById('layerSelect-height');
	var cakeArea = document.getElementById('cake');
	var pastCakeArea = document.getElementById('cakeContent');
	var addLayerButton = document.getElementById('add-layer');
	var restartButton = document.getElementById('restart');
	var sellButton = document.getElementById('sell');
	var resetButton = document.getElementById('reset');
	var addDecorButton = document.getElementById('add-decor');
	var profit = document.getElementById('current-cash');
	var currentCash = 0;

	addLayerButton.addEventListener('click', function(){
		var newLayer = document.createElement('div');
		console.log(widthSelect.value)
		newLayer.style.width = widthSelect.value;
		newLayer.style.height = heightSelect.value;
		newLayer.className = typeSelect.value + ' cakelayer';
		newLayer.appendChild(cakeArea);
	})
	restartButton.addEventListener('click', function(){
		cakeArea.innerHTML = '';
	})
	sellButton.addEventListener('click', function(){
		if (cakeArea.innerHTML != '') {
			newCake.innerHTML = cakeArea.innerHTML;
			newCake.className = 'prevCake';
			newCake.appendChild('pastCakeArea');
			cakeArea.innerHTML = '';
			currentCash = currentCash + 100;
			profit.innerHTML = '$' + currentCash;
		}else{
			alert('No cake to sell!')
		}
	})
	resetButton.addEventListener('click', function(){
		currentCash = 0;
		profit.innerHTML = '$' + currentCash;
	})
	for(var i = 0; i < tab.length; i++){
		tab[i].addEventListener('click', function(event){
			deactivate();
			event.currentTarget.className = 'tablink active'
			switchTab(event.currentTarget); 
		})
	}
	function deactivate(){
		for(var i = 0; i < tab.length; i++){
			tab[i].className = 'tablink inactive';
			tabcontent[i].style.display = 'none';
		}
	}
	function switchTab(target){
		//console.log(tabcontent[0])
		switch(target.id){
			case ('searchtab'):
				tabcontent[0].style.display = 'flex';
				break;
			case('layertab'):
				tabcontent[1].style.display = 'flex';
				break;
			case('decortab'):
				tabcontent[2].style.display = 'flex';
				break;
			case('caketab'):
				tabcontent[3].style.display = 'flex';

		}
	}
	console.log(document.getElementsByTagName('*').length)

}