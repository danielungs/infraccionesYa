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

var gruas = [{
    id: 01,
    estado_id: 00,
    ubicacion: depositos[0].ubicacion
  }, {
    id: 02,
    estado_id: 00,
    ubicacion: depositos[1].ubicacion
  }, {
    id: 03,
    estado_id: 01,
    ubicacion: depositos[0].ubicacion
  }, {
    id: 04,
    estado_id: 01,
    ubicacion: depositos[1].ubicacion
  }, {
    id: 05,
    estado_id: 01,
    ubicacion: depositos[1].ubicacion
  }, {
    id: 06,
    estado_id: 02,
    ubicacion: depositos[1].ubicacion
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
