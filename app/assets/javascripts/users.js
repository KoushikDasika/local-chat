$(document).ready(function(){
  if($(".users.new").length > 0){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(successFunction);
	}

	function successFunction(position){
		var lat = position.coords.latitude;
		var longitude = position.coords.longitude;
        $("#user_lat").val(lat);
		$("#user_long").val(longitude);

		//alert(lat+ ", " + longitude)
	}
  }
});
