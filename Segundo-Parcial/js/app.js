var app = angular.module('SegundoParcial', ['ui.router','satellizer']);

app.config(function($stateProvider, $urlRouterProvider,$authProvider) {

$authProvider.loginUrl = 'Segundo-Parcial/PHP/auth.php';
$authProvider.tokenName='MiTokenGeneradoEnPHP';
$authProvider.tokenPrefix='AngularABM';
$authProvider.authHeader='data';

$stateProvider

      .state('inicio', {
                url : '/inicio',
                templateUrl : 'inicio.html'
                //controller : 'controlInicio'
            })

      .state('usuario', {
                url : '/usuario',
                abstract:true,//permite que con diferentes rutas se le pueda agregar contenidos de otros state 
                templateUrl : 'abstractoUsuario.html'
            })
      .state('usuario.registro', {
                url: '/registrarse',
                views: {
                    'contenido': {
                        templateUrl: 'registroUsuario.html',
                        controller : 'controlRegistroUser'
                    }
                }
            })
      .state('usuario.login', {
                url: '/login',
                views: {
                    'contenido': {
                        templateUrl: 'loginUsuario.html',
                        controller : 'controlLogin'
                    }
                }
            })
      .state('usuario.grilla', {
                url: '/grillauser',
                views: {
                    'contenido': {
                        templateUrl: 'grillaUsuario.html',
                        controller : 'controlUserGrilla'
                    }
                }
            })
      .state('producto', {
                url : '/producto',
                abstract:true,
                templateUrl : 'abstractaproducto.html'
            })
      .state('producto.grilla', {
                url: '/grillaproducto',
                views: {
                    'contenido': {
                        templateUrl: 'grillaproducto.html',
                        controller : 'controlproductoGrilla'
                    }
                }
            })
      .state('producto.AltaProducto', {
                url: '/AltaProducto',
                views: {
                    'contenido': {
                        templateUrl: 'AltaProducto.html',
                        controller : 'controlAltaProducto'
                    }
                }
            })
      .state('producto.modificacion', {
                url: "/modificarproducto/{id}?:dni:precio:descripcion",
                views: {
                    'contenido': {
                        templateUrl: 'AltaProducto.html',
                        controller : 'controlproductoModificacion'
                    }
                }
            })
      .state('usuario.modificacion', {
                url: "/modificarusuario/{id}?:nombreuser:dni:password",
                views: {
                    'contenido': {
                        templateUrl: 'registroUsuario.html',
                        controller : 'controlusuarioModificacion'
                    }
                }
            })
       .state('directiva', {
                url: '/directiva',
                templateUrl: 'directiva.html',
                controller:'directivaCtrl'
    })

      $urlRouterProvider.otherwise('/inicio');
 });
