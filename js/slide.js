/*=============================================
OBJETO CON LAS PROPIEDADES DEL SLIDE
=============================================*/

var p = {

	paginacion: document.querySelectorAll("#paginacion li"),
	item: 0,
	cajaSlide: document.querySelector("#slide ul"),
	/*para cambiar de imagen*/
	animacionSilde: "fade",
	imgSlide: document.querySelectorAll("#slide ul li"),
	avanzar: document.querySelector("#slide #avanzar"),
	retroceder: document.querySelector("#slide #retroceder"),
	velocidadSlide: 2000,
	formatearLoop: false /*para q inicie en estado falso*/

}


/*=====================================100======
OBJETO CON LOS MÉTODOS DEL SLIDE
=============================================*/

var m = {

	inicioSlide: function() {

		for (var i = 0; i < p.paginacion.length; i++) {

			p.paginacion[i].addEventListener("click", m.paginacionSlide);
			p.imgSlide[i].style.width = (100 / p.paginacion.length) + "%";/*dividir la cantidad de items que haya*/

		}

		p.avanzar.addEventListener("click", m.avanzar) /*va ejecutar el metodo de avanzar*/
		p.retroceder.addEventListener("click", m.retroceder) /*va ejecutar el metodo de retrooeder*/

		m.intervalo();

		p.cajaSlide.style.width = (p.paginacion.length * 100) + "%";/*si hay 6 item multiplcarlos por*/

	},

	paginacionSlide: function(item) {

		p.item = item.target.parentNode.getAttribute("item") - 1;

		m.movimientoSlide(p.item);

	},

	avanzar: function() {

		if (p.item == p.imgSlide.length - 1) { /*para solo 0 1 2 3*/

			p.item = 0;

		} else {

			p.item++;

		}

		m.movimientoSlide(p.item);
	},

	retroceder: function() {

		if (p.item == 0) {

			p.item = p.imgSlide.length - 1;

		} else {

			p.item--;

		}

		m.movimientoSlide(p.item);

	},

	movimientoSlide: function(item) {

		p.formatearLoop = true;

		p.cajaSlide.style.left = item * -100 + "%"; /*cambia de imagen*/

		for (var i = 0; i < p.paginacion.length; i++) {

			p.paginacion[i].style.opacity = .5;

		}

		p.paginacion[item].style.opacity = 1;

		if (p.animacionSilde == "slide") {

			p.cajaSlide.style.transition = ".7s left ease-in-out"; /*tiempo de deslisamiento, derecha, aceleracion*/

		}

		if (p.animacionSilde == "fade") {

			p.imgSlide[item].style.opacity = 0;

			p.imgSlide[item].style.transition = ".15s opacity ease-in-out";

			setTimeout(function() { /*acciones retardadas*/

				p.imgSlide[item].style.opacity = 1; /*identificar el click*/

			}, 500) /*demorar en aparecer la imagen*/

		}

	},

	intervalo: function() { /*autmatizacion de 2 segundos*/

		setInterval(function() {

			if (p.formatearLoop) { /*para que pueda moverse tranquilamente en el slide*/

				p.formatearLoop = false;

			} else {

				m.avanzar();

			}

		}, p.velocidadSlide)

	}

}

m.inicioSlide();