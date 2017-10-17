/*===============================================================
=            objeto de las propiedades de la galeria            =
===============================================================*/
//no se puede douplicar variables//
var pg={
imgGaleria: document.querySelectorAll("#galeria ul li img"),//capturar imagen de galeria //el all almacena varias imagenes
rutaImagen:null,//almacenar la ruta completa img//
cuerpoDom: document.querySelector("body"),//para poder ocupar la caja de luz es el body//es una sola caja
lightbox: null,//capturar id
modal:null,
animacionGaleria: "fadeLeft",
animacionGaleria: "fadeTop",
animacionGaleria:"fade",
}

/*=====  objetos con los metodos de la galeria  ======*/
var mg={
	inicioGaleria: function(){//metodo para iniciar la galeria
		for( var i = 0; i < pg.imgGaleria.length; i ++){//el indice no supera la longitud de img galeria
			pg.imgGaleria[i].addEventListener("click", mg.capturaImagen)//metodo para capturar la imagen de l galeria
		}

	},
	capturaImagen: function(img){
	pg.rutaImagen= img.target;//lo paso a metodo mg de lightbox//
	mg.lightbox(pg.rutaImagen)//caja luz// enviar la ruta de imagen a la caja de luz
},
lightbox: function(img){
	pg.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");//crear nuevos elementos html en el dom(appen child)
		pg.lightbox = document.querySelector("#lightbox");//capturar el docuemnto, la caja q tenga el id lightbox

		pg.lightbox.style.width = "100%";
		pg.lightbox.style.height = "100%";
		pg.lightbox.style.position = "fixed";
		pg.lightbox.style.zIndex = "10";
		pg.lightbox.style.background = "rgba(0,0,0,.8)";//transparencia
		pg.lightbox.style.top = 0;
		pg.lightbox.style.lefts = 0;
		//aparecer la imagen//
		pg.lightbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");//	va aparecer la foto
		
		pg.modal = document.querySelector("#modal");//agregar un inner html dentro de modal
		
		pg.modal.innerHTML=img.outerHTML + "<div>x</div>"; //para agregar la etiqueta se utiliza outer html(ya no saldra el objeto)(agregar x)
		
		//aplicar estilo solo a la imagen(100%para que se adapte a la caja dond esta)
		pg.modal.childNodes[0].style.width="100%";
		pg.modal.childNodes[0].style.border="15px solid white";

		//lectura del ancho de a pagina q estoy utilizando, la condicion es window
		if(window.matchMedia("(max.width:100px)").matches){
		p.g.modal.style.width="90%";
	}
		else{
		pg.modal.style.width="50%";

		}
		if(pg.animacionGaleria=="fadeLeft"){
			pg.modal.style.top="50%";
			pg.modal.style.left=0;
			pg.modal.style.opacity=0;

			setTimeout(function() {//RETARDO DE tiempo

			pg.modal.style.transition=".5s left ease";
			pg.modal.style.left="50%";
			pg.modal.style.opacity=1;
			pg.modal.style.marginLeft =-pg. modal.childNodes[0].width/2 +"px";//capturar etiqueta img mediante childNodes(ancho de la etiqueta)
			//se centra a nivel horizontal
			pg.modal.style.marginTop =-pg. modal.childNodes[0].height/2 +"px";//centrar a nivel vertical con marginTop
		

		},50)
		}
		if(pg.animacionGaleria=="fadeTop"){
			pg.modal.style.top="-100%";//horizontal
			pg.modal.style.left="50%";//vertical
			pg.modal.style.opacity=0;

			setTimeout(function() {

			pg.modal.style.transition=".5s top ease";
			pg.modal.style.top="50%";
			pg.modal.style.opacity=1;
			pg.modal.style.marginLeft =-pg. modal.childNodes[0].width/2 +"px";//capturar etiqueta img mediante childNodes(ancho de la etiqueta)
			//se centra a nivel horizontal
			pg.modal.style.marginTop =-pg. modal.childNodes[0].height/2 +"px";//centrar a nivel vertical con marginTop
		

		},50)
		}
		if(pg.animacionGaleria=="fade"){
			pg.modal.style.top="50%";
			pg.modal.style.left="50%";
			pg.modal.style.opacity=0;

			setTimeout(function() {

			pg.modal.style.transition=".5s opacity ease";
			pg.modal.style.left="50%";
			pg.modal.style.opacity=1;
			pg.modal.style.marginLeft =-pg. modal.childNodes[0].width/2 +"px";//capturar etiqueta img mediante childNodes(ancho de la etiqueta)
			//se centra a nivel horizontal
			pg.modal.style.marginTop =-pg. modal.childNodes[0].height/2 +"px";//centrar a nivel vertical con marginTop
		

		},50)
		}
		//flujo de nodos la convierto en bloques

		pg.modal.style.display="block";
		pg.modal.style.position="relative";//ubicacion
	
		
		
		
		//para la x
		
		pg.modal.childNodes[1].style.position="absolute"; 
		pg.modal.childNodes[1].style.right="5px";
		pg.modal.childNodes[1].style.top="5px";
		pg.modal.childNodes[1].style.color="black";
		pg.modal.childNodes[1].style.cursor="pointer";
		pg.modal.childNodes[1].style.fontSize="25px";
		pg.modal.childNodes[1].style.width="40px";
		pg.modal.childNodes[1].style.height="40px";
		pg.modal.childNodes[1].style.textAlign="center";
		pg.modal.childNodes[1].style.background="white";
		pg.modal.childNodes[1].style.borderRadius="0px 0px 0px 5px ";
		//para desaparecer la caja de luz, cerrar con la X
		pg.modal.childNodes[1].addEventListener("click",mg.salirGaleria)
},
salirGaleria:function(){
	pg.lightbox.parentNode.removeChild(pg.lightbox);
}

}
mg.inicioGaleria();//metodo para iniciar la galeria