$(document).ready(function() {

    // Animate on click of downarrow in landing page section of page
    $("a.downarrow").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
    });
});