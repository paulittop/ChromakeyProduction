var map;
function initialize() {
    map = new google.maps.Map(
        document.getElementById("map_canvas"), {
            center: new google.maps.LatLng(50.45550, 30.42917),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    var marker = new MarkerWithLabel({
        position: new google.maps.LatLng(50.45415, 30.42890),
        labelContent: '<div style="text-align: center;font-size:2em;">Съемочный павильон<br/><b>Chromakey Production </b>' + '</div>',
        labelAnchor: new google.maps.Point(115, 5),
        labelClass: "labels",
        labelStyle: {
            opacity: 0.75
        },
        zIndex: 999999,
        map: map
    })
}
google.maps.event.addDomListener(window, "load", initialize);