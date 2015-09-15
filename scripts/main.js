'use strict';
var i = 0
var $like = $('#like');
var $reset = $('reset');
$reset.html = 'Reset likes';
$like.html = i + ' likes';

function addLike() {
	
	i++;
	$('#like').html(i + ' likes');
	if (i === 1) {
		$('#like').html(i + ' like');
	}

}
function resetFunc() {
	i = 0
	$('#like').html(i + ' likes');
}


$('#like').on('click', addLike);
$('#reset').on('click', resetFunc);

