<?php


include "clases/productos.php";
include "clases/Usuarios.php";
require 'vendor/autoload.php';


$app = new Slim\App();


$app->get('/', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    return $response;
});
/* LLENO GRILLA PRODUCTO */                                
$app->get('/productos[/]', function ($request, $response, $args) {
    //Clase 7 - Lleno la lista con Slim Framework
    $arrayproductos=producto::TraerTodasLasproductos();
    $response-> write(json_encode($arrayproductos)); 
    
    return $response;
});
/*
$app->get('/productos[/]', function ($request, $response, $args) {
    $respuesta['listado']=producto::TraerTodasLasproductos();
    $response->write(json_encode($respuesta));
    return $response;
});*/

/* LLENO GRILLA USUARIOS
 
$app->get('/usuarios[/]', function ($request, $response, $args) {
    $arrayusuarios=usuario::TraerTodosLosUsuarios();
    $response-> write(json_encode($arrayusuarios)); 
    
    return $response;
});*/

$app->get('/usuarios[/]', function ($request, $response, $args) {
    $respuesta['listado']=Usuario::TraerTodosLosUsuarios();
    $response->write(json_encode($respuesta));
    return $response;
});

/* POST: Para crear recursos */
/* ALTA PRODUCTO
$app->post('/producto/{objeto}', function ($request, $response, $args) {
    $producto = json_decode($args['objeto']);       
    $response-> write(producto::Insertarproducto($producto));
    return $response;
});                                comentado por factory*/

$app->post('/producto/{producto}', function ($request, $response, $args){
    $producto=json_decode($args["producto"]);
    $response->write(Producto::Insertarproducto($producto));
    return $response;
});

/* MODIFICACION PRODUCTO               comentado por factory
$app->post('/productoMod/{objeto}', function ($request, $response, $args) {
    $producto = json_decode($args['objeto']);
    $response-> write(producto::Modificarproducto($producto));
    return $response;
    
});*/
$app->put('/producto/{producto}', function ($request, $response, $args) {
    $producto=json_decode($args["producto"]);
    $response->write(Producto::Modificarproducto($producto));
    return $response;
});
/* BORRAR PRODUCTO*/
$app->post('/productoDel/{objeto}', function ($request, $response, $args) {
    $producto = json_decode($args['objeto']);
    echo($producto);
    $response-> write(producto::Borrarproducto($producto));
    return $response;
    
});
/* ALTA USUARIO*/
/*$app->post('/usuarioAlta/{objeto}', function ($request, $response, $args) {
    $usuario = json_decode($args['objeto']);       
    $response-> write(usuario::InsertarUsuario($usuario));
    return $response;
});*/

$app->post('/usuario/{usuario}', function ($request, $response, $args) {
    $usuario=json_decode($args["usuario"]);
    $response->write(Usuario::Agregar($usuario));
    return $response;
});

/* MODIFICACION USUARIO
$app->post('/usuarioModi/{objeto}', function ($request, $response, $args) {
    $usuario = json_decode($args['objeto']);
    $response-> write(usuario::ModificarUsuario($usuario));
    return $response;
    
});*/

$app->put('/usuario/{usuario}', function ($request, $response, $args) {
    $usuario=json_decode($args["usuario"]);
    $response->write(Usuario::ModificarUsuario($usuario));
    return $response;
});

/* BORRAR USUARIO*/
$app->post('/usuarioDel/{objeto}', function ($request, $response, $args) {
    $usuario = json_decode($args['objeto']);
    echo($usuario);
    $response-> write(usuario::BorrarUsuario($usuario));
    return $response;
    
});                                
/*$app->delete('/usuario/{usuario}', function ($request, $response, $args) {
    $usuario=json_decode($args["usuario"]);
    $response->write(Usuario::BorrarUsuario($usuario->id));
    return $response;
});*/





/* NO SE USA */
// /* PUT: Para editar recursos */
$app->put('/productos/{id}', function ($request, $response, $args) {
    //$response->write("Welcome to Slim!"); EJEMPLO
    //var_dump($args);                      EJEMPLO
    //return $response;                     EJEMPLO
    $producto = json_decode($args['producto[id]']);
  
    $response-> write(producto::Modificarproducto($producto));
    return $response;   
});

// /* DELETE: Para eliminar recursos */
$app->delete('/usuario/{id}', function ($request, $response, $args) {
    $response->write("borrar !", $args->id);
    var_dump($args);
    return $response;
});
/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();
