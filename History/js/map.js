const onLoad = document.querySelector(".main_box");


// onload 
function handleOnLoad(){
  onLoad.style.opacity = "1";
}

//map

function initialize() {
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
  window.onload=function() {
   initialize();
   handleOnLoad()
  }