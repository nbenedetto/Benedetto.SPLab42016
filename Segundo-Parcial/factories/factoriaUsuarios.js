// SERVICIOS

app.factory('fUsuarios', function (ServicioUsuarios) {

  var objeto = {};
  objeto.traerTodo = traerTodo;
  objeto.Agregar = Agregar;
  objeto.Modificar = Modificar;
  //objeto.Detallar = Detallar;
  //objeto.Borrar = Borrar;

    function traerTodo () {
      return ServicioUsuarios.traerTodo();
    }

  function Agregar(dato){
      return ServicioUsuarios.Agregar(dato);
    }
  
    function Modificar(dato){
      return ServicioUsuarios.Modificar(dato);
    }
/*
    function Detallar(dato){
      return ServicioUsuarios.Detallar(dato); 
    }
    
    function Borrar(dato){
      return ServicioUsuarios.Borrar(dato);  
    }*/

    return objeto;
  })