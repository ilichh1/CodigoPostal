/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$("#enviarZip").click(function(){
    
    
    
});

var callbackFunction = function(data) {
    var wind = data.query.results.channel.wind;
    alert(wind.chill);
};
