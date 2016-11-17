// SERVICIOS
app.service('ServicioProductos', function ($http) {
/*
    this.traerTodo = function () {
      return $http.get('http://localhost:8080/ws/productos').then(function(respuesta) {    
         return respuesta.data.listado;    
      });
    }
*/
    this.Agregar = function(dato){
      return $http.post('http://localhost:8080/ws/producto/'+dato).then(function(respuesta){
        return respuesta.data;
      })
    }

    this.Modificar = function(dato){
      return $http.put('http://localhost:8080/ws/producto/'+dato).then(function(respuesta){
        console.log(respuesta);
        return respuesta.data;
      }) 
    }
/*
    this.Detallar = function(dato){
      return $http.get('http://localhost:8080/labor/ws/producto/'+dato).then(function(respuesta){
        return respuesta.data;
      }) 
    }
    
    this.Borrar = function(dato){
      return $http.delete('http://localhost:8080/labor/ws/producto/'+dato).then(function(respuesta){
        return respuesta.data;
      }) 
    }*/
  })