//dnes
$.getJSON( "http://api.openweathermap.org/data/2.5/weather",
           {q:"Presov",units:'metric',APPID:"8641355d0bdfa52a49f4e9a42560adf0"},
           vypis);
var tmplPoc = "Teplota: {{main.temp}} °C<br> Tlak: {{main.pressure}} <br> Vlhkost: {{main.humidity}}%<br> Oblačnosť: {{clouds.all}}%";
function vypis(udaje){
  $("#weather").html(Mustache.render(tmplPoc,udaje));
}

//zajtra
$.getJSON( "http://api.openweathermap.org/data/2.5/forecast",
        {q:"Presov",units:'metric',APPID:"8641355d0bdfa52a49f4e9a42560adf0"},
        vypisZajtra);
var zajtra = "Teplota: {{list.0.main.temp}}°C<br> Tlak: {{list.0.main.pressure}} <br> Vlhkost: {{list.0.main.humidity}}%<br> Oblačnosť: {{list.0.clouds.all}} ";
function vypisZajtra(udaje){
	$("#weather_1").html(Mustache.render(zajtra,udaje));
}

//pozajtra
$.getJSON( "http://api.openweathermap.org/data/2.5/forecast",
        {q:"Presov",units:'metric',APPID:"8641355d0bdfa52a49f4e9a42560adf0"},
        vypisPozajtra);
var pozajtra = "Teplota: {{list.1.main.temp}}°C<br> Tlak: {{list.1.main.pressure}} <br> Vlhkost: {{list.1.main.humidity}}%<br> Oblačnosť: {{list.1.clouds.all}} ";
function vypisPozajtra(udaje){
	$("#weather_2").html(Mustache.render(pozajtra,udaje));
}

//popozajtra
$.getJSON( "http://api.openweathermap.org/data/2.5/forecast",
        {q:"Presov",units:'metric',APPID:"8641355d0bdfa52a49f4e9a42560adf0"},
        vypisPopozajtra);
var popozajtra = "Teplota: {{list.2.main.temp}}°C<br> Tlak: {{list.2.main.pressure}} <br> Vlhkost: {{list.2.main.humidity}}%<br> Oblačnosť: {{list.2.clouds.all}} ";
function vypisPopozajtra(udaje){
	$("#weather_3").html(Mustache.render(popozajtra,udaje));
}
