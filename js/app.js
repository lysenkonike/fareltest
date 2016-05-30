google.maps.event.addDomListener(window, 'load', init_map);

function init_map() {
    var myOptions = {
            scrollwheel: false,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false,
            zoom: 17,
            center: new google.maps.LatLng(50.474170, 30.500109),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        styles = [
            {
                "featureType": "poi",
                "stylers": [
                    { "color": "#b2c5d3" }
                ]
            },
            {
                "featureType": "landscape",
                "stylers": [
                    { "color": "#bfd3e1" }
                ]
            }
        ],
        image = 'img/icon.png',
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions),
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(50.474195, 30.499341),
            icon: image
        }),
        infowindow = new google.maps.InfoWindow({
                content: '<strong>Farel</strong><br>Київ вул. Константинівська 73<br>'
        });

    map.setOptions({styles: styles});
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}

$(document).ready(function() {
    $('.radio-lang').change(function() {
        if ($(this).is(':checked')) {
            $('.lang li').removeClass('activ-lang');
            $(this).parent().addClass('activ-lang');
        };
    });

    $('.go-to').click( function() {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top -60 }, 500);
        };
        return false;
    });
})
