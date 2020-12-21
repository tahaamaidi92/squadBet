/*$(document).ready(function(){
    var $bg = $('.image_participant'),
        origin = {x: 0, y: 0},
        start = {x: 0, y: 0},
        movecontinue = false;

    function move (e){
        var moveby = {
            x: origin.x - e.clientX,
            y: origin.y - e.clientY
        };

        if (movecontinue === true) {
            start.x = start.x - moveby.x;
            start.y = start.y - moveby.y;

            $(this).css('background-position', start.x + 'px ' + start.y + 'px');
        }

        origin.x = e.clientX;
        origin.y = e.clientY;

        e.stopPropagation();
        return false;
    }
    function handle (e){
        movecontinue = false;
        $bg.unbind('mousemove', move);

        if (e.type == 'mousedown') {
            origin.x = e.clientX;
            origin.y = e.clientY;
            movecontinue = true;
            $bg.bind('mousemove', move);
        } else {
            $(document.body).focus();
        }

        e.stopPropagation();
        return false;
    }

    function reset (){
        start = {x: 0, y: 0};
        $(this).css('backgroundPosition', '0 0');
    }

    $bg.bind('mousedown mouseup mouseleave', handle);
    $bg.bind('dblclick', reset);

});  */
 /*   el.addEventListener("mouseup", (e) => {
      el.style.backgroundPositionY = (e.offsetY * 2 ) + "%";
    });*/





//mouve background 1
const el = document.querySelector("#id_image_participant");    
var pressing = false;
el.addEventListener("mousedown", e => {
  pressing = true;
});

el.addEventListener("mousemove", function move(e) {
  if (pressing) {
    // do something only if mouse button is being pressed
    el.style.backgroundPositionY = (e.offsetY / 2) + "%";
  }
});
el.addEventListener("mouseup", function stop(e) {
  pressing = false;
});
//mouve background 1

//mouve background 2
const el1 = document.querySelector("#slideshow");
var pressing1 = false;
el1.addEventListener("mousedown", e => {
  pressing1 = true;
});

el1.addEventListener("mousemove", function move(e) {
  if (pressing1) {
    // do something only if mouse button is being pressed
    el1.style.backgroundPositionY = (e.offsetY / 2 ) + "%";
  }
});
el1.addEventListener("mouseup", function stop(e) {
  pressing1 = false;
});
//mouve background 2

