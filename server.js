var express    = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var infracciones = require("./infracciones.js");
var types = require("./types.js");
var acarreos = require("./acarreos.js");
var gruas = require("./gruas.js");
var posiciones = require("./posiciones.js");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//http://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', router); // routes will be /api/whatever

var version = {
  id: '1.1.0',
  name: 'shootingstar',
  lastupdate: Date.now()
}

var urlInfraccion = '/:patente/infracciones/';
var urlType = '/tiposInfraccion/';
var urlAcarreoV1 = '/acarreo/';
var urlAcarreo = '/:patente/acarreos/';
var urlDepositos = '/depositos/';
var urlGruas = '/gruas/';
var urlEstados = '/estadosGruas/';
var urlPosiciones = urlGruas + ':grua_id/posiciones';

var addAPIBaseRoute = function(route) {
  return '/api' + route;
}

var getHelp = {}
getHelp[addAPIBaseRoute(urlInfraccion)] = {
  "descripción": "Lista las infracciones pertenecientes a la patente :patente",
  "ejemplo": "/api/ABC123/infracciones/",
  "ejemplos disponibles": "[ABC123, AAA000, BBB111]" };

getHelp[addAPIBaseRoute(urlInfraccion + ':infraccion_id')] = {
  "descripción": "Obtiene la infracción con id :infraccion_id",
  "ejemplo": "/api/ABC123/infraciones/42"};

getHelp[addAPIBaseRoute(urlType)] = {
  "descripción": "Lista los tipos de infracciones.",
  "ejemplo": "/api/tiposInfraccion/"};

getHelp[addAPIBaseRoute(urlType + ':type_id')] = {
  "descripción": "Obtiene el tipo de infracción con id :type_id",
  "ejemplo": "/api/tiposInfraccion/1"};

getHelp[addAPIBaseRoute(urlDepositos)] = {
  "descripción": "Lista los depósitos.",
  "ejemplo": "/api/depositos/"};

getHelp[addAPIBaseRoute(urlAcarreo + ':infraccion_id')] = {
  "descripción": "Obtiene la información de acarreo para la infracción con id :infraccion_id",
  "ejemplo": "/api/ABC123/acarreos/42"};

getHelp[addAPIBaseRoute(urlGruas)] = {
  "descripción": "Lista las grúas.",
  "ejemplo": "/api/gruas/"};

getHelp[addAPIBaseRoute(urlGruas + ':grua_id')] = {
  "descripción": "Obtiene la grúa con id :grua_id",
  "ejemplo": "/api/gruas/1"};

getHelp[addAPIBaseRoute(urlPosiciones)] = {
  "descripción": "Obtiene las posiciones de la grúa con id :grua_id",
  "ejemplo": "/api/gruas/1/posiciones"};

getHelp[addAPIBaseRoute(urlEstados)] = {
  "descripción": "Lista los tipos de estados de las grúas.",
  "ejemplo": "/api/estadosGruas/"};

getHelp[addAPIBaseRoute(urlEstados + ':estado_id')] = {
  "descripción": "Obtiene el estado de grúa con id :estado_id",
  "ejemplo": "/api/estadosGruas/1"};
  
var help = {
  welcome: 'Bienvenidos a Infracciones Ya!',
  urls: {
      'GET': getHelp
  },
  version: version
}

router.get('/', function(req, res) {
  console.log("GET /");
  res.json(help);
});

// Infracciones
router.route(urlInfraccion)
    .get(function(req, res) {
        console.log("GET: " + urlInfraccion);

        var patente = req.params.patente;
        if(!patente) {
            res.status(404)
               .send('Patente inexistente.');

            return;
        }

        console.log("Getting infracciones for: " + patente);

        var response = {
            patente: patente,
            infracciones: infracciones.list(patente),
            version: version
        }
        res.json(response);
    });

router.route(urlInfraccion + ':infraccion_id')
    .get(function(req, res) {
        console.log("GET: " + urlInfraccion + ':infraccion_id');

        var patente = req.params.patente;
        if(!patente) {
            res.status(404)
               .send('Patente inexistente.');

            return;
        }

        var id = req.params.infraccion_id;
        console.log(id);

        var infraccion = infracciones.get(patente, id);
        console.log(infraccion);

        if (!infraccion) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Infracción inexistente.');

            return;
        }

        var response = {
            patente: patente,
            infraccion: infraccion,
            version: version
        }
        res.json(response);
    });

// Types
router.route(urlType)
    .get(function(req, res) {
        console.log("GET: " + urlType);

        var response = {
            tipos: types.list(),
            version: version
        }
        res.json(response);
 
    });

router.route(urlType + ':type_id')
    .get(function(req, res) {
        console.log("GET: " + urlType + ":type_id");

        var id = req.params.type_id;
        console.log(id);

        var type = types.get(id);
        console.log(type);

        if (type) {
		
			var response = {
				tipo: type,
				version: version
			}
			res.json(response);

        } else {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Tipo de infracción inexistente.');
        }

    });

// Acarreo
router.route(urlAcarreoV1 + ':infraccion')
    .get(function(req, res) {
        console.log("GET: " + urlAcarreoV1 + ":infraccion");
        res.status(404)
            .send('Cannot GET /api/acarreo - Deprecado - Se requiere: "/api/:patente/acarreos/:infraccion_id"');
        });

router.route(urlAcarreo + ':infraccion_id')
    .get(function(req, res) {
        console.log("GET: " + urlAcarreo + ":infraccion_id");

        var patente = req.params.patente;
        if(!patente) {
            res.status(404)
               .send('Patente inexistente.');
            return;
        }
        console.log(patente);

        var infraccionId = req.params.infraccion_id;
        console.log(infraccionId);

        var infraccion = infracciones.get(infraccionId);
        console.log(infraccion);

        var acarreo = acarreos.get(patente, infraccionId);
        console.log(acarreo);

        if (!acarreo) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('No existe información de acarreo para la patente e infracción dada.');
        }

        var response = {
            patente: patente,
            infraccion: infraccionId,
            acarreo: acarreo,
            version: version
        }
        res.json(response);
    });

// Depositos
router.route(urlDepositos)
    .get(function(req, res) {
        console.log("GET: " + urlDepositos);

        var response = {
            depositos: acarreos.list(),
            version: version
        }
        res.json(response);
    });

// Gruas
router.route(urlGruas)
    .get(function(req, res) {
        console.log("GET: " + urlGruas);

        var response = {
            gruas: gruas.list(),
            version: version
        }
        res.json(response);		
    });

router.route(urlGruas + ':grua_id')
    .get(function(req, res) {
        console.log("GET: " + urlGruas + ':grua_id');

        var id = req.params.grua_id;
        console.log(id);

        var grua = gruas.get(id);
        console.log(grua);

        if (!grua) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Grúa inexistente.');
            return;
        }

        var response = {
            grua: grua,
            version: version
        }
        res.json(response);
    });

//Posiciones
router.route(urlPosiciones)
    .get(function(req, res) {
        console.log("GET: " + urlPosiciones);

        var id = req.params.grua_id;
        console.log(id);

        var grua = gruas.get(id);

        if (!grua) {
            res.status(404)
               .send('Grúa inexistente.');
            return;
        }

        var lista = posiciones.get(id);

        if (!lista) {
            res.status(404)
               .send('posiciones inexistentes.');

            return;
        }
		
        var response = {
            grua: id,
            posiciones: lista,
            version: version
        }
        res.json(response);
    });

//
router.route(urlEstados)
    .get(function(req, res) {
        console.log("GET: " + urlEstados);

	var response = {
            estados: gruas.estados.list(),
            version: version
        }
        res.json(response);
    });	

router.route(urlEstados + ':estado_id')
    .get(function(req, res) {
        console.log("GET: " + urlEstados + ':estado_id');
        
        var id = req.params.estado_id;
        console.log(id);

        var estado = gruas.estados.get(id);

        if (!estado) {
            res.status(404)
               .send('Estado de grúa inexistente.');
            return;
        }

        var response = {
            estado: estado,
            version: version
        }
        res.json(response);
    });

	
// Server up!
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Server started at port ' + port);
});
