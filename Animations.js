$(document).ready(function () {
    move();
});

function move() {
    console.log("moved");
    $("#smallCloud").animate({
            left: '10px',
            opacity: 0
        },
        4000,
        function () {
            $(this).removeAttr('style');
            $(this).css("opacity", '0');
            $(this).animate({
                    opacity: 1
                },
                200);
            move();
        }
    );
}