angular
  .module('app')
  .factory('factoryServBandera', function (bandera) {

    var objeto = {};

    objeto.Nombre = "Factory con servicio bandera";

    objeto.function_name = function_name;

    

    var url = "http://www.egos27.somee.com/api/bandera";


    function traerUrl(parametro){
      if(!parametro)
      {
        return url;
      }
      else{
        return url + '/' + parametro;
      }

    };  

    function function_name() {
      // body...
      console.info(bandera);
      return bandera.traerTodos();
    }
    /*
    function traerTodos(){
      return bandera.traerTodos();
    };*/

    return objeto;
  })
