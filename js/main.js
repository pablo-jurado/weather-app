var $ = window.jQuery
$('.loader').hide()

function noResponse (err) {
  $('#cityData').html('<p>Sorry... try again later.</p>')
}

function getWeater () {
  var city = $('input').val()
  if (city !== '') {
    //$('.loader').show()
    $('#cityData').hide()
    callApi(city)
    $('input').val('')
  }
}

function callApi (place) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q='
  var apiKey = '&APPID=d84fac00591b5528031d9463da7c9cbb'
  var api = url + place + apiKey
  $.get(api).done(response).fail(noResponse)
}

function response (data) {
  $('.loader').hide()
  console.log(data.weather[0].icon)
  var place = data.name + ' ' + data.sys.country
  var temp = data.main.temp
  var weather = data.weather[0].description
  var container = '<h3>' + place + '</h3>'
  container +=  '<p>' + weather + '</p>'
  container +=  '<p>' + temp + '</p>'
  $('#cityData').slideDown('fast')
  $('#cityData').html(container)
}

$('button').click(getWeater)
$('#cityData').hide()
