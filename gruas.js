var exports = module.exports = {};

var AcarreosService = require("./acarreos.js");
var depositos = AcarreosService.list();

var Coordinate = function(lat, lon) {
    return {
        lat: lat,
        lon: lon
    }
}

var estadoGrua = [{
    id: 00,
    descripcion: "Disponible."
  }, {
    id: 01,
    descripcion: "En viaje con vehículo."
  }, {
    id: 02,
    descripcion: "No operativa."
  }]

  //-34.5460985, -58.7104065
  //-34.541765, -58.7160749
var gruas = [{
    id: 01,
    estado_id: 00,
    ubicacion: new Coordinate(-34.5460985, -58.7104065)
  }, {
    id: 02,
    estado_id: 00,
    ubicacion: new Coordinate(-34.5208342, -58.7173721)
  }, {
    id: 03,
    estado_id: 01,
    ubicacion: new Coordinate(-34.5460985, -58.7104065)
  }, {
    id: 04,	
    estado_id: 02,
    ubicacion: new Coordinate(-34.543322, -58.712427)
  }, {
    id: 05,
    estado_id: 00,
    ubicacion: new Coordinate(-34.5460985, -58.7104065)
  }, {
    id: 06,
    estado_id: 02,
    ubicacion: new Coordinate(-34.541765, -58.7160749)
  }]

exports.list = function() {
    return gruas;
}

exports.get = function(id) {
  var grua = gruas.filter(grua => grua.id == id)[0];

  var res = null;
  if(grua) {
    res = {
      id: grua.id,
      estado_id: grua.estado_id,
      ubicacion: grua.ubicacion
    };
  }
  return res;
}

exports.estados = {
  list: function() {
    return estadoGrua
  },
  get: function(id) {
    return estadoGrua.filter(estado => estado.id == id)[0];
  }
}
