angular
.module('SegundoParcial')
.directive('muestroFiltro',function(){
	
	return {'template':'hola mundo'};
});

angular
.module('SegundoParcial')
.directive('muestroProductos',function(){
	
	return { 
			scope :{
				descripcion:"@banderanombre",
				precio:"@banderaimagen"
			},
			replace:true, 
			restrict:"EACM" , 
			templateUrl:'templateProducto.html'
			};
});









/*
angular
.module('app')
.directive('utnSaludoDos',function(){
	
	return { replace:true, restrict:"EACM" , template:'<h1>hola mundo</h1>'};
});

angular
.module('app')
.directive('utnTitulo',function(){
	
	return { replace:true, restrict:"EACM" , template:'<h1>{{titulo}}</h1>'};
});

angular
.module('app')
.directive('utnTituloUrl',function(){
	
	return { replace:true, restrict:"EACM" , templateUrl:'templates/templateTitulo.html'};
});

angular
.module('app')
.directive('utnTituloParametro',function(){
	
	return { scope: { miTitulo:'@miparametro' } ,replace:true, restrict:"EACM" , template:'<h1>{{miTitulo}}</h1>'};
});

angular
.module('app')
.directive('directivaBandera',function(){
	
	return { 
			scope :{
				nombre:"@banderanombre",
				imagen:"@banderaimagen"
			},
			replace:true, 
			restrict:"EACM" , 
			templateUrl:'templates/templateBandera.html'
			};
});


angular
.module('app')
.directive('directivaBanderaObj',function(){
	
	return { 
			scope:{
				mibandera: '=labanderaporparametro'
			},
			replace:true, 
			restrict:"EACM" , 
			templateUrl:'templates/templateBandera.html'
			};
});*/