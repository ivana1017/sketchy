$(document).ready(function(){
	var dim = prompt("Please enter your desired sketchpad dimension:")
	generateGrid(dim);

	$('.stack').mouseenter(function(){
		$(this).addClass('pixelated');
	});
});

function generateGrid(dimension){
	var size = dimension * dimension;
	var height = 0;
	var width = 0;
	var count = 0;

	while(count < size){
		count++;

		if(width == dimension && height != dimension){
			$('<div></div>').addClass('clear').appendTo('.container');
			height++;
			width = 0;
		}
		$('<div></div>').addClass('stack').appendTo('.container');
		width++;
	}
}