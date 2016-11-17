angular.module('SegundoParcial')
  .filter('tipo', function () {
  	var tipo = {
  		'Admin': 'Administrador',
  		'Comprador': 'Comprador',
      'Vendedor': 'Vendedor',
  	}
    return function (input) {
      return tipo[input];
    };
  });