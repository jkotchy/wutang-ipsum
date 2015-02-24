
var soldier = document.querySelectorAll('.soldier');
var soldierSpan = document.getElementById('soldier-name');
var scroller = document.getElementById('soldier-scroll');
var content = document.getElementById('content');
var rightPanel = document.getElementById('right-panel');
var close = document.getElementById('close');
var paragraphLength = parseInt(document.getElementById('paragraphs').value, 10);


// On Soldier click, open side panel
for (var i = 0; i < soldier.length; i++) {
	soldier[i].onmousedown = function(){
			openRight(event)
		};
	
	function openRight(e) {	
		
		// Display Block Right Panel
		rightPanel.style.display = "block";
		
		// Add Active Class to Scroller
		
		scroller.className = 'active';
		
		// Add Clicked Div's ID to Input's ID
		var clicked = event.target || event.srcElement;
		var clickedId = clicked.id;
		rightPanel.className = clickedId;
		
		
		// Fade out other soldiers
		if (clicked.id == clickedId) {
			for (var i = 0; i < soldier.length; i++) {
			soldier[i].classList.remove('selected');
			clicked.classList.add('selected');
			}
		}
		
		
		// Change generate text label to soldiers name
		soldierSpan.innerHTML = clicked.dataset.content;
		
		// Get Value of paragraph input
		
		
		// Populate Content Div With 4 Starter Paragraphs
		if (clickedId == 'inspectahDeck') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = inspectahDeckLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (clickedId == 'ghostfaceKillah') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = ghostfaceKillahLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (clickedId == 'gza') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = gzaLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (clickedId == 'methodMan') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = methodManLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (clickedId == 'odb') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = odbLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (clickedId == 'raekwon') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = raekwonLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (clickedId == 'rza') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = rzaLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (clickedId == 'ugod') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = ugodLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}

	}

}

// On Up Arrow, Add Paragraphs
blaowUp.onmousedown = function() {
	blaowAddOne(event)
}

function blaowAddOne(e) {

	
    paragraphLength = isNaN(paragraphLength) ? 0 : paragraphLength;
	
	paragraphLength++;
	
	document.getElementById('paragraphs').value = paragraphLength;
		if (rightPanel.classList == 'inspectahDeck') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = inspectahDeckLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'ghostfaceKillah') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = ghostfaceKillahLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'gza') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = gzaLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'methodMan') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = methodManLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'odb') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = odbLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'raekwon') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = raekwonLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'rza') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = rzaLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'ugod') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = ugodLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}
}

// On Down Arrow, Subtract Paragraphs
blaowDown.onmousedown = function() {
	blaowSubtractOne(event)
}


function blaowSubtractOne(e) {
	

    paragraphLength = isNaN(paragraphLength) ? 0 : paragraphLength;
	
	paragraphLength--;
	
	document.getElementById('paragraphs').value = paragraphLength;
		if (rightPanel.classList == 'inspectahDeck') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = inspectahDeckLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'ghostfaceKillah') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = ghostfaceKillahLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'gza') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = gzaLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList== 'methodMan') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = methodManLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'odb') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = odbLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'raekwon') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = raekwonLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'rza') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = rzaLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}	
		if (rightPanel.classList == 'ugod') {
			for (var i = 0; i < paragraphLength; i++) {
				content.innerHTML = ugodLyrics.slice(0, paragraphLength).join('<br /> <br />');
			}
		}
}

// Close button, close text panel
close.onmousedown = function() {
	rightPanel.style.display = "none";
}









