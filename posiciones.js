var exports = module.exports = {};

var Posicion = function(latlon, estado_id) {
    return {
        ubicacion: {lat: latlon[0], lon: latlon[1]},
		estado: estado_id
    }
}

var posiciones = {
    01: [
		new Posicion([-34.5460985, -58.7104065], 00), //Libre
		new Posicion([-34.5460985, -58.7104065], 00),

		new Posicion([-34.545833, -58.710129], 00),
		new Posicion([-34.545833, -58.710129], 00),
		new Posicion([-34.545648, -58.709903], 00),
		new Posicion([-34.545241, -58.709474], 00),
		new Posicion([-34.544906, -58.709088], 00),
		new Posicion([-34.544694, -58.708884], 00),
		new Posicion([-34.544579, -58.708755], 00),
		new Posicion([-34.544384, -58.709034], 00),
		new Posicion([-34.544163, -58.709399], 00),

		new Posicion([-34.544163, -58.709399], 01), //En  servicio
		new Posicion([-34.544163, -58.709399], 01),
		new Posicion([-34.544163, -58.709399], 01),
		new Posicion([-34.544163, -58.709399], 01),

		new Posicion([-34.543792, -58.709893], 01),
		new Posicion([-34.543615, -58.710129], 01),
		new Posicion([-34.543227, -58.710654], 01),
		new Posicion([-34.542873, -58.711116], 01),
		new Posicion([-34.542626, -58.711491], 01),
		new Posicion([-34.542458, -58.711781], 01),
		new Posicion([-34.542458, -58.711781], 01),
		new Posicion([-34.542458, -58.711781], 01),
		new Posicion([-34.542440, -58.711802], 01),
		new Posicion([-34.542033, -58.712296], 01),
		new Posicion([-34.541724, -58.712747], 01),
		new Posicion([-34.541362, -58.713229], 01),
		new Posicion([-34.541176, -58.713476], 01),
		new Posicion([-34.541662, -58.714034], 01),
		new Posicion([-34.542201, -58.714635], 01),
		new Posicion([-34.542546, -58.714978], 01),
		new Posicion([-34.542184, -58.715493], 01),
		new Posicion([-34.541927, -58.715858], 01),
		
		new Posicion([-34.541765, -58.7160749], 01), //Fin - En servicio
		new Posicion([-34.541765, -58.7160749], 00) //Libre

		],

	02: [
		new Posicion([-34.5208342, -58.7173721], 00), //Libre
		new Posicion([-34.5211955, -58.7171759], 00),
		new Posicion([-34.521443, -58.7168755], 00),
		new Posicion([-34.521717, -58.7164893], 00),
		new Posicion([-34.521991, -58.716146], 00),
		new Posicion([-34.5222739, -58.7157705], 00),
		new Posicion([-34.5225214, -58.7154379], 00),
		new Posicion([-34.5228308, -58.7149873], 00),
		new Posicion([-34.5231402, -58.7145903], 00),
		new Posicion([-34.5231755, -58.7145259], 00),
		new Posicion([-34.5231755, -58.7145259], 00),
		new Posicion([-34.5231755, -58.7145259], 00),
		new Posicion([-34.5231755, -58.7145259], 00),
		new Posicion([-34.5239563, -58.7135244], 00),
		new Posicion([-34.5250285, -58.7120189], 00),
		new Posicion([-34.5260797, -58.7106154], 00),
		new Posicion([-34.5271519, -58.7091864], 00),
		new Posicion([-34.5279928, -58.707885], 00),
		new Posicion([-34.5279928, -58.707885], 00),
		new Posicion([-34.5274252, -58.7072981], 00),
		new Posicion([-34.5264791, -58.7063795], 00),
		new Posicion([-34.5253859, -58.7052312], 00),
		new Posicion([-34.524524, -58.7043381], 00),
		new Posicion([-34.5240194, -58.7037001], 00),
		new Posicion([-34.5234518, -58.7031643], 00),
		new Posicion([-34.5234518, -58.7031643], 00),
		new Posicion([-34.5228841, -58.7026029], 00),
		new Posicion([-34.5218539, -58.701378], 00),
		new Posicion([-34.5214965, -58.7010208], 00),
//
		new Posicion([-34.5214965, -58.7010208], 01),//En servicio
		new Posicion([-34.5214965, -58.7010208], 01),
		new Posicion([-34.5214965, -58.7010208], 01),
		new Posicion([-34.5214965, -58.7010208], 01),
//
		new Posicion([-34.5208204, -58.7003111], 01),
		new Posicion([-34.5207382, -58.6995627], 01),
		new Posicion([-34.5210382, -58.6991834], 01),
		new Posicion([-34.5214132, -58.698804], 01),
		new Posicion([-34.5219008, -58.6981971], 01),
		new Posicion([-34.5227509, -58.6972261], 01),
		new Posicion([-34.5235134, -58.6962398], 01),
		new Posicion([-34.5241885, -58.6954812], 01),
		new Posicion([-34.5246074, -58.6949503], 01),
		new Posicion([-34.524901, -58.6946012], 01),
		new Posicion([-34.525536, -58.6938592], 01),
		new Posicion([-34.5264062, -58.6944555], 01),
		new Posicion([-34.5268173, -58.6948632], 01),
		new Posicion([-34.5271487, -58.695228], 01),
		new Posicion([-34.5277181, -58.695842], 01),
		new Posicion([-34.5282163, -58.6964091], 01),
		new Posicion([-34.5286285, -58.6968662], 01),
		new Posicion([-34.5290388, -58.6972869], 01),
		new Posicion([-34.5294742, -58.6977455], 01),
		new Posicion([-34.5298479, -58.6981285], 01),
		new Posicion([-34.5302917, -58.6985825], 01),
		new Posicion([-34.5307696, -58.6990938], 01),
		new Posicion([-34.5312452, -58.69959], 01),
		new Posicion([-34.5316151, -58.6999995], 01),
		new Posicion([-34.531773, -58.701342], 01),
		new Posicion([-34.5315387, -58.7031964], 01),
		new Posicion([-34.531649, -58.703327], 01),
		new Posicion([-34.532091, -58.703831], 01),
		new Posicion([-34.532665, -58.704475], 01),
		new Posicion([-34.532992, -58.704775], 01),
		new Posicion([-34.533399, -58.705183], 01),
		new Posicion([-34.533629, -58.705376], 01),
		new Posicion([-34.534044, -58.705816], 01),
		new Posicion([-34.534618, -58.706438], 01),
		new Posicion([-34.535776, -58.707715], 01),
		new Posicion([-34.536324, -58.708273], 01),
		new Posicion([-34.537005, -58.709045], 01),
		new Posicion([-34.538304, -58.710450], 01),
		new Posicion([-34.539126, -58.711271], 01),
		new Posicion([-34.539289, -58.711475], 01),
		new Posicion([-34.539567, -58.711794], 01),
		new Posicion([-34.540091, -58.712347], 01),
		new Posicion([-34.540314, -58.712594], 01),
		new Posicion([-34.540911, -58.713272], 01),

		new Posicion([-34.541176, -58.713476], 01),
		new Posicion([-34.541662, -58.714034], 01),
		new Posicion([-34.542201, -58.714635], 01),
		new Posicion([-34.542546, -58.714978], 01),
		new Posicion([-34.542184, -58.715493], 01),
		new Posicion([-34.541927, -58.715858], 01),
		new Posicion([-34.541927, -58.715858], 01), 
		new Posicion([-34.541927, -58.715858], 01), 
		new Posicion([-34.541765, -58.7160749], 01), 
		new Posicion([-34.541765, -58.7160749], 00), //Libre
		new Posicion([-34.541765, -58.7160749], 00), 
		new Posicion([-34.541765, -58.7160749], 00)
//
		],
	03: [
		new Posicion([-34.5460985, -58.7104065], 01), //En servicio
		new Posicion([-34.5460985, -58.7104065], 01), //En servicio
		new Posicion([-34.5460985, -58.7104065], 00), //Libre
		new Posicion([-34.5460985, -58.7104065], 00), //Libre		
		],
    04: [	
		new Posicion([-34.543322, -58.712427], 02), //No operativa
		new Posicion([-34.543322, -58.712427], 02),
		new Posicion([-34.543322, -58.712427], 02),
		new Posicion([-34.543322, -58.712427], 02),
		new Posicion([-34.543322, -58.712427], 02),
		new Posicion([-34.543322, -58.712427], 02),
		new Posicion([-34.543322, -58.712427], 02), //No operativa
		new Posicion([-34.543322, -58.712427], 00), //Libre
		new Posicion([-34.543452, -58.712210], 00), 
		new Posicion([-34.543600, -58.711982], 00), 
		new Posicion([-34.543658, -58.711751], 00), //10		
		new Posicion([-34.543258, -58.711349], 00), 
		new Posicion([-34.542990, -58.711094], 00), 
		new Posicion([-34.542681, -58.711515], 00), 
		new Posicion([-34.542385, -58.711915], 00), 
		new Posicion([-34.541751, -58.712840], 00), 
		new Posicion([-34.541176, -58.713476], 00),
		new Posicion([-34.541464, -58.713801], 00), 
		new Posicion([-34.541888, -58.714262], 00), 
		new Posicion([-34.542219, -58.714047], 00), 		
		new Posicion([-34.542582, -58.713570], 00), //20
		new Posicion([-34.542895, -58.713050], 00), 
		new Posicion([-34.543236, -58.712545], 00), 
		new Posicion([-34.543487, -58.712218], 00), 
		new Posicion([-34.543867, -58.711580], 00), 
		new Posicion([-34.544075, -58.711290], 00), 
		new Posicion([-34.544446, -58.710786], 00), 
		new Posicion([-34.544769, -58.710405], 00), 
		new Posicion([-34.545290, -58.709815], 00),
		new Posicion([-34.545241, -58.709474], 00),	//
		new Posicion([-34.544906, -58.709088], 00), //30
		new Posicion([-34.544694, -58.708884], 00),
		new Posicion([-34.544579, -58.708755], 00),
		new Posicion([-34.544384, -58.709034], 00),
		new Posicion([-34.544163, -58.709399], 00),
		new Posicion([-34.543792, -58.709893], 00),
		new Posicion([-34.543615, -58.710129], 00),
		new Posicion([-34.543227, -58.710654], 00),
		new Posicion([-34.542873, -58.711116], 00),
		new Posicion([-34.542626, -58.711491], 00),
		new Posicion([-34.542458, -58.711781], 00),	//40		
		new Posicion([-34.542440, -58.711802], 00),
		new Posicion([-34.542385, -58.711915], 00), 
		new Posicion([-34.541751, -58.712840], 00), 
		new Posicion([-34.541176, -58.713476], 00),
		new Posicion([-34.541464, -58.713801], 00), 
		new Posicion([-34.541464, -58.713801], 00), 
		new Posicion([-34.541888, -58.714262], 00), 
		new Posicion([-34.542219, -58.714047], 00), 
		new Posicion([-34.542582, -58.713570], 00), 
		new Posicion([-34.542895, -58.713050], 00), //50
		new Posicion([-34.543236, -58.712545], 00), 
		new Posicion([-34.543487, -58.712218], 00), 
		new Posicion([-34.543867, -58.711580], 00), 
		new Posicion([-34.544075, -58.711290], 00), 
		new Posicion([-34.544446, -58.710786], 00), 
		new Posicion([-34.544769, -58.710405], 00), 
		new Posicion([-34.545290, -58.709815], 00),
		new Posicion([-34.545595, -58.709477], 00), 
		new Posicion([-34.545918, -58.709021], 00),		
		new Posicion([-34.546337, -58.708409], 00), //60
		new Posicion([-34.546713, -58.707862], 00), 
		new Posicion([-34.546713, -58.707862], 00), 
		new Posicion([-34.546713, -58.707862], 00), 
		new Posicion([-34.547389, -58.706862], 00), 
		new Posicion([-34.547729, -58.706422], 00), 
		new Posicion([-34.548122, -58.705977], 00), 
		new Posicion([-34.548578, -58.705312], 00), 
		new Posicion([-34.548215, -58.704851], 00), 
		new Posicion([-34.548215, -58.704851], 00), //Libre
		new Posicion([-34.548215, -58.704851], 01), //En servicio //70
		new Posicion([-34.548215, -58.704851], 01),
		new Posicion([-34.548215, -58.704851], 01),
		new Posicion([-34.547716, -58.704609], 01),
		new Posicion([-34.547009, -58.705618], 01),
		new Posicion([-34.546830, -58.705743], 01),
		new Posicion([-34.546229, -58.706526], 01),
		new Posicion([-34.545584, -58.707438], 01),
		new Posicion([-34.545778, -58.708029], 01),
		new Posicion([-34.546238, -58.708458], 01),
		new Posicion([-34.546760, -58.707752], 01),
		new Posicion([-34.547316, -58.707644], 01),
		new Posicion([-34.547475, -58.707816], 01),
		new Posicion([-34.547475, -58.707816], 01),
		new Posicion([-34.547925, -58.708256], 01),
		new Posicion([-34.548129, -58.708470], 01),
		new Posicion([-34.548412, -58.708760], 01),
		new Posicion([-34.547626, -58.709876], 01),
		new Posicion([-34.546972, -58.710798], 01),
		new Posicion([-34.546468, -58.710788], 01),
		new Posicion([-34.546176, -58.710498], 01),		

		new Posicion([-34.5460985, -58.7104065], 01), //En servicio
		new Posicion([-34.5460985, -58.7104065], 00), //Libre
		new Posicion([-34.5460985, -58.7104065], 00), //Libre
		new Posicion([-34.5460985, -58.7104065], 02), //No operativa
		new Posicion([-34.5460985, -58.7104065], 02) //No operativa

		],
	05: [
		new Posicion([-34.5460985, -58.7104065], 00) //Libre		
		],
	06: [
		new Posicion([-34.541765, -58.7160749], 02)  //No operativa
		]		
}

/******************************************************************************
 * API
 */
exports.get = function(grua_id) {
    return posiciones[grua_id];
}
