$(document).ready(function() {
    $("a.downarrow").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
    });
});