


function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 37.579697, lng: 126.977075 }
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 37.579697, lng: 126.977075 }
  });
  marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

//map

/*function initialize() {
   var myLatlng = new google.maps.LatLng(37.579697, 126.977075); //<- 위도와 경도
   var myOptions = {
    zoom: 15,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.TERRAIN
   }
   var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
   var marker = new google.maps.Marker( {
    position: myLatlng, 
    map: map, 
    title:"경복궁" //<- 본인의 목적에 맞게수정
   });   
   var infowindow = new google.maps.InfoWindow( {
    content: "경복궁" //<- 본인의 목적에 맞게수정
   });
   infowindow.open(map,marker);
  }
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.579697, lng: 126.977075 },
    zoom: 15
  });
}

  */