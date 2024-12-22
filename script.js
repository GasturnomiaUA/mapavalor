// Inicializar el mapa centrado en la Comunidad Valenciana
var map = L.map('map').setView([39.4, -0.5], 8);

// Capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Definir los iconos personalizados
var IconoAceiteDO = L.icon({
    iconUrl: 'ACEITE.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

var IconoAlcachofa = L.icon({
    iconUrl: 'ALCACHOFA.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

var IconoArroz = L.icon({
    iconUrl: 'ARROZ-VALENCIA.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

var IconoBebidaEspi = L.icon({
    iconUrl: 'LICORES.png', // Ruta al icono de bebidas espirituosas
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoCava = L.icon({
    iconUrl: 'CAVA-REQUENA.png', // Ruta al icono de Cava
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoTurron = L.icon({
    iconUrl: 'TURRON.png', // Ruta al icono de Cava
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoChufa = L.icon({
    iconUrl: 'CHUFA-VALENCIA.png', // Ruta al icono de Cava
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoGranada = L.icon({
    iconUrl: 'GRANADA.png', // Ruta al icono de Cava
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoNispero = L.icon({
    iconUrl: 'NISPEROS.png', // Ruta al icono de Cava
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoUva = L.icon({
    iconUrl: 'UVA.png', // Ruta al icono de Cava
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoCereza = L.icon({
    iconUrl: 'CEREZA.png', // Ruta al icono de Cava
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoCitricos = L.icon({
    iconUrl: 'CITRICOS.png', // Ruta al icono de Cava
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoKaki = L.icon({
    iconUrl: 'KAKI.png', // Ruta al icono de Cava
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoVinos = L.icon({
    iconUrl: 'VINOS.png', // Ruta al icono de Cava
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoCreaturisme = L.icon({
    iconUrl: 'logo_avt_footer.png', // Cambia esta ruta si es necesario
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var Icono1Estrella = L.icon({
    iconUrl: '1estrella.png', // Cambia esta ruta si es necesario
    iconSize: [25, 25],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var Icono2Estrellas = L.icon({
    iconUrl: '2estrellas.png', // Cambia esta ruta si es necesario
    iconSize: [60, 25],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var Icono3Estrellas = L.icon({
    iconUrl: '3estrellas.png', // Cambia esta ruta si es necesario
    iconSize: [80, 25],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoBibGourmand = L.icon({
    iconUrl: 'bibgourmand.png', // Ruta al icono de Cava
    iconSize: [80, 25],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoRecomendadoMichelin = L.icon({
    iconUrl: 'Recomendado_Michelin.png', // Ruta al icono de Cava
    iconSize: [40, 25],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var Icono3Soles = L.icon({
    iconUrl: '3soles.png', // Ruta al icono de Cava
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var Icono2Soles = L.icon({
    iconUrl: '2soles.png', // Ruta al icono de Cava
    iconSize: [32, 32],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var Icono1Sol = L.icon({
    iconUrl: '1sol.png', // Ruta al icono de Cava
    iconSize: [20, 20],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoRecomendadoRepsol = L.icon({
    iconUrl: 'RecomendadoGuiaRepsol.png', // Ruta al icono de Cava
    iconSize: [40, 25],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoSolete = L.icon({
    iconUrl: 'Solete.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoFruta = L.icon({
    iconUrl: 'FRUTAS-VERDURAS-HORT.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoOtros = L.icon({
    iconUrl: 'SETAS.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoPan = L.icon({
    iconUrl: 'PANADERIA-REPOSTERIA.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoPasta = L.icon({
    iconUrl: 'TRIGO-HARINA.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoPescado = L.icon({
    iconUrl: 'PESCADOS-CRUSTACEOS-MARISC.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoCarne = L.icon({
    iconUrl: 'CECINA.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoQueso = L.icon({
    iconUrl: 'QUESOS.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoVarios = L.icon({
    iconUrl: 'VARIOS.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoActividad = L.icon({
    iconUrl: 'ACTIVIDAD-TURISMO.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoAgencia = L.icon({
    iconUrl: 'AGENCIA-TURISMO.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoAlimentoNatural = L.icon({
    iconUrl: 'ERIZO.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoAlimentoProcesado = L.icon({
    iconUrl: 'ALIMENTO-PRODUCTO.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoAsociacion = L.icon({
    iconUrl: 'ASOCIACION-FUNDACION.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoCentrosFormacion = L.icon({
    iconUrl: 'ESCUELA.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoCentrosInvestigacion = L.icon({
    iconUrl: 'CENTRO-INVESTIGACION.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoElaborado = L.icon({
    iconUrl: 'EMBUTIDOS.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});


var IconoComercializacion = L.icon({
    iconUrl: 'ESPACIO-COMERCIO.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoDegustacion = L.icon({
    iconUrl: 'ESPACIO-DEGUSTACION.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoFeria = L.icon({
    iconUrl: 'FERIA-MUESTRA-EVENTO.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoMuseo = L.icon({
    iconUrl: 'MUSEO.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoInmueble = L.icon({
    iconUrl: 'PATRIMONIO-INMUEBLE.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoInmaterial = L.icon({
    iconUrl: 'PATRIMONIO-INMATERIAL.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoNatural = L.icon({
    iconUrl: 'PATRIMONIO-NATURAL.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoProductor = L.icon({
    iconUrl: 'PRODUCTOR.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoProductorV = L.icon({
    iconUrl: 'PRODUCTOR-INSTALACION-VISITABLE.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoRutas = L.icon({
    iconUrl: 'RUTA-ITINERARIO.png', // Ruta al icono de Cava
    iconSize: [30, 30],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoAlojamientos = L.icon({
    iconUrl: 'Hotel.png', // Ruta al icono de Cava
    iconSize: [25, 25],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var IconoRestaurantes = L.icon({
    iconUrl: 'Restauracion.png', // Ruta al icono de Cava
    iconSize: [25, 25],   
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});






// Crear capas de grupo
var aceiteLayer = L.layerGroup();
var alcachofaLayer = L.layerGroup();
var arrozLayer = L.layerGroup();
var bebidaespiLayer = L.layerGroup();
var cavaLayer = L.layerGroup();
var turronLayer = L.layerGroup();
var chufaLayer = L.layerGroup();
var granadaLayer = L.layerGroup();
var nisperoLayer = L.layerGroup();
var uvaLayer = L.layerGroup();
var cerezaLayer = L.layerGroup();
var citricosLayer = L.layerGroup();
var kakiLayer = L.layerGroup();
var utielLayer = L.layerGroup();
var valenciaLayer = L.layerGroup();
var alicanteLayer = L.layerGroup();
var vpLayer = L.layerGroup();
var castellonLayer = L.layerGroup();
var agroturismoLayer = L.layerGroup();
var enoturismoLayer = L.layerGroup();
var oleoturismoLayer = L.layerGroup();
var pescaturismoLayer = L.layerGroup();
var tgLayer = L.layerGroup();
var estrella1 = L.layerGroup();
var estrellas2 = L.layerGroup();
var estrellas3 = L.layerGroup();
var bibgourmand = L.layerGroup();
var recomendadomichelin = L.layerGroup();
var soles3 = L.layerGroup();
var soles2 = L.layerGroup();
var sol1 = L.layerGroup();
var recomendadorepsol = L.layerGroup();
var restaurantessolete = L.layerGroup();
var heladerias = L.layerGroup();
var bares = L.layerGroup();
var cafeterias = L.layerGroup();
var chiringuitos = L.layerGroup();
var vinotecas = L.layerGroup();
var fastgood = L.layerGroup();
var p_aceite = L.layerGroup();
var p_arroz = L.layerGroup();
var bebidas = L.layerGroup();
var frutas = L.layerGroup();
var otros = L.layerGroup();
var panaderia = L.layerGroup();
var pasta = L.layerGroup();
var pescado = L.layerGroup();
var carne = L.layerGroup();
var quesos = L.layerGroup();
var varios = L.layerGroup();
var vinos = L.layerGroup();
var actividad = L.layerGroup();
var agencia = L.layerGroup();
var alimentonatural = L.layerGroup();
var alimentoprocesado = L.layerGroup();
var asociacion = L.layerGroup();
var caminos = L.layerGroup();
var centrosformacion = L.layerGroup();
var centrosinvestigacion = L.layerGroup();
var elaborado = L.layerGroup();
var comercializacion = L.layerGroup();
var degustacion = L.layerGroup();
var feria = L.layerGroup();
var museo = L.layerGroup();
var inmueble = L.layerGroup();
var inmaterial = L.layerGroup();
var natural = L.layerGroup();
var productor = L.layerGroup();
var productorv = L.layerGroup();
var rutas = L.layerGroup();
var alojamientos = L.layerGroup();
var restauracion = L.layerGroup();
var exquisit = L.layerGroup();
var MapaRestaurantes = L.layerGroup();
var plazas = L.layerGroup();
var presthab = L.layerGroup();
var plahab = L.layerGroup();
var plakm2 = L.layerGroup();
var repla = L.layerGroup();
var rekm2 = L.layerGroup();








// Definir un diccionario para las capas, que permite alternarlas con toggleLayer
var layers = {
    aceiteLayer: aceiteLayer,
    alcachofaLayer: alcachofaLayer,
    arrozLayer: arrozLayer,
    bebidaespiLayer: bebidaespiLayer,
    cavaLayer: cavaLayer,
    turronLayer: turronLayer,
    chufaLayer: chufaLayer,
    granadaLayer: granadaLayer,
    nisperoLayer: nisperoLayer,
    uvaLayer: uvaLayer,
    cerezaLayer: cerezaLayer,
    citricosLayer: citricosLayer,
    kakiLayer: kakiLayer,
    utielLayer: utielLayer,
    valenciaLayer: valenciaLayer,
    alicanteLayer: alicanteLayer,
    vpLayer: vpLayer,
    castellonLayer: castellonLayer,
    agroturismoLayer: agroturismoLayer,
    enoturismoLayer: enoturismoLayer,
    oleoturismoLayer: oleoturismoLayer,
    pescaturismoLayer: pescaturismoLayer,
    tgLayer: tgLayer,
    estrella1: estrella1,
    estrellas2: estrellas2,
    estrellas3: estrellas3,
    bibgourmand: bibgourmand,
    recomendadomichelin: recomendadomichelin,
    soles3: soles3,
    soles2: soles2,
    sol1: sol1,
    recomendadorepsol:recomendadorepsol,
    restaurantessolete:restaurantessolete,
    heladerias:heladerias,
    bares:bares,
    cafeterias:cafeterias,
    chiringuitos:chiringuitos,
    vinotecas:vinotecas,
    fastgood:fastgood,
    p_aceite:p_aceite,
    p_arroz:p_arroz,
    bebidas:bebidas,
    frutas:frutas,
    otros:otros,
    panaderia:panaderia,
    pasta:pasta,
    pescado:pescado,
    carne:carne,
    quesos:quesos,
    varios:varios,
    vinos:vinos,
    actividad:actividad,
    agencia:agencia,
    alimentonatural:alimentonatural,
    alimentoprocesado: alimentoprocesado,
    asociacion:asociacion,
    caminos:caminos,
    centrosformacion:centrosformacion,
    centrosinvestigacion:centrosinvestigacion,
    elaborado:elaborado,
    comercializacion:comercializacion,
    degustacion:degustacion,
    feria:feria,
    museo:museo,
    inmueble:inmueble,
    inmaterial:inmaterial,
    natural:natural,
    productor:productor,
    productorv:productorv,
    rutas:rutas,
    alojamientos:alojamientos,
    restauracion:restauracion,
    exquisit:exquisit,
    MapaRestaurantes:MapaRestaurantes,
    plazas:plazas,
    presthab:presthab,
    plahab:plahab,
    plakm2:plakm2,
    repla:repla,
    rekm2:rekm2
};

// Cargar y añadir la capa "Aceite" al grupo aceiteLayer
fetch('Aceite.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, { icon: IconoAceiteDO });
            },
            onEachFeature: function(feature, layer) {
                var popupContent = `<h3>${feature.properties.CEN_DS_NOM}</h3>
                                    <p><strong>Municipio:</strong> ${feature.properties.MUNICIPIO}</p>
                                    <p><strong>Dirección:</strong> ${feature.properties.LOC_DS_DIR}</p>
                                    <p><strong>Web:</strong> <a href='${feature.properties.LOC_DS_WEB || '#'}'>${feature.properties.LOC_DS_WEB || 'Sin web'}</a></p>
                                    <p><strong>Oleoturismo:</strong> ${feature.properties.Oleoturismo || 'No disponible'}</p>`;
                layer.bindPopup(popupContent);
            }
        }).addTo(aceiteLayer);
    })
    .catch(error => console.error('Error al cargar el archivo Aceite.json:', error));

// Cargar y añadir la capa "Alcachofa" al grupo alcachofaLayer
fetch('ALCACHOFA.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, { icon: IconoAlcachofa });
            },
            onEachFeature: function(feature, layer) {
                var popupContent = `<h3>${feature.properties.CEN_DS_NOM}</h3>
                                    <p><strong>Municipio:</strong> ${feature.properties.MUNICIPIO}</p>
                                    <p><strong>Dirección:</strong> ${feature.properties.LOC_DS_DIR}</p>
                                    <p><strong>Web:</strong> <a href='${feature.properties.LOC_DS_WEB || '#'}'>${feature.properties.LOC_DS_WEB || 'Sin web'}</a></p>`;
                layer.bindPopup(popupContent);
            }
        }).addTo(alcachofaLayer);
    })
    .catch(error => console.error('Error al cargar el archivo ALCACHOFA.json:', error));

// Cargar y añadir la capa "Arroz" al grupo arrozLayer
fetch('Arroz.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, { icon: IconoArroz });
            },
            onEachFeature: function(feature, layer) {
                var popupContent = `<h3>${feature.properties.CEN_DS_NOM}</h3>
                                    <p><strong>Municipio:</strong> ${feature.properties.MUNICIPIO}</p>
                                    <p><strong>Dirección:</strong> ${feature.properties.LOC_DS_DIR}</p>
                                    <p><strong>Web:</strong> <a href='${feature.properties.LOC_DS_WEB || '#'}'>${feature.properties.LOC_DS_WEB || 'Sin web'}</a></p>
                                    <p><strong>Agroturismo:</strong> ${feature.properties.Oleoturismo || 'No disponible'}</p>`;
                layer.bindPopup(popupContent);
            }
        }).addTo(arrozLayer);
    })
    .catch(error => console.error('Error al cargar el archivo Arroz.json:', error));

    // Cargar la capa GeoJSON "Bebidas Espirituosas"
fetch('BebidasEspituosas.json') // Corregido nombre del archivo
.then(response => response.json())
.then(data => {
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            return L.marker(latlng, { icon: IconoBebidaEspi });
        },
        onEachFeature: function(feature, layer) {
            var popupContent = "<h3>" + feature.properties.CEN_DS_NOM + "</h3>" +
                               "<p><strong>Municipio:</strong> " + feature.properties.MUNICIPIO + "</p>" +
                               "<p><strong>Dirección:</strong> " + feature.properties.LOC_DS_DIR + "</p>" +
                               "<p><strong>Web:</strong> <a href='" + (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : '#') + "'>" + 
                               (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : 'Sin web') + "</a></p>";
            layer.bindPopup(popupContent);
        }
    }).addTo(bebidaespiLayer); // Añadir la capa al grupo
})
.catch(error => console.error('Error al cargar el archivo BebidasEspirituosas.json:', error));

// Cargar la capa GeoJSON "Cava"
fetch('Cava.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, { icon: IconoCava });
            },
            onEachFeature: function(feature, layer) {
                var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                   "<p><strong>Municipio:</strong> " + feature.properties.Municipio + "</p>" +
                                   "<p><strong>Dirección:</strong> " + feature.properties.Dirección + "</p>" +
                                   "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info ? feature.properties.Web_Info : '#') + "'>" + 
                                   (feature.properties.Web_Info ? feature.properties.Web_Info : 'Sin web') + "</a></p>" +
                                   "<p><strong>Enoturismo:</strong> " + (feature.properties.Enoturismo ? feature.properties.Enoturismo : 'No disponible') + "</p>"; // Asegúrate de que este campo exista
                layer.bindPopup(popupContent);
            }
        }).addTo(cavaLayer); // Añadir la capa al grupo
    })
    .catch(error => console.error('Error al cargar el archivo Cava.geojson:', error));

// Cargar la capa GeoJSON "Bebidas Espirituosas"
fetch('Turron.geojson') // Corregido nombre del archivo
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, { icon: IconoTurron });
            },
            onEachFeature: function(feature, layer) {
                var popupContent = "<h3>" + feature.properties.CEN_DS_NOM + "</h3>" +
                                   "<p><strong>Municipio:</strong> " + feature.properties.MUNICIPIO + "</p>" +
                                   "<p><strong>Dirección:</strong> " + feature.properties.LOC_DS_DIR + "</p>" +
                                   "<p><strong>Web:</strong> <a href='" + (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : '#') + "'>" + 
                                   (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : 'Sin web') + "</a></p>";
                layer.bindPopup(popupContent);
            }
        }).addTo(turronLayer); // Añadir la capa al grupo
    })
    .catch(error => console.error('Error al cargar el archivo BebidasEspirituosas.json:', error));

    // Cargar la capa GeoJSON "Chufa"
fetch('Chufa.geojson')
.then(response => response.json())
.then(data => {
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            return L.marker(latlng, { icon: IconoChufa });
        },
        onEachFeature: function(feature, layer) {
            var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                               "<p><strong>Municipio:</strong> " + feature.properties.Municipio + "</p>" +
                               "<p><strong>Dirección:</strong> " + feature.properties.Dirección + "</p>" +
                               "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info ? feature.properties.Web_Info : '#') + "'>" + 
                               (feature.properties.Web_Info ? feature.properties.Web_Info : 'Sin web') + "</a></p>" +
                               "<p><strong>Enoturismo:</strong> " + (feature.properties.Enoturismo ? feature.properties.Enoturismo : 'No disponible') + "</p>"+
                               "<p><strong>Tipo de Empresa:</strong> " + feature.properties.Tipo_de_em + "</p>";
            layer.bindPopup(popupContent);
        }
    }).addTo(chufaLayer); // Añadir la capa al grupo
})
.catch(error => console.error('Error al cargar el archivo Chufa.geojson:', error));

 // Cargar la capa GeoJSON "Granada"
 fetch('Granada.geojson') // Corregido nombre del archivo
 .then(response => response.json())
 .then(data => {
     L.geoJSON(data, {
         pointToLayer: function(feature, latlng) {
             return L.marker(latlng, { icon: IconoGranada });
         },
         onEachFeature: function(feature, layer) {
             var popupContent = "<h3>" + feature.properties.CEN_DS_NOM + "</h3>" +
                                "<p><strong>Municipio:</strong> " + feature.properties.MUNICIPIO + "</p>" +
                                "<p><strong>Dirección:</strong> " + feature.properties.LOC_DS_DIR + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : '#') + "'>" + 
                                (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : 'Sin web') + "</a></p>";
             layer.bindPopup(popupContent);
         }
     }).addTo(granadaLayer); // Añadir la capa al grupo
 })
 .catch(error => console.error('Error al cargar el archivo Granada.geojson:', error));
 
     // Cargar la capa GeoJSON "Nispero"
     fetch('Nispero.geojson') // Corregido nombre del archivo
     .then(response => response.json())
     .then(data => {
         L.geoJSON(data, {
             pointToLayer: function(feature, latlng) {
                 return L.marker(latlng, { icon: IconoNispero });
             },
             onEachFeature: function(feature, layer) {
                 var popupContent = "<h3>" + feature.properties.CEN_DS_NOM + "</h3>" +
                                    "<p><strong>Municipio:</strong> " + feature.properties.MUNICIPIO + "</p>" +
                                    "<p><strong>Dirección:</strong> " + feature.properties.LOC_DS_DIR + "</p>" +
                                    "<p><strong>Web:</strong> <a href='" + (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : '#') + "'>" + 
                                    (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : 'Sin web') + "</a></p>";
                 layer.bindPopup(popupContent);
             }
         }).addTo(nisperoLayer); // Añadir la capa al grupo
     })
     .catch(error => console.error('Error al cargar el archivo Nispero.geojson:', error));
 
 
        // Cargar la capa GeoJSON "Uva"
        fetch('Uva.geojson') // Corregido nombre del archivo
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                pointToLayer: function(feature, latlng) {
                    return L.marker(latlng, { icon: IconoUva });
                },
                onEachFeature: function(feature, layer) {
                    var popupContent = "<h3>" + feature.properties.CEN_DS_NOM + "</h3>" +
                                       "<p><strong>Municipio:</strong> " + feature.properties.MUNICIPIO + "</p>" +
                                       "<p><strong>Dirección:</strong> " + feature.properties.LOC_DS_DIR + "</p>" +
                                       "<p><strong>Web:</strong> <a href='" + (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : '#') + "'>" + 
                                       (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : 'Sin web') + "</a></p>";
                    layer.bindPopup(popupContent);
                }
            }).addTo(uvaLayer); // Añadir la capa al grupo
        })
        .catch(error => console.error('Error al cargar el archivo Uva.geojson:', error));
 
 
        // Cargar la capa GeoJSON "Uva"
        fetch('Cereza.geojson') // Corregido nombre del archivo
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                pointToLayer: function(feature, latlng) {
                    return L.marker(latlng, { icon: IconoCereza });
                },
                onEachFeature: function(feature, layer) {
                    var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                       "<p><strong>Municipio:</strong> " + feature.properties.MUNICIPIO + "</p>" +
                                       "<p><strong>Dirección:</strong> " + feature.properties.LOC_DS_DIR + "</p>" +
                                       "<p><strong>Web:</strong> <a href='" + (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : '#') + "'>" + 
                                       (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : 'Sin web') + "</a></p>";
                    layer.bindPopup(popupContent);
                }
            }).addTo(cerezaLayer); // Añadir la capa al grupo
        })
        .catch(error => console.error('Error al cargar el archivo Uva.geojson:', error));
 
 
         // Cargar la capa GeoJSON "Cítricos"
         fetch('Citricos.geojson') // Corregido nombre del archivo
         .then(response => response.json())
         .then(data => {
             L.geoJSON(data, {
                 pointToLayer: function(feature, latlng) {
                     return L.marker(latlng, { icon: IconoCitricos });
                 },
                 onEachFeature: function(feature, layer) {
                     var popupContent = "<h3>" + feature.properties.CEN_DS_NOM + "</h3>" +
                                        "<p><strong>Municipio:</strong> " + feature.properties.MUNICIPIO + "</p>" +
                                        "<p><strong>Dirección:</strong> " + feature.properties.LOC_DS_DIR + "</p>" +
                                        "<p><strong>Web:</strong> <a href='" + (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : '#') + "'>" + 
                                        (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : 'Sin web') + "</a></p>";
                     layer.bindPopup(popupContent);
                 }
             }).addTo(citricosLayer); // Añadir la capa al grupo
         })
         .catch(error => console.error('Error al cargar el archivo Citricos.geojson:', error));
 
 
     // Cargar la capa GeoJSON "Kaki"
         fetch('Kaki.geojson') // Corregido nombre del archivo
         .then(response => response.json())
         .then(data => {
             L.geoJSON(data, {
                 pointToLayer: function(feature, latlng) {
                     return L.marker(latlng, { icon: IconoKaki });
                 },
                 onEachFeature: function(feature, layer) {
                     var popupContent = "<h3>" + feature.properties.CEN_DS_NOM + "</h3>" +
                                        "<p><strong>Municipio:</strong> " + feature.properties.MUNICIPIO + "</p>" +
                                        "<p><strong>Dirección:</strong> " + feature.properties.LOC_DS_DIR + "</p>" +
                                        "<p><strong>Web:</strong> <a href='" + (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : '#') + "'>" + 
                                        (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : 'Sin web') + "</a></p>";
                     layer.bindPopup(popupContent);
                 }
             }).addTo(kakiLayer); // Añadir la capa al grupo
         })
         .catch(error => console.error('Error al cargar el archivo Citricos.geojson:', error));
 
 
 
            // Cargar la capa GeoJSON "DO UTIEL-REQUENA"
            fetch('UtielRequena.geojson') // Corregido nombre del archivo
            .then(response => response.json())
            .then(data => {
                L.geoJSON(data, {
                    pointToLayer: function(feature, latlng) {
                        return L.marker(latlng, { icon: IconoVinos });
                    },
                    onEachFeature: function(feature, layer) {
                        var popupContent = "<h3>" + feature.properties.CEN_DS_NOM + "</h3>" +
                                           "<p><strong>Municipio:</strong> " + feature.properties.MUNICIPIO + "</p>" +
                                           "<p><strong>Dirección:</strong> " + feature.properties.LOC_DS_DIR + "</p>" +
                                           "<p><strong>Web:</strong> <a href='" + (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : '#') + "'>" + 
                                           (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : 'Sin web') + "</a></p>"+
                                           "<p><strong>Enoturismo:</strong> " + (feature.properties.Enoturismo ? feature.properties.Enoturismo : 'No disponible') + "</p>";
                        layer.bindPopup(popupContent);
                    }
                }).addTo(utielLayer); // Añadir la capa al grupo
            })
            .catch(error => console.error('Error al cargar el archivo Citricos.geojson:', error));
 
 
              // Cargar la capa GeoJSON "DO VALENCIA"
              fetch('VinosValencia.geojson') // Corregido nombre del archivo
              .then(response => response.json())
              .then(data => {
                  L.geoJSON(data, {
                      pointToLayer: function(feature, latlng) {
                          return L.marker(latlng, { icon: IconoVinos });
                      },
                      onEachFeature: function(feature, layer) {
                          var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                             "<p><strong>Municipio:</strong> " + feature.properties.Municipio + "</p>" +
                                             "<p><strong>Dirección:</strong> " + feature.properties.Dirección + "</p>" +
                                             "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info ? feature.properties.LOC_DS_WEB : '#') + "'>" + 
                                             (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : 'Sin web') + "</a></p>"+
                                             "<p><strong>Enoturismo:</strong> " + (feature.properties.Enoturismo ? feature.properties.Enoturismo : 'No disponible') + "</p>";
                          layer.bindPopup(popupContent);
                      }
                  }).addTo(valenciaLayer); // Añadir la capa al grupo
              })
              .catch(error => console.error('Error al cargar el archivo Citricos.geojson:', error));
  
  // Cargar la capa GeoJSON "DO ALICANTE"
  fetch('AlicanteVino.geojson') // Corregido nombre del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoVinos });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.CEN_DS_NOM + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + feature.properties.MUNICIPIO + "</p>" +
                                 "<p><strong>Dirección:</strong> " + feature.properties.LOC_DS_DIR + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info ? feature.properties.LOC_DS_WEB : '#') + "'>" + 
                                             (feature.properties.LOC_DS_WEB ? feature.properties.LOC_DS_WEB : 'Sin web') + "</a></p>"+
                                 "<p><strong>Enoturismo:</strong> " + (feature.properties.Enoturismo ? feature.properties.Enoturismo : 'No disponible') + "</p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(alicanteLayer); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo Citricos.geojson:', error));
 
   // Cargar la capa GeoJSON "Vinos de Pago"
   fetch('VP.geojson') // Corregido nombre del archivo
   .then(response => response.json())
   .then(data => {
       L.geoJSON(data, {
           pointToLayer: function(feature, latlng) {
               return L.marker(latlng, { icon: IconoVinos });
           },
           onEachFeature: function(feature, layer) {
               var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                  "<p><strong>Municipio:</strong> " + feature.properties.Municipio + "</p>" +
                                  "<p><strong>Dirección:</strong> " + feature.properties.Dirección + "</p>" +
                                  "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info ? feature.properties.Web_Info : '#') + "'>" + 
                                  (feature.properties.Web_Info ? feature.properties.Web_Info : 'Sin web') + "</a></p>"+
                                  "<p><strong>Enoturismo:</strong> " + (feature.properties.Enoturismo ? feature.properties.Enoturismo : 'No disponible') + "</p>";
               layer.bindPopup(popupContent);
           }
       }).addTo(vpLayer); // Añadir la capa al grupo
   })
   .catch(error => console.error('Error al cargar el archivo Citricos.geojson:', error));
 
  // Cargar la capa GeoJSON "IGP Castellón"
  fetch('Castellon.geojson') // Corregido nombre del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoVinos });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + feature.properties.Municipio + "</p>" +
                                 "<p><strong>Dirección:</strong> " + feature.properties.Dirección + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info ? feature.properties.Web_Info : '#') + "'>" + 
                                 (feature.properties.Web_Info ? feature.properties.Web_Info : 'Sin web') + "</a></p>"+
                                 "<p><strong>Enoturismo:</strong> " + (feature.properties.Enoturismo ? feature.properties.Enoturismo : 'No disponible') + "</p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(castellonLayer); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo Citricos.geojson:', error));
 

  fetch('Agroturismo.geojson')
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoCreaturisme });
          },
          onEachFeature: function(feature, layer) {
              var experienciaUrl = feature.properties["CREATURISME 2022_Web Experiencia"] || '#';
              var empresaUrl = feature.properties["CREATURISME 2022_Web Empresa"] || '#';
              var popupContent = "<h3>" + (feature.properties["CREATURISME 2022_Experiencia"] || 'Experiencia no disponible') + "</h3>" +
                  "<p><strong>Web de la experiencia:</strong> <a href='" + experienciaUrl + "' target='_blank'>Visitar experiencia</a></p>" +
                  "<p><strong>Empresa:</strong> " + (feature.properties["CREATURISME 2022_Empresa"] || 'No disponible') + "</p>" +
                  "<p><strong>Web de la empresa:</strong> <a href='" + empresaUrl + "' target='_blank'>Visitar sitio</a></p>" +
                  "<p><strong>Descripción:</strong> " + (feature.properties["CREATURISME 2022_Descripción"] || 'No disponible') + "</p>" +
                  "<p><strong>Dirección:</strong> " + (feature.properties["CREATURISME 2022_Dirección"] || 'No disponible') + "</p>" +
                  "<p><strong>Municipio:</strong> " + (feature.properties["CREATURISME 2022_Municipio"] || 'No disponible') + "</p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(agroturismoLayer);
  })
  .catch(error => console.error('Error al cargar Agroturismo.geojson:', error));

  fetch('Enoturismo.geojson')
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoCreaturisme });
          },
          onEachFeature: function(feature, layer) {
              var experienciaUrl = feature.properties["CREATURISME 2022_Web Experiencia"] || '#';
              var empresaUrl = feature.properties["CREATURISME 2022_Web Empresa"] || '#';
              var popupContent = "<h3>" + (feature.properties["CREATURISME 2022_Experiencia"] || 'Experiencia no disponible') + "</h3>" +
                  "<p><strong>Web de la experiencia:</strong> <a href='" + experienciaUrl + "' target='_blank'>Visitar experiencia</a></p>" +
                  "<p><strong>Empresa:</strong> " + (feature.properties["CREATURISME 2022_Empresa"] || 'No disponible') + "</p>" +
                  "<p><strong>Web de la empresa:</strong> <a href='" + empresaUrl + "' target='_blank'>Visitar sitio</a></p>" +
                  "<p><strong>Descripción:</strong> " + (feature.properties["CREATURISME 2022_Descripción"] || 'No disponible') + "</p>" +
                  "<p><strong>Dirección:</strong> " + (feature.properties["CREATURISME 2022_Dirección"] || 'No disponible') + "</p>" +
                  "<p><strong>Municipio:</strong> " + (feature.properties["CREATURISME 2022_Municipio"] || 'No disponible') + "</p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(enoturismoLayer);
  })
  .catch(error => console.error('Error al cargar Enoturismo.geojson:', error));

  fetch('Oleoturismo.geojson')
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoCreaturisme });
          },
          onEachFeature: function(feature, layer) {
              var experienciaUrl = feature.properties["CREATURISME 2022_Web Experiencia"] || '#';
              var empresaUrl = feature.properties["CREATURISME 2022_Web Empresa"] || '#';
              var popupContent = "<h3>" + (feature.properties["CREATURISME 2022_Experiencia"] || 'Experiencia no disponible') + "</h3>" +
                  "<p><strong>Web de la experiencia:</strong> <a href='" + experienciaUrl + "' target='_blank'>Visitar experiencia</a></p>" +
                  "<p><strong>Empresa:</strong> " + (feature.properties["CREATURISME 2022_Empresa"] || 'No disponible') + "</p>" +
                  "<p><strong>Web de la empresa:</strong> <a href='" + empresaUrl + "' target='_blank'>Visitar sitio</a></p>" +
                  "<p><strong>Descripción:</strong> " + (feature.properties["CREATURISME 2022_Descripción"] || 'No disponible') + "</p>" +
                  "<p><strong>Dirección:</strong> " + (feature.properties["CREATURISME 2022_Dirección"] || 'No disponible') + "</p>" +
                  "<p><strong>Municipio:</strong> " + (feature.properties["CREATURISME 2022_Municipio"] || 'No disponible') + "</p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(oleoturismoLayer);
  })
  .catch(error => console.error('Error al cargar Oleoturismo.geojson:', error));


  fetch('Pescaturismo.geojson')
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoCreaturisme });
          },
          onEachFeature: function(feature, layer) {
              var experienciaUrl = feature.properties["CREATURISME 2022_Web Experiencia"] || '#';
              var empresaUrl = feature.properties["CREATURISME 2022_Web Empresa"] || '#';
              var popupContent = "<h3>" + (feature.properties["CREATURISME 2022_Experiencia"] || 'Experiencia no disponible') + "</h3>" +
                  "<p><strong>Web de la experiencia:</strong> <a href='" + experienciaUrl + "' target='_blank'>Visitar experiencia</a></p>" +
                  "<p><strong>Empresa:</strong> " + (feature.properties["CREATURISME 2022_Empresa"] || 'No disponible') + "</p>" +
                  "<p><strong>Web de la empresa:</strong> <a href='" + empresaUrl + "' target='_blank'>Visitar sitio</a></p>" +
                  "<p><strong>Descripción:</strong> " + (feature.properties["CREATURISME 2022_Descripción"] || 'No disponible') + "</p>" +
                  "<p><strong>Dirección:</strong> " + (feature.properties["CREATURISME 2022_Dirección"] || 'No disponible') + "</p>" +
                  "<p><strong>Municipio:</strong> " + (feature.properties["CREATURISME 2022_Municipio"] || 'No disponible') + "</p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(pescaturismoLayer);
  })
  .catch(error => console.error('Error al cargar Pescaturismo.geojson:', error));

  fetch('Turismo_Gastronomico.geojson')
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoCreaturisme });
          },
          onEachFeature: function(feature, layer) {
              var experienciaUrl = feature.properties["CREATURISME 2022_Web Experiencia"] || '#';
              var empresaUrl = feature.properties["CREATURISME 2022_Web Empresa"] || '#';
              var popupContent = "<h3>" + (feature.properties["CREATURISME 2022_Experiencia"] || 'Experiencia no disponible') + "</h3>" +
                  "<p><strong>Web de la experiencia:</strong> <a href='" + experienciaUrl + "' target='_blank'>Visitar experiencia</a></p>" +
                  "<p><strong>Empresa:</strong> " + (feature.properties["CREATURISME 2022_Empresa"] || 'No disponible') + "</p>" +
                  "<p><strong>Web de la empresa:</strong> <a href='" + empresaUrl + "' target='_blank'>Visitar sitio</a></p>" +
                  "<p><strong>Descripción:</strong> " + (feature.properties["CREATURISME 2022_Descripción"] || 'No disponible') + "</p>" +
                  "<p><strong>Dirección:</strong> " + (feature.properties["CREATURISME 2022_Dirección"] || 'No disponible') + "</p>" +
                  "<p><strong>Municipio:</strong> " + (feature.properties["CREATURISME 2022_Municipio"] || 'No disponible') + "</p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(tgLayer);
  })
  .catch(error => console.error('Error al cargar Pescaturismo.geojson:', error));


  fetch('1estrella.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: Icono1Estrella });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(estrella1); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));

  fetch('2estrellas.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: Icono2Estrellas });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(estrellas2); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));


  fetch('3estrellas.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: Icono3Estrellas });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(estrellas3); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));


  fetch('bibgourmand.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoBibGourmand });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(bibgourmand); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));

  
  fetch('Recomendado.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoRecomendadoMichelin });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(recomendadomichelin); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));

  fetch('3soles.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: Icono3Soles });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(soles3); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));


  fetch('2soles.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: Icono2Soles });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(soles2); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));


  fetch('1sol.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: Icono1Sol });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(sol1); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));

  fetch('Recomendado_Repsol.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoRecomendadoRepsol });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(recomendadorepsol); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));

  fetch('RestaurantesSoletes.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoSolete });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(restaurantessolete); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));

  fetch('Heladerias.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoSolete });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Direccion || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(heladerias); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));


  fetch('Bares.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoSolete });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(bares); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));



  fetch('Cafeterias.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoSolete });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(cafeterias); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));

  fetch('Chiringuitos.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoSolete });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(chiringuitos); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));

  fetch('Vinotecas.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoSolete });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(vinotecas); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));


  fetch('FastGood.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoSolete });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                 "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'Municipio no disponible') + "</p>" +
                                 "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(fastgood); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));


  fetch('P_Aceite.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoAceiteDO });
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                 "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                 "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                 "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                 "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                 "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                 (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(p_aceite); // Añadir la capa al grupo
  })
  .catch(error => console.error('Error al cargar el archivo 1estrella.geojson:', error));


  fetch('P_Arroz.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoArroz }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(p_arroz); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('Bebidas.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoBebidaEspi }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(bebidas); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));
  
  fetch('Frutas.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoFruta }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(frutas); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));


  fetch('Otros_productos.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoOtros }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(otros); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('Panaderia.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoPan }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(panaderia); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('Pasta.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoPasta }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(pasta); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));


  fetch('Pescados.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoPescado }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(pescado); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));


  fetch('carne.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoCarne }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(carne); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));


  fetch('Queso.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoQueso }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(quesos); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('Varios.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoVarios }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(varios); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('Vinos.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoVinos }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(vinos); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));


  fetch('Actividad1.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoActividad }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(actividad); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));


  fetch('Agencia.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoAgencia }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(agencia); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('AlimentoNatural.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoAlimentoNatural }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(alimentonatural); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));


  fetch('AlimentoProcesado.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoAlimentoProcesado }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(alimentoprocesado); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('Asociacion.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoAsociacion }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(asociacion); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));


  fetch('Caminos.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          style: function(feature) { // Estilo para las líneas
              return {
                  color: 'red', // Cambia el color según prefieras
                  weight: 6, // Grosor de la línea
                  opacity: 0.8 // Opacidad de la línea
              };
          },
          onEachFeature: function(feature, layer) { // Función para agregar información adicional
              var popupContent = "<h3>" + (feature.properties.Nombre || 'Sin nombre') + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(caminos); // Asegúrate de inicializar correctamente la variable "asociacion"
  })
  .catch(error => console.error('Error al cargar el archivo Asociacion.geojson:', error));


  fetch('CentrosFormacion.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoCentrosFormacion }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(centrosformacion); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));


  fetch('CentrosInvestigacion.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoCentrosInvestigacion }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(centrosinvestigacion); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('Elaborado.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoElaborado }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(elaborado); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));


  fetch('Espacios_comercializacion.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoComercializacion }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(comercializacion); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  
  fetch('Espacios_Degustacion.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoDegustacion }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(degustacion); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));


  fetch('Feria.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoFeria }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(feria); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('Museo.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoMuseo }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(museo); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('Patrimonioinmueble.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoInmueble }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(inmueble); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('PatrimonioInmaterial.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoInmaterial }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(inmaterial); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('PatrimonioNatural.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoNatural }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(natural); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('Productor.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoProductor }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(productor); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('ProductorV.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoProductorV }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(productorv); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('Rutas.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoRutas }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Gestión:</strong> " + (feature.properties.Gestión || 'No disponible') + "</p>" +
                                "<p><strong>Descripción:</strong> " + (feature.properties.Descrip || 'No disponible') + "</p>" +
                                "<p><strong>Temporada:</strong> " + (feature.properties.Temporada || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.Web_Info || '#') + "' target='_blank'>" + 
                                (feature.properties.Web_Info ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(rutas); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));


  fetch('Alojamientos.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoAlojamientos }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Categoría:</strong> " + (feature.properties.Clasificac || 'No disponible') + "</p>" +
                                "<p><strong>Oferta gastronómica:</strong> " + (feature.properties.Ofertagas || 'No disponible') + "</p>" +
                                "<p><strong>Desayuno incluido:</strong> " + (feature.properties.Desayuno || 'No disponible') + "</p>" +
                                "<p><strong>Buffet Libre:</strong> " + (feature.properties.Buffet || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.WebInfo || '#') + "' target='_blank'>" + 
                                (feature.properties.WebInfo ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(alojamientos); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));
  
  fetch('Restauracion.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoRestaurantes }); // Asegúrate de definir IconoArroz
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Localidad:</strong> " + (feature.properties.Localidad || 'Localidad no disponible') + "</p>" +
                                "<p><strong>Carta Online:</strong> " + (feature.properties.CartaOnline || 'No disponible') + "</p>" +
                                "<p><strong>Reserva Online:</strong> " + (feature.properties.ReservaOnline || 'No disponible') + "</p>" +
                                "<p><strong>Web:</strong> <a href='" + (feature.properties.WebInfo || '#') + "' target='_blank'>" + 
                                (feature.properties.WebInfo ? 'Visitar sitio' : 'Sin web') + "</a></p>";
              layer.bindPopup(popupContent);
          }
      }).addTo(restauracion); // Asegúrate de inicializar p_arroz
  })
  .catch(error => console.error('Error al cargar el archivo P_Arroz.geojson:', error));

  fetch('Exquisit.geojson') // Nombre correcto del archivo
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          pointToLayer: function(feature, latlng) {
              return L.marker(latlng, { icon: IconoCreaturisme }); // Asegúrate de definir IconoRestaurantes
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.Nombre + "</h3>" +
                                "<p><strong>Dirección:</strong> " + (feature.properties.Dirección || 'Dirección no disponible') + "</p>" +
                                "<p><strong>Municipio:</strong> " + (feature.properties.Municipio || 'No disponible') + "</p>" +
                                "<p><strong>Comarca:</strong> " + (feature.properties.Comarca || 'No disponible') + "</p>" +
                                "<p><strong>Canal de Información:</strong> <a href='" + (feature.properties["Canal de Información"] || '#') + "' target='_blank'>" + 
                                (feature.properties["Canal de Información"] ? 'Visitar sitio' : 'No disponible') + "</a></p>" +
                                "<p><strong>Productos locales/Km 0:</strong> " + feature.properties["¿Utilizan productos locales/de la zona/Km 0?"] + "</p>" +
                                "<p><strong>Alusión al paisaje o territorio:</strong> " + feature.properties["¿Hay alusión al paisaje o al territorio?"] + "</p>" +
                                "<p><strong>Cocina tradicional:</strong> " + feature.properties["¿Cocina de mercado/tradicional/casera?"] + "</p>" +
                                "<p><strong>Término experiencia/experimentar:</strong> " + feature.properties["¿Se utiliza el término experiencia/experimentar/experiencial?"] + "</p>" +
                                "<p><strong>Uso de emociones y sensaciones:</strong> " + feature.properties["¿Se hace alusión a las emociones, las sensaciones, uso de los sentidos?"] + "</p>" +
                                "<p><strong>Recetario:</strong> " + feature.properties["¿Hay o no recetario?"] + "</p>" +
                                "<p><strong>Alusión a L´Exquisit Mediterrani:</strong> " + feature.properties["¿Hacen alusión a que pertenecen L´Exquisit Mediterrani?"] + "</p>" +
                                "<p><strong>Imágenes del entorno territorial:</strong> " + feature.properties["¿Hay imágenes del entorno territorial?"] + "</p>" +
                                "<p><strong>Imágenes de los platos:</strong> " + feature.properties["¿Hay imágenes de los platos?"] + "</p>" +
                                "<p><strong>Imágenes de la cadena de valor:</strong> " + feature.properties["¿Hay imágenes de otros elementos de la cadena de valor (bodega, almazara, cooperativa, mercados, productor local, otras experiencias gastronómicas…)?"] + "</p>";
              
              layer.bindPopup(popupContent);
          }
      }).addTo(exquisit); // Asegúrate de inicializar la variable `exquisit`
  })
  .catch(error => console.error('Error al cargar el archivo Exquisit.geojson:', error));
  
  // Función de colores para restaurantes
function getColorRestaurants(restaurantCount) {
    if (restaurantCount === null || restaurantCount === undefined) {
        return '#918e8e'; // Gris para ausencia de datos
    }
    return restaurantCount >  500 ? '#67000d' : 
           restaurantCount > 200 ? '#a50f15' :
           restaurantCount > 100 ? '#cb181d' :
           restaurantCount > 50 ? '#ef3b2c' :
           restaurantCount > 25 ? '#fb6a4a' :
           restaurantCount > 5  ? '#fc9272' :
           restaurantCount > 0  ? '#fcbba1' :
                                  '#918e8e'; // Gris si no se cumple ningún rango
}

// Función de colores para plazas
function getColorPlazas(plazasCount) {
    if (plazasCount === null || plazasCount === undefined) {
        return '#918e8e'; // Gris para ausencia de datos
    }
    return plazasCount > 50000 ? '#67000d' : 
           plazasCount > 10000 ? '#a50f15' :
           plazasCount > 5000 ? '#cb181d' :
           plazasCount > 1000 ? '#ef3b2c' :
           plazasCount > 500 ? '#fb6a4a' :
           plazasCount > 100  ? '#fc9272' :
           plazasCount > 0  ? '#fcbba1' :
                              '#918e8e'; // Gris si no se cumple ningún rango
}

// Función de colores para plazas por habitante
function getColorPRestHab(presthabCount) {
    if (presthabCount === null || presthabCount === undefined) {
        return '#918e8e'; // Gris para ausencia de datos
    }
    return presthabCount > 1 ? '#67000d' : 
           presthabCount > 0.8 ? '#a50f15' :
           presthabCount > 0.6 ? '#cb181d' :
           presthabCount > 0.4 ? '#ef3b2c' :
           presthabCount > 0.2 ? '#fb6a4a' :
           presthabCount > 0.1 ? '#fc9272' :
           presthabCount > 0 ? '#fcbba1' :
                               '#918e8e'; // Gris si no se cumple ningún rango
}


// Función de colores para plazas por habitante
function getColorPlaHab(plahabCount) {
    if (plahabCount === null || plahabCount === undefined) {
        return '#918e8e'; // Gris para ausencia de datos
    }
    return plahabCount > 1.2 ? '#67000d' : 
           plahabCount > 1 ? '#a50f15' :
           plahabCount > 0.8 ? '#cb181d' :
           plahabCount > 0.6 ? '#ef3b2c' :
           plahabCount > 0.4 ? '#fb6a4a' :
           plahabCount > 0.2 ? '#fc9272' :
           plahabCount > 0 ? '#fcbba1' :
                               '#918e8e'; // Gris si no se cumple ningún rango
}


// Función de colores para plazas por habitante
function getColorPlaKm2(plakm2Count) {
    if (plakm2Count === null || plakm2Count === undefined) {
        return '#918e8e'; // Gris para ausencia de datos
    }
    return plakm2Count > 500 ? '#67000d' : 
           plakm2Count > 200 ? '#a50f15' :
           plakm2Count > 100 ? '#cb181d' :
           plakm2Count > 50 ? '#ef3b2c' :
           plakm2Count > 20 ? '#fb6a4a' :
           plakm2Count > 10 ? '#fc9272' :
           plakm2Count > 0 ? '#fcbba1' :
                               '#918e8e'; // Gris si no se cumple ningún rango
}

function getColorRePla(replaCount) {
    if (replaCount === null || replaCount === undefined || isNaN(replaCount)) {
        return '#918e8e'; // Gris para ausencia de datos o valores no numéricos
    }
    replaCount = parseFloat(replaCount); // Asegúrate de convertir el valor a número
    return replaCount > 250 ? '#67000d' : 
           replaCount > 200 ? '#a50f15' :
           replaCount > 150 ? '#cb181d' :
           replaCount > 100 ? '#ef3b2c' :
           replaCount > 75 ? '#fb6a4a' :
           replaCount > 50 ? '#fc9272' :
           replaCount > 0 ? '#fcbba1' :
                           '#918e8e'; // Gris si no se cumple ningún rango
}

function getColorReKm2(rekm2Count) {
    if (rekm2Count === null || rekm2Count === undefined || isNaN(rekm2Count)) {
        return '#918e8e'; // Gris para ausencia de datos o valores no numéricos
    }
    rekm2Count = parseFloat(rekm2Count); // Asegúrate de convertir el valor a número
    return rekm2Count > 10 ? '#67000d' : 
           rekm2Count > 5 ? '#a50f15' :
           rekm2Count > 2 ? '#cb181d' :
           rekm2Count > 2 ? '#ef3b2c' :
           rekm2Count > 1 ? '#fb6a4a' :
           rekm2Count > 0.50 ? '#fc9272' :
           rekm2Count > 0 ? '#fcbba1' :
                           '#918e8e'; // Gris si no se cumple ningún rango
}

// Capa de restaurantes
fetch('MapaRestaurantes.geojson') 
  .then(response => response.json())
  .then(data => {
      var layer = L.geoJSON(data, {
          style: function(feature) {
              return {
                  color: '#000',
                  weight: 1,
                  fillColor: getColorRestaurants(feature.properties.Restaurant),
                  fillOpacity: 0.7
              };
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.NAMEUNIT + "</h3>" +
                                "<p><strong>Habitantes:</strong> " + feature.properties.Habitantes + "</p>" +
                                "<p><strong>Superficie (km²):</strong> " + feature.properties.Km2 + "</p>" +
                                "<p><strong>Número de restaurantes:</strong> " + (feature.properties.Restaurant || 'Sin datos') + "</p>";
              layer.bindPopup(popupContent);
          }
      });
      MapaRestaurantes.addLayer(layer);
  })
  .catch(error => {
      console.error('Error al cargar el archivo GeoJSON:', error);
      alert('Hubo un problema al cargar la capa de restaurantes.');
  });

// Capa de plazas
fetch('Plazas.geojson') 
  .then(response => response.json())
  .then(data => {
      var layer = L.geoJSON(data, {
          style: function(feature) {
              return {
                  color: '#000',
                  weight: 1,
                  fillColor: getColorPlazas(feature.properties.Plazas),
                  fillOpacity: 0.7
              };
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.NAMEUNIT + "</h3>" +
                                "<p><strong>Habitantes:</strong> " + feature.properties.Habitantes + "</p>" +
                                "<p><strong>Superficie (km²):</strong> " + feature.properties.Km2 + "</p>" +
                                "<p><strong>Número de plazas:</strong> " + (feature.properties.Plazas || 'Sin datos') + "</p>";
              layer.bindPopup(popupContent);
          }
      });
      plazas.addLayer(layer);
  })
  .catch(error => {
      console.error('Error al cargar el archivo GeoJSON:', error);
      alert('Hubo un problema al cargar la capa de plazas.');
  });
   
 // Capa de plazas
fetch('PRestHab.geojson') 
.then(response => response.json())
.then(data => {
    var layer = L.geoJSON(data, {
        style: function(feature) {
            return {
                color: '#000',
                weight: 1,
                fillColor: getColorPRestHab(feature.properties['Rest/Hab']),
                fillOpacity: 0.7
            };
        },
        onEachFeature: function(feature, layer) {
            var popupContent = "<h3>" + feature.properties.NAMEUNIT + "</h3>" +
                              "<p><strong>Habitantes:</strong> " + feature.properties.Habitantes + "</p>" +
                              "<p><strong>Superficie (km²):</strong> " + feature.properties.Km2 + "</p>" +
                              "<p><strong>Restaurantes por cada 100 habitantes:</strong> " + 
                              (feature.properties['Rest/Hab'] || 'Sin datos') + "</p>";
            layer.bindPopup(popupContent);
        }
    });
    presthab.addLayer(layer);
})
.catch(error => {
    console.error('Error al cargar el archivo GeoJSON:', error);
    alert('Hubo un problema al cargar la capa de restaurantes por habitante.');
});

    // Capa de plazas
fetch('PlaHab.geojson') 
.then(response => response.json())
.then(data => {
    var layer = L.geoJSON(data, {
        style: function(feature) {
            return {
                color: '#000',
                weight: 1,
                fillColor: getColorPlaHab(feature.properties['Pla/Ha']),
                fillOpacity: 0.7
            };
        },
        onEachFeature: function(feature, layer) {
            var popupContent = "<h3>" + feature.properties.NAMEUNIT + "</h3>" +
                              "<p><strong>Habitantes:</strong> " + feature.properties.Habitantes + "</p>" +
                              "<p><strong>Superficie (km²):</strong> " + feature.properties.Km2 + "</p>" +
                              "<p><strong>Plazas de restaurante por habitante:</strong> " + 
                              (feature.properties['Pla/Ha'] || 'Sin datos') + "</p>";
            layer.bindPopup(popupContent);
        }
    });
    plahab.addLayer(layer);
})
.catch(error => {
    console.error('Error al cargar el archivo GeoJSON:', error);
    alert('Hubo un problema al cargar la capa de restaurantes por habitante.');
});


 // Capa de plazas
 fetch('PlaKm2.geojson') 
 .then(response => response.json())
 .then(data => {
     var layer = L.geoJSON(data, {
         style: function(feature) {
             return {
                 color: '#000',
                 weight: 1,
                 fillColor: getColorPlaKm2(feature.properties['Pla/Km2']),
                 fillOpacity: 0.7
             };
         },
         onEachFeature: function(feature, layer) {
             var popupContent = "<h3>" + feature.properties.NAMEUNIT + "</h3>" +
                               "<p><strong>Habitantes:</strong> " + feature.properties.Habitantes + "</p>" +
                               "<p><strong>Superficie (km²):</strong> " + feature.properties.Km2 + "</p>" +
                               "<p><strong>Plazas de restaurante por Km2:</strong> " + 
                               (feature.properties['Pla/Km2'] || 'Sin datos') + "</p>";
             layer.bindPopup(popupContent);
         }
     });
     plakm2.addLayer(layer);
 })
 .catch(error => {
     console.error('Error al cargar el archivo GeoJSON:', error);
     alert('Hubo un problema al cargar la capa de restaurantes por habitante.');
 });
 
 // Capa de plazas
 fetch('PlaRe.geojson') 
 .then(response => response.json())
 .then(data => {
     var layer = L.geoJSON(data, {
         style: function(feature) {
             return {
                 color: '#000',
                 weight: 1,
                 fillColor: getColorRePla(feature.properties['PlaRe']),
                 fillOpacity: 0.7
             };
         },
         onEachFeature: function(feature, layer) {
             var popupContent = "<h3>" + feature.properties.NAMEUNIT + "</h3>" +
                               "<p><strong>Habitantes:</strong> " + feature.properties.Habitantes + "</p>" +
                               "<p><strong>Superficie (km²):</strong> " + feature.properties.Km2 + "</p>" +
                               "<p><strong>Densidad de plazas por restaurante:</strong> " + 
                               (feature.properties['PlaRe'] || 'Sin datos') + "</p>";
             layer.bindPopup(popupContent);
         }
     });
     repla.addLayer(layer);
 })
 .catch(error => {
     console.error('Error al cargar el archivo GeoJSON:', error);
     alert('Hubo un problema al cargar la capa de restaurantes por habitante.');
 });



  // Capa de plazas
  fetch('ReKm2.geojson') 
  .then(response => response.json())
  .then(data => {
      var layer = L.geoJSON(data, {
          style: function(feature) {
              return {
                  color: '#000',
                  weight: 1,
                  fillColor: getColorReKm2(feature.properties['ReKm2']),
                  fillOpacity: 0.7
              };
          },
          onEachFeature: function(feature, layer) {
              var popupContent = "<h3>" + feature.properties.NAMEUNIT + "</h3>" +
                                "<p><strong>Habitantes:</strong> " + feature.properties.Habitantes + "</p>" +
                                "<p><strong>Superficie (km²):</strong> " + feature.properties.Km2 + "</p>" +
                                "<p><strong>Densidad de restaurantes por Km2:</strong> " + 
                                (feature.properties['ReKm2'] || 'Sin datos') + "</p>";
              layer.bindPopup(popupContent);
          }
      });
      rekm2.addLayer(layer);
  })
  .catch(error => {
      console.error('Error al cargar el archivo GeoJSON:', error);
      alert('Hubo un problema al cargar la capa de restaurantes por habitante.');
  });
 
// Alternar la visibilidad de una capa
function toggleLayer(layerId) {
    const layer = layers[layerId];
    if (map.hasLayer(layer)) {
        map.removeLayer(layer);
    } else {
        map.addLayer(layer);
    }
}