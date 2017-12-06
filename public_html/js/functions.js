/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const GLOBAL = {
    zipAPIURL: "https://api-codigos-postales.herokuapp.com/v2/codigo_postal/"
};

$("#enviarZip").click(function () {
    let cpBuscar = $("#zipCode").val();

    $.get(
            GLOBAL.zipAPIURL + cpBuscar,
            {},
            function (response) {
                //window.console.log(response);
                let query = response.municipio + ", " + response.estado;
                window.console.log(query);
            });
});

function init() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FybG96aHMiLCJhIjoiY2phdTZyYTF3MDBqcTMzbmduam81dGcyZiJ9.zfzpreVgLruGLidnllLhkg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9'
    });
}

$(init());