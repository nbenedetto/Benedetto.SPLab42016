angular
  .module('SegundoParcial')
  //.constant('bandera_url','http://www.egos27.somee.com/api/bandera')
  .service('usuario', function ($http) {//,bandera_url
    this.Nombre = "servicio usuario";
   
   function Registrar(){
    //$http.post('PHP/nexo.php', { datos: {accion :"insertarUsuario",usuario:$scope.usuario}})
    $http.post('http://localhost:8080/ws/usuarioAlta/'+JSON.stringify($scope.usuario))
    .then(function(respuesta) {       
       //aca se ejetuca si retorno sin errores        
     console.log(respuesta.data);
     $state.go("usuario.login");

  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log( response);           
    })
  }

  })
