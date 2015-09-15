(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var i = 0;
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
	i = 0;
	$('#like').html(i + ' likes');
}

$('#like').on('click', addLike);
$('#reset').on('click', resetFunc);

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map