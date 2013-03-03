$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(sendLocation);

  function sendLocation(position) {
    alert(position.coords.latitude+","+position.coords.longitude);
  }
});