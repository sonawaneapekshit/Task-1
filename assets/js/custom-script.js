$(document).ready(function() {

    var mymap = L.map('map-container-google').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: '',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYXBla3NoaXRkdXJlIiwiYSI6ImNqczVvdThuNDBnaGU0NHBrc2NzZWtyeWgifQ.a8nDPGzTgd39TzKBsdbBEQ'
    }).addTo(mymap);
    //marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    var popup = L.popup()
        .setLatLng([51.5, -0.09])
        .setContent("1234 First Street, Second County, Zip 12345, COUNTRY")
        .openOn(mymap);

    // Animate on click of downarrow in landing page section of page
    $("a.downarrow").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
    });

    $(function() {
        var header = $(".navbar");

        // $(window).scroll(function() {
        //     var scroll = $(window).scrollTop();
        //     if (scroll >= 50) {
        //         header.addClass("bg-dark");
        //     } else {
        //         header.removeClass("bg-dark");
        //     }
        // });

    });

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        // Show/hide menu on scroll
        // if (scrollDistance >= 850) {
        //     $('nav').fadeIn("fast");
        // } else {
        //     $('nav').fadeOut("fast");
        // }

        // Assign active class to nav links while scolling
        $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('nav').removeClass('active');
                $('nav').eq(i).addClass('active');
            }
        });
    }).scroll();
});