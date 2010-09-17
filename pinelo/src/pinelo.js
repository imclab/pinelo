var c = document.getElementById("c"),
$c = $(c),
wHeight = $(window).height(),
wWidth = $(window).width(),
palette,
menu,
BACKGROUND_COLOR_ARRAY = [252,250,247,1],
BACKGROUND_COLOR = 'rgba(252,250,247,1)',
INITIAL_STYLE = 'rgba(0,0,0,0.4)';

c.width  = 900;
c.height = 600;

var ctx  = c.getContext("2d");
var PEN_DOWN = false;

var make = function(o, addedProperties){
	function F(){}
	F.prototype = o;
	var newObj = new F();
	
	if (addedProperties){
	
		for (var prop in addedProperties) {
			if (addedProperties.hasOwnProperty(prop)){
				newObj[prop] = addedProperties[prop];
			}
		}
	
	}
	
	return newObj;
};

(function (){

	ctx.fillStyle = BACKGROUND_COLOR;
	ctx.fillRect(0,0, wWidth, wHeight);
	ctx.fillStyle = INITIAL_STYLE;
	
	palette = new Palette();
	menu = new Menu();
	
	$c.mousedown(function(e){
		palette.onMouseDown();
		PEN_DOWN = true;
		e.stopPropagation();
	});
	
	$c.mouseup(function(e){
		palette.onMouseUp();
		PEN_DOWN = false;
		e.stopPropagation();
	});
	
	$c.mousemove(function(e){
        if (PEN_DOWN){
            palette.onMouseMove();
            palette.stroke(e.pageX, e.pageY); //fix this
            e.stopPropagation();
        }
	});
	
	palette.init();
	menu.init();

})();
