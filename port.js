
const librasil    = document.getElementById("librazil");
const lieua       = document.getElementById("lieua");

const portifolio = document.getElementById("port");
const habilidade = document.getElementById("habili");
const lingua     = document.getElementById("lang");
const contatos   = document.getElementById("contact");
const projeto    = document.getElementById("projeto");


const nome    = document.getElementById("name");
const presentation    = document.getElementById("dev");


const titlehabilidade = document.getElementById("skillhabili");

const name_projeto=document.getElementById("skillproject");
const textjl= document.getElementById("textjl");
const textdevel=document.getElementById("textdevel");
const textdevel2=document.getElementById("textdevel2");
const textsinal=document.getElementById("textsinal");
const textag=document.getElementById("textag");
const textvc=document.getElementById("textvc");
const textball=document.getElementById("textball");



const contato=document.getElementById("skill");
const idcopy=document.getElementById("copy");




function load(){

librazil.style.backgroundColor="black";
librasil.style.borderRadius="40px";
librasil.style.borderStyle="solid";
librasil.style.outline="none";


}

librazil.addEventListener("click", () => {

  librazil.style.backgroundColor="black";
  librasil.style.borderRadius="40px"
  librasil.style.borderStyle="solid";


  lieua.style.background="none";
  lieua.style.border="none";


//traduçao brasil 

portifolio.innerHTML="Portifólio";
habilidade.innerHTML="Habilidades";
projeto.innerHTML="Projetos";
lingua.innerHTML="Linguagem";
contatos.innerHTML="Contato";


presentation.innerHTML="Desenvolvedor Full-Stack -  Desenvolvimento de Websites, Aplicativos e Análise de dados";

titlehabilidade.innerHTML="Habilidades";

name_projeto.innerHTML="Projetos";
textjl.innerHTML="Site feito com HTML, CSS e JavaScript. Elementos gráficos criados por mim. Endereço: <a style='text-decoration: none;' href='https://luizreactgithub.github.io/Jl_Tecnology' target='_blank'> https://luizreactgithub.github.io/Jl_Tecnology    </a>"
textdevel.innerHTML="Site responsivo feito com HTML, CSS e JavaScript. Elementos gráficos editados e criados por mim. Endereço : <a style='text-decoration: none;' href='https://luizreactgithub.github.io/JL_Uxguitar/' target='_blank'> https://luizreactgithub.github.io/JL_Uxguitar/    </a>";
textdevel2.innerHTML="Site feito com HTML, CSS, JavaScript e PHP. Elementos gráficos feitos por</br>mim.Endereço : <a style='text-decoration: none;' href='https://luizreactgithub.github.io/Jl-Developers/' target='_blank'> https://luizreactgithub.github.io/Jl-Developers/   </a> ";
textsinal.innerHTML=" Um site Institucional feito com wordpress, trabalhei com alguns plugins e fiz todo o design. Endereço: <a style='text-decoration: none;' href='https://sinalfort.com.br/' target='_blank'> https://sinalfort.com.br/   </a>";
textag.innerHTML="Site com sistema de login e compressão de imagens, feito em HTML,</br> CSS, JavaScript, PHP e MYSQL. Elementos gráficos criados por mim.</br>Endereço : <a  style='text-decoration: none;' href='https://agwallpapers.coolpage.biz/' target='_blank'> https://agwallpapers.coolpage.biz/ </a> "; 
textvc.innerHTML="Um completo E-commerce feito com wordpress com plugins relacionados a </br>design e pagamentos. Endereço : <a  style='text-decoration: none;' href='http://v-clothes.lovestoblog.com/' target='_blank'> http://v-clothes.lovestoblog.com/ </a>";  
textball.innerHTML="Um jogo mobile criado por mim e parceiros, usando Java e o framework Libgdx. Meu trabalho neste projeto: Trilha Sonora, Animações, Efeitos Sonoros.</br>Download : <a  style='text-decoration: none;' href='https://jeanjsc.itch.io/balltown-free' target='_blank'>https://jeanjsc.itch.io/balltown-free </a>";


contato.innerHTML="Contato"
idcopy.innerHTML="© CopyRights - Desenvolvido por Luiz Augusto Cardoso";

});



lieua.addEventListener("click", () => {

  lieua.style.backgroundColor="black";
  lieua.style.borderRadius="40px"
  lieua.style.borderStyle="solid";


  librasil.style.background="none";
  librasil.style.border="none";


  //traduçao eua 

portifolio.innerHTML="Portifolio";
habilidade.innerHTML="Skills";
projeto.innerHTML="Projects";
lingua.innerHTML="Language";
contatos.innerHTML="Contact";


presentation.innerHTML="Full-Stack Developer - Website and Mobile app Development and Data Analysis";

titlehabilidade.innerHTML="&nbsp &nbsp  Skills";

name_projeto.innerHTML="Projects";
textjl.innerHTML="Website made with HTML, CSS and </br> JavaScript. Graphic elements </br> created by me. </br> Link : <a style='text-decoration: none;' href='https://luizreactgithub.github.io/Jl_Tecnology' target='_blank'> https://luizreactgithub.github.io/Jl_Tecnology    </a>";
textdevel.innerHTML="Responsive website made with HTML, CSS and JavaScript. Graphic elements</br>edited and created by me. Link : <a style='text-decoration: none;' href='https://luizreactgithub.github.io/JL_Uxguitar/' target='_blank'> https://luizreactgithub.github.io/JL_Uxguitar/    </a> "
textdevel2.innerHTML="Website made with HTML, CSS,</br> JavaScript and PHP. Graphic elements made by me. Link :<a style='text-decoration: none;' href='https://luizreactgithub.github.io/Jl-Developers/' target='_blank'> https://luizreactgithub.github.io/Jl-Developers/   </a> ";
textsinal.innerHTML="An institutional website made with </br> wordpress, I worked with some plugins and I did all the design. Link:</br> <a style='text-decoration: none;' href='https://sinalfort.com.br/' target='_blank'> https://sinalfort.com.br/   </a>";
textag.innerHTML="Website with login system and image compression, made in HTML, CSS,</br>JavaScript, PHP and MYSQL.</br> Graphic elements created by me.Link: <a  style='text-decoration: none;' href='https://agwallpapers.coolpage.biz/' target='_blank'> https://agwallpapers.coolpage.biz/ </a>"; 
textvc.innerHTML="A complete E-commerce made with WordPress with plugins related to design</br>and payments. Link: <a  style='text-decoration: none;' href='http://v-clothes.lovestoblog.com/' target='_blank'> http://v-clothes.lovestoblog.com/ </a>";
textball.innerHTML="A mobile game created by me and partners, using Java and the Libgdx framework. My work on this project: Soundtrack, Animations, Sound Effects.</br>Download : <a  style='text-decoration: none;' href='https://jeanjsc.itch.io/balltown-free' target='_blank'>https://jeanjsc.itch.io/balltown-free </a>";

contato.innerHTML="Contact";
idcopy.innerHTML="© CopyRights - Developed by Luiz Augusto Cardoso";

});


//********************************************************************/


// mudança de img 

var count=1;

document.getElementById("jlesquerda").addEventListener("click", () => {

  count--;
  if(count < 1 ){
   count=6;
  }

  document.getElementById("jlchange").src="img/jl ("+count+").png" ;

});



 document.getElementById("jldireita").addEventListener("click", () => {

  count++;
  if(count > 6 ){
   count=1;
  }

  document.getElementById("jlchange").src="img/jl ("+count+").png" ;


});

/********************************************************************************************************* */

var count2=1;

document.getElementById("uxesquerda").addEventListener("click", () => {

  count2--;
  if(count2 < 1 ){
   count2=6;
  }

  document.getElementById("uxchange").src="img/ux ("+count2+").png" ;

});



 document.getElementById("uxdireita").addEventListener("click", () => {

  count2++;
  if(count2 > 6 ){
   count2=1;
  }

  document.getElementById("uxchange").src="img/ux ("+count2+").png" ;


});


/********************************************************************************************************* */


var count3=1;

document.getElementById("devesquerda").addEventListener("click", () => {

  count3--;
  if(count3 < 1 ){
   count3=5;
  }

  document.getElementById("jldevchange").src="img/jldev ("+count3+").png" ;

});



 document.getElementById("devdireita").addEventListener("click", () => {

  count3++;
  if(count3 > 5 ){
   count3=1;
  }

  document.getElementById("jldevchange").src="img/jldev ("+count3+").png" ;


});



/********************************************************************************************************* */


var count4=1;

document.getElementById("agesquerda").addEventListener("click", () => {

  count4--;
  if(count4 < 1 ){
   count4=7;
  }

  document.getElementById("agchange").src="img/ag ("+count4+").png" ;

});



 document.getElementById("agdireita").addEventListener("click", () => {

  count4++;
  if(count4 > 7 ){
   count4=1;
  }

  document.getElementById("agchange").src="img/ag ("+count4+").png" ;


});

/********************************************************************************************************* */


var count5=1;

document.getElementById("vcesquerda").addEventListener("click", () => {

  count5--;
  if(count5 < 1 ){
   count5=7;
  }

  document.getElementById("vcchange").src="img/vc ("+count5+").png" ;

});



 document.getElementById("vcdireita").addEventListener("click", () => {

  count5++;
  if(count5 > 7 ){
   count5=1;
  }

  document.getElementById("vcchange").src="img/vc ("+count5+").png" ;


});


/********************************************************************************************************* */


var count6=1;

document.getElementById("ballesquerda").addEventListener("click", () => {

  count6--;
  if(count6 < 1 ){
   count6=9;
  }

  document.getElementById("ballchange").src="img/ball ("+count6+").png" ;

});



 document.getElementById("balldireita").addEventListener("click", () => {

  count6++;
  if(count6 > 9 ){
   count6=1;
  }

  document.getElementById("ballchange").src="img/ball ("+count6+").png" ;


});


/********************************************************************************************************* */


var count7=1;

document.getElementById("sftesquerda").addEventListener("click", () => {

  count7--;
  if(count7 < 1 ){
   count7=4;
  }

  document.getElementById("sftchange").src="img/sft ("+count7+").png" ;

});



 document.getElementById("sftdireita").addEventListener("click", () => {

  count7++;
  if(count7 > 4 ){
   count7=1;
  }

  document.getElementById("sftchange").src="img/sft ("+count7+").png" ;


});

//*************************************************************************************************************************************************



function home(){

var prog=$(this).attr("homes");
var posicao=$(prog).offset().top;


$("html, body").animate({

  scrollTop:posicao,

});

}




function skill(){



var prog=$(this).attr("hability");
var posicao=$(prog).offset().top;


$("html, body").animate({

  scrollTop:posicao-25,

});

}



function projects(){



var prog=$(this).attr("project");
var posicao=$(prog).offset().top;


$("html, body").animate({

  scrollTop:posicao-35,

});

}



function contact(){


var prog=$(this).attr("contacts");
var posicao=$(prog).offset().top;


$("html, body").animate({

  scrollTop:posicao-35,

});

}







/*****anim neurons footer ***************************************************************************************************************************************** */


// faço esse codigo pois por algum motivo nao consigo setar dois canvas no onload.
// ai eu coloquei uma condiçao que sempre da verdadeiro ´ra começar sempre setando a anim aqui
// é a animaçao do footer , neuronios pretos. 




var prog=$(this).attr("contacts");
var posicao=$(prog).offset().top;


var scrollY = window.scrollY;

/* aqui é uma verificaçao que sempre vai ser verdadeiro , pois coloquei o +500 pra isssso mesmo, pra que toda vez que carregue a página dê verdadeiro*/
if(posicao+500 >= scrollY){

  //funçao da animacao dos neronios
loading();
//deu um errro na posicao do footer com os contatos, isso é pra corrigir
var footer= document.getElementById("row4");
footer.style.marginTop="-700px";

}

function loading() {




	// Adjustable variables
	var settings = {
		pointDensity: 8,
		connections: 2,
		sizeVariation: 0.3,
		velocity: 0.00003,
		maxMovement: 50,
		attractionRange: 400,
		attractionFactor: 0.06,
		imagePath: './cube_2.svg',
		imgWidth: 10,
		imgHeight: 9,
		lineColor: "rgba(0, 0, 0, 0.4)",
		particleDensity: 0.2,
		particleChance: 0.2,
		particleVelocity: 70,
		particleColor: "rgba(244, 59, 59, 0.8)",
		particleLength: 30,
		flashRadius: 20,
		flashOpacity: 0.6,
		flashDecay: 0.2,
		
	}

	var start = null,
		delta = 0,
		lasttimestamp = null;

	var points = [],
		particles = [];

	var mousePoint = {x: 0, y: 0};

	var img = new Image();
	img.src = settings.imagePath;
    

	var canvas = document.getElementById('canvas_2'),
		ctx = canvas.getContext('2d');

	// resize the canvas to fill browser window dynamically
	var resizeTimer;
	window.addEventListener('resize', resizeCanvas, false);
	function resizeCanvas() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			createPoints();
			drawFrame();
		}, 250);

	}
	resizeCanvas();

	createPoints();

	document.onmousemove = handleMouseMove;

	window.requestAnimationFrame(animate);

	function createPoints() {
		points = [];
		particles = [];
		for(var x = 0 - 100; x < canvas.width + 100; x = x + 1000/settings.pointDensity) {
			for(var y = 0 - 100; y < canvas.height + 100; y = y + 1000/settings.pointDensity) {
				var px = Math.floor(x + Math.random()*1000/settings.pointDensity);
				var py = Math.floor(y + Math.random()*1000/settings.pointDensity);
				var pSizeMod = Math.random()*settings.sizeVariation+1
				var pw = settings.imgWidth*pSizeMod;
				var ph = settings.imgHeight*pSizeMod;
				var pAnimOffset = Math.random()*2*Math.PI;
				var p = {x: px, originX: px, y: py, originY: py, w: pw, h: ph, sizeMod: pSizeMod, animOffset: pAnimOffset, attraction: 0, flashOpacity: 0};
				points.push(p);
			}
		}

		// for each point find the closest points. From https://tympanus.net/codrops/2014/09/23/animated-background-headers/
		for(var i = 0; i < points.length; i++) {
			var closest = [];
			var p1 = points[i];
			for(var j = 0; j < points.length; j++) {
				var p2 = points[j]
				if(!contains(p2.closest, p1) && p1 != p2) {
					var placed = false;
					for(var k = 0; k < settings.connections; k++) {
						if(!placed && closest[k] == undefined) {
							closest[k] = p2;
							placed = true;
						}
					}

					for(var k = 0; k < settings.connections; k++) {
						if(!placed && getDistance(p1, p2) < getDistance(p1, closest[k])) {
							closest[k] = p2;
							placed = true;
						}
					}
				}
			}
			p1.closest = closest;
		}
	}

	function animate(timestamp) {
		// Calculate frametime
		if (!start) {
			start = timestamp;
			lasttimestamp = timestamp;
		}
		var elapsed = timestamp - start,
			delta = (timestamp - lasttimestamp)/100;
		lasttimestamp = timestamp;

		// Move points around
		for (var i = 0; i < points.length; i++) {
			var point = points [i];

			var attractionOffset = {x: 0, y: 0};
			var distanceToMouse = getDistance({x: point.originX, y: point.originY}, mousePoint);
			if (distanceToMouse <= settings.attractionRange) {
				displacementFactor = (Math.cos(distanceToMouse / settings.attractionRange * Math.PI) + 1) / 2 * settings.attractionFactor;
				attractionOffset.x = displacementFactor * (mousePoint.x - point.x);
				attractionOffset.y = displacementFactor * (mousePoint.y - point.y);
			}

			point.x = point.originX + Math.sin(elapsed*settings.velocity+point.animOffset)*settings.maxMovement*point.sizeMod+attractionOffset.x;
			point.y = point.originY - Math.cos(elapsed*settings.velocity+point.animOffset)*settings.maxMovement*point.sizeMod+attractionOffset.y;

			point.flashOpacity = Math.max(0, point.flashOpacity - settings.flashDecay * delta);
		}

		// Move particles
		for (var i = 0; i < particles.length; i++) {
			var particle = particles[i];

			var origin = points[particle.origin];
			var target = origin.closest[particle.target];

			var distance = getDistance({x: origin.x, y: origin.y}, {x: target.x, y: target.y});
			var direction = {x: (target.x - origin.x) / distance, y: (target.y - origin.y) / distance};

			particle.traveled += settings.particleVelocity * delta;
			particle.direction = direction;

			particle.x = origin.x + direction.x * particle.traveled;
			particle.y = origin.y + direction.y * particle.traveled;

			if (!between(origin, {x: particle.x}, target)) {
				particles.splice(i, 1);
				i--;
			}

		}

		// Spawn new particles
		for (var i = 0; i < settings.particleDensity * points.length; i++) {
			if (Math.random() < settings.particleChance * delta) {
				var pOriginNum = Math.floor(Math.random()*points.length);
				var pOrigin = points[pOriginNum];
				var pTargetNum = Math.floor(Math.random()*pOrigin.closest.length);
				var px = pOrigin.x;
				var py = pOrigin.y;
				var p = {origin: pOriginNum, target: pTargetNum, x: px, y: py, traveled: 0, direction: {x: 0, y: 0}};
				particles.push(p);
				pOrigin.flashOpacity = settings.flashOpacity;
			}
		}

		drawFrame();

		window.requestAnimationFrame(animate);

	}

	function handleMouseMove(event) {
		mousePoint.x = event.pageX;
		mousePoint.y = event.pageY;
		// console.log(mousePoint.x, mousePoint.y);
	}

	function drawFrame() {
		ctx.clearRect(0,0,canvas.width,canvas.height);

		for (var i = 0; i < points.length; i++) {
			drawLines(points[i]);
		}

		for (var i = 0; i < particles.length; i++) {
			var particle = particles[i];
			ctx.moveTo(particle.x, particle.y);
			ctx.lineTo(particle.x - particle.direction.x * settings.particleLength, particle.y - particle.direction.y * settings.particleLength);
			ctx.strokeStyle = settings.particleColor;
			ctx.stroke();
		}

		for (var i = 0; i < points.length; i++) {
			var point = points [i];
			if (point.flashOpacity > 0) {
				ctx.beginPath();
				ctx.rect(point.x - settings.flashRadius, point.y - settings.flashRadius, settings.flashRadius * 2, settings.flashRadius * 2);
				var gradient = ctx.createRadialGradient(point.x, point.y, settings.flashRadius, point.x, point.y, 1);
				gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
				gradient.addColorStop(1, "rgba(255, 255, 255, " + point.flashOpacity + ")");
				ctx.fillStyle = gradient;
				ctx.fill();
			}
			ctx.drawImage(img, point.x-point.w/2, point.y-point.h/2, point.w, point.h);
		}
	}

	function drawLines(p) {
		for(var i in p.closest) {
			ctx.beginPath();
			ctx.moveTo(p.x, p.y);
			ctx.lineTo(p.closest[i].x, p.closest[i].y);
			ctx.strokeStyle = settings.lineColor;
			ctx.stroke();
		}
	}

	//Util
	function getDistance(p1, p2) {
		return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
	}

	function contains(a, obj) {
		if (a !== undefined) {
			for (var i = 0; i < a.length; i++) {
				if (a[i] === obj) {
					return true;
				}
			}
		}
		return false;
	}

	function between(p1, p2, t) {
		return (p1.x - p2.x) * (p2.x - t.x) > 0;
	}

}

/*********************************************************************************************************************************************************************/




