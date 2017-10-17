/*=============================================
=          el objeto con las propiedades del mouse           =
=============================================*/
var pm = {
		zona: document.querySelector("#efectoMouse"),
		figuras: document.querySelectorAll("#efectoMouse figure"),
		mouseX: 0,
		mouseY: 0,
		horizontal: true,
		vertical: false,
	}
	/*=============================================
	=          el objeto con los metodos del mouse           =
	=============================================*/
var mm = {
	inicioMouse: function() {
		pm.zona.addEventListener("mousemove", mm.movimientoMouse) /*movimiento de mouse*/
		for (var i = 0; i < pm.figuras.length; i++) {

			pm.figuras[i].innerHTML = '<img src="img/mouse/plano0' + i + '.png">'; //la imagen mas grande que va al fondo
			pm.figuras[i].style.zIndex = -i;


		}
		//calcular la altura de la foto
		setTimeout(function() { //RETARDO DE TIEMPO(2 parametros)(altura de la de la imagen)
			pm.zona.style.height = pm.figuras[0].childNodes[0].height + "px"; //capturas img(px, porque es de ccs)
		}, 100)

	},

	movimientoMouse: function(mouse) {
		//crear dos propiedades q nos capturen las cordenadas

		pm.mouseX = -mouse.offsetX; //me sirve porque esta dentro de la caja
		pm.mouseY = -mouse.offsetY; //propiedades para almacenar las coordenadas del mouse X y Y

		for (var i = 0; i < pm.figuras.length; i++) {
			//controlar movimientos vertical y horizontal
			if (pm.horizontal) {
				pm.figuras[i].style.left = pm.mouseX / (i * 100 + 50) + "%";
			}
			if (pm.vertical) {
				pm.figuras[i].style.top = pm.mouseY / (i * 100 + 50) + "%";
			}
			//controlar movimiento del mouse
			//pm.figuras[i].style.left= pm.mouseX /(i*100+50) + "%";//de drecha a izquierda es un valor negativo)
			//pm.figuras[i].style.top= pm.mouseY /(i*100+50) + "%"

		}
	}

}

mm.inicioMouse();
///para colocar otra imagen tiene q ser correlativo