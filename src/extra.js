if (window.innerWidth > 780) {
/* Store the element in el */
let el = document.getElementById('background');

/* Check if the screen width is greater than 600 pixels */

  /* Add a listener for mousemove event */
  el.addEventListener('mousemove', handleMove);

  /* Add listener for mouseout event to reset the rotation */
  el.addEventListener('mouseout', function() {
    el.style.transition = 'transform 0.5s ease-in-out';
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
  });


/* Define function handleMove */
function handleMove(e) {
  /* Get position of mouse cursor with respect to the element */
  const xVal = e.layerX;
  const yVal = e.layerY;

  /* Calculate rotation values along the X and Y axes */
  const yRotation = 10 * ((xVal - el.clientWidth / 2) / el.clientWidth);
  const xRotation = -10 * ((yVal - el.clientHeight / 2) / el.clientHeight);

  /* Generate string for CSS transform property */
  const transformValue =
    'perspective(500px) scale(1.05) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';

  /* Apply the calculated transformation with a smooth transition */
  el.style.transition = 'transform 0.1s ease-out';
  el.style.transform = transformValue;
}

/* Add listener for mouseout event to reset the rotation */
el.addEventListener('mouseout', function() {
  el.style.transition = 'transform 0.5s ease-in-out';
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
});

// Preload background images for better experience when the background changes
function preloadImages() {
	const imageUrls = [
		'src/img/clear.gif',
		'src/img/clouds.webp',
		'src/img/drizzle.gif',
		'src/img/fog.webp',
		'src/img/mist.webp',
		'src/img/rainy.webp',
		'src/img/smoke.webp',
		'src/img/snow.webp',
		'src/img/thunderstorm.webp',
		'src/img/term.webp',
		'src/img/humidity.webp',
		'src/img/GitHub.ico',
		'src/img/wind.webp'
	];

	// Crear imágenes y precargarlas
	for (const imageUrl of imageUrls) {
		const img = new Image();
		img.src = imageUrl;
	}
}

window.addEventListener('load', preloadImages);

function addTooltipTransition(element, tooltip, arrow) {
	element.addEventListener("mouseover", () => {
		tooltip.classList.remove('tooltipOut'); arrow.classList.remove('tooltipOut');
	  tooltip.classList.add('tooltipTransition'); arrow.classList.add('tooltipTransition');
	  tooltip.classList.remove('tooltipOut'); arrow.classList.remove('tooltipOut');
	  tooltip.classList.add('tooltipTransition'); arrow.classList.add('tooltipTransition');
	});
  
	element.addEventListener("mouseout", () => {
		tooltip.classList.remove('tooltipTransition'); arrow.classList.remove('tooltipTransition');
	  tooltip.classList.add('tooltipOut'); arrow.classList.add('tooltipOut');
	});
  }
  
  addTooltipTransition(itemTemperature, tooltip1, arrow1);
  addTooltipTransition(itemHumidity, tooltip2, arrow2);
  addTooltipTransition(itemWind, tooltip3, arrow3);

}