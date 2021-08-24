$(document).ready(function(){

// Scroll Elementos Menu
	var acercaDe = $('#acerca-de').offset().top,
		conocimientos = $('#conocimientos').offset().top,
		trabajos = $('#trabajos').offset().top,
		contacto = $('#contacto').offset().top;

// Boton Acerca de
	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 380
		}, 500);
	});

	$('#btn-conocimientos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: conocimientos - 40
		});
	});

	$('#btn-trabajos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: trabajos - 40
		});
	});

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto - 40
		});
	});

});