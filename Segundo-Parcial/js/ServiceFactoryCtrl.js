angular
  .module('SegundoParcial')
  app.controller('controlLogin', function($scope, $scope, $state, $http, $auth) {

    $scope.usuario={};

    $scope.Login= function(){
       $auth.login($scope.usuario)
          .then(function(response) {
            console.info('correcto', response);
            
            if ($auth.isAuthenticated()) {                   
                  alert("loggeado exitosamente");
                  $state.go("inicio"); 
            }     
            else {
                 alert("no se pudo loggear");
            }

            console.info($auth.getPayload());
            console.info('El token es: ',$auth.getToken()); 

          })

          .catch(function(response) {
            console.info('no volvio bien', response); 
            console.info($auth.getPayload());
            console.info('El token es: ',$auth.getToken());  
          })
        }
    $scope.Admin=function(){
    $scope.usuario={};

    $scope.usuario.nombreuser= "OscarCordoba@hotmail.com";
    $scope.usuario.dni= "Oscar Cordoba" ;
    //$scope.usuario.tipo= "Admin";
    $scope.usuario.password= "1234567";
    $scope.usuario.copiapassword= "1234567";

  }
    $scope.Comprador=function(){
    $scope.usuario={};

    $scope.usuario.nombreuser= "JorgeBermudez@gmail.com";
    $scope.usuario.dni= "Jorge Bermudez" ;
    //$scope.usuario.tipo= "Comprador";
    $scope.usuario.password= "33221122";
    $scope.usuario.copiapassword= "33221122";

  }
    $scope.Vendedor=function(){
    $scope.usuario={};

    $scope.usuario.nombreuser= "MauricioSerna@hotmail.com";
    $scope.usuario.dni= "Mauricio Serna" ;
    //$scope.usuario.tipo= "Vendedor";
    $scope.usuario.password= "2233445";
    $scope.usuario.copiapassword= "2233445";

  }

});

  //app.controller('controlRegistroUser', function($scope, $http, $state,usuario,i18nService) {
  app.controller('controlRegistroUser', function($scope, $http, $state,fUsuarios) {

  //console.info("servicio",usuario);


   $scope.usuario={};
  //$scope.usuario.tipo = "usuario";

  
	$scope.Registrar=function(){
    //$http.post('PHP/nexo.php', { datos: {accion :"insertarUsuario",usuario:$scope.usuario}})
 /*   $http.post('http://localhost:8080/ws/usuarioAlta/'+JSON.stringify($scope.usuario))
    .then(function(respuesta) {       
       //aca se ejetuca si retorno sin errores        
     console.log(respuesta.data);
     $state.go("usuario.login");                COMENTARIO FACTORY*/
	 
	 var dato=JSON.stringify($scope.usuario);
            fUsuarios.Agregar(dato)
            .then(function(respuesta) {             
                 console.log("Se agregó al usuario correctamente");
                 $state.go("usuario.login");

  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log( response);           
    })
  }
  
  $scope.Admin=function(){
    $scope.usuario={};

    $scope.usuario.nombreuser= "OscarCordoba@hotmail.com";
    $scope.usuario.dni= "Oscar Cordoba" ;
    $scope.usuario.tipo= "Admin";
    $scope.usuario.password= "1234567";
    $scope.usuario.copiapassword= "1234567";

  }
    $scope.Comprador=function(){
    $scope.usuario={};

    $scope.usuario.nombreuser= "JorgeBermudez@gmail.com";
    $scope.usuario.dni= "Jorge Bermudez" ;
    $scope.usuario.tipo= "Comprador";
    $scope.usuario.password= "33221122";
    $scope.usuario.copiapassword= "33221122";

  }
    $scope.Vendedor=function(){
    $scope.usuario={};

    $scope.usuario.nombreuser= "MauricioSerna@hotmail.com";
    $scope.usuario.dni= "Mauricio Serna" ;
    $scope.usuario.tipo= "Vendedor";
    $scope.usuario.password= "2233445";
    $scope.usuario.copiapassword= "2233445";

  }

});

  app.controller('controlUserGrilla', function($scope, $http, $state,$auth, fUsuarios) {
    if (!$auth.isAuthenticated()) {
    alert("No estas Logueado!"); 
    $state.go("usuario.login");
  }   
  //$http.get('PHP/nexo.php', { params: {accion :"traerusuarios"}})
  
  /*
  $http.get('http://localhost:8080/ws/usuarios')
  .then(function(respuesta) {       

         //$scope.ListadoUsuario = respuesta.data.listado;
         $scope.ListadoUsuario = respuesta.data;
         //console.info(respuesta);
         //console.log(respuesta.data);

    },function errorCallback(response) {
        
        console.log( response);
    })                                                                           COMENTADO POR FACTORY         */
	
	
//*** USO FACTORY
      
	  
	  fUsuarios.traerTodo()
    .then(function(respuesta) {       
         $scope.ListadoUsuario = respuesta;
    },function errorCallback(response) {
         $scope.ListadoUsuario = [];
        console.log(response);     
    });

  
//***


  $scope.Borrar=function(usuario){
  //$http.post("PHP/nexo.php",{datos:{accion :"borrarUsuario",usuario:usuario}})
  $http.post('http://localhost:8080/ws/usuarioDel/'+usuario.id)
  .then(function(respuesta) {       
       //aca se ejetuca si retorno sin errores        
     //console.log(respuesta.data);
     $state.reload();                                                
	 
	 
/*	     var dato=JSON.stringify(usuario);
         fUsuarios.Borrar(dato)
         .then(function(respuesta) {              
                 console.log("Usuario borrado");
                  fUsuarios.traerTodo()
                  .then(function(respuesta) {       
                       $scope.ListadoUsuario = respuesta;
                  },function errorCallback(response) {
                       $scope.ListadoUsuario = [];
                      console.log(response);     
                  });                                                FACTORY BORRAR*/  
				  

  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log(response);           
    })

  }

});

  app.controller('controlproductoGrilla', function($scope, $http, $state, $auth) {
  if (!$auth.isAuthenticated()) {
    alert("No estas Logueado!"); 
    $state.go("usuario.login");
  }   
  //$http.get('PHP/nexo.php', { params: {accion :"traer"}})   SLIM
   $http.get('http://localhost:8080/ws/productos')
  .then(function(respuesta) {       

        //$scope.Listadoproductos = respuesta.data.listado;    SLIM
        $scope.Listadoproductos = respuesta.data;                  
	/*
	 fProductos.traerTodo()
    .then(function(respuesta) {       
         $scope.ListadoProductos = respuesta;
		alert("LLeno grilla");*/
	
    },function errorCallback(response) {
         $scope.Listadoproductos= [];
        console.log( response);
    })

  $scope.Borrar=function(producto){
  //$http.post("PHP/nexo.php",{datos:{accion :"borrar",producto:producto}})
  //alert(producto.id);
  $http.post('http://localhost:8080/ws/productoDel/'+producto.id)
  .then(function(respuesta) {       
       //aca se ejetuca si retorno sin errores        
     console.log(respuesta.data);
     $state.reload();
 
  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log(response);           
    })

  }

});

 app.controller('controlAltaProducto', function($scope, $http, $state, $auth, fProductos) {
  if (!$auth.isAuthenticated()) {
    alert("No estas Logueado!"); 
    $state.go("usuario.login");
  }   
    $scope.producto={};

    $scope.Registrar=function(){
    //$http.post('PHP/nexo.php', { datos: {accion :"insertar",producto:$scope.producto}})  SLIM
   /* $http.post('http://localhost:8080/ws/producto/'+JSON.stringify($scope.producto))
    .then(function(respuesta) {       
       //aca se ejetuca si retorno sin errores        
     console.log(respuesta.data);
     alert("Se registro tu AltaProducto !");
     $state.go("inicio");                                          comentado por factory             */     

	var dato=JSON.stringify($scope.producto);

          fProductos.Agregar(dato)
          .then(function(respuesta) {             
               console.log("Se agrego el id "+respuesta);
               $state.go("inicio"); 

  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log( response);           
    })
  }

});

 app.controller('controlproductoModificacion', function($scope, $http, $state, $stateParams, $auth,fProductos) {
    if (!$auth.isAuthenticated()) {
    alert("No estas Logueado!"); 
    $state.go("usuario.login");
    } 
    $scope.producto={};

    $scope.producto.id=$stateParams.id;
    $scope.producto.dni= parseInt($stateParams.dni);
    $scope.producto.precio= $stateParams.precio;
    $scope.producto.descripcion= $stateParams.descripcion;

    $scope.Registrar=function(){
    //$http.post('PHP/nexo.php', { datos: {accion :"modificar",producto:$scope.producto}})
     /*$http.post('http://localhost:8080/ws/productoMod/'+JSON.stringify($scope.producto))
    .then(function(respuesta) {       
       //aca se ejetuca si retorno sin errores        
     console.log(respuesta.data);
     $state.go("producto.grilla");*/
	 
	 var dato=JSON.stringify($scope.producto);

          fProductos.Modificar(dato)
          .then(function(respuesta) {             
               console.log(respuesta);
               $state.go("producto.grilla");
       

  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log( response);           
    })
  }

});

 app.controller('controlusuarioModificacion', function($scope, $http, $state, $stateParams, $auth,fUsuarios) {
    if (!$auth.isAuthenticated()) {
    alert("No estas Logueado!"); 
    $state.go("usuario.login");
    } 
    $scope.usuario={};

    $scope.usuario.id=$stateParams.id;
    //$scope.usuario.nombreuser= parseInt($stateParams.nombreuser);
    $scope.usuario.nombreuser= $stateParams.nombreuser;
    $scope.usuario.dni= $stateParams.dni;
    $scope.usuario.tipo= $stateParams.tipo;
    $scope.usuario.password= $stateParams.password;
    $scope.usuario.copiapassword= $stateParams.password;

    $scope.Registrar=function(){
    //$http.post('PHP/nexo.php', { datos: {accion :"modificar",producto:$scope.producto}})
   /*  $http.post('http://localhost:8080/ws/usuarioModi/'+JSON.stringify($scope.usuario))
    .then(function(respuesta) {       
       //aca se ejetuca si retorno sin errores        
     console.log(respuesta.data);
     $state.go("usuario.grilla");                         factory */
	 var dato=JSON.stringify($scope.usuario);
            
            fUsuarios.Modificar(dato)
            .then(function(respuesta) {             
                 console.log("Usuario modificado correctamente");
                 $state.go("usuario.grilla");

  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log( response);           
    })
  }

});

app.controller('directivaCtrl', function($scope,$state, $http) {
    $scope.titulo = "Listado de Productos:";
    // Objeto de configuracion de la grilla.
    
    $scope.Listadoproductos = {};
    
    $http.get('http://localhost:8080/ws/productos')
    .then(function(respuesta) {       

    $scope.Listadoproductos = respuesta.data;

    },function errorCallback(response) {
         $scope.Listadoproductos= [];
        console.log( response);
    })

  });