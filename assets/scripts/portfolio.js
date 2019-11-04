document.querySelector('#burger').addEventListener('click', function() {
	var menuItems = document.querySelectorAll('#navbar ul .nav-link');
	menuItems.forEach(menuItem => {
		menuItem.style.display = 
		menuItem.style.display == 'inline-block'? 'none': 'inline-block';
	});
});

setTimeout(function() {
	for(var i = 1; i < 3; i++) {
		setTimeout(function() {
			document.querySelector('#welcome-text').innerHTML += '|';
			document.querySelector('#welcome-text').style.display = 'block';
			setTimeout(function() {
				document.querySelector('#welcome-text').innerHTML = '';
				document.querySelector('#welcome-text').style.display = 'none';
			}, 600);
		}, 1000 * i);
	}
}, 3000);

function timelyTextDisplay() {
	document.querySelector('#welcome-text').style.display = 'block';
	var text = "My name is Fouad, I'm a web developer at";
	var i = 0;
	
	function recursiveAppend() {
		if(i >= text.length) {
			return;
		}
		if(text[i] === 't') {
			setTimeout(() => {
				document.querySelector('#welcome-text').innerHTML += ' <i class="fa fa-heart" style="font-size:48px;color:red"></i>';
			}, 2000);
		}
		document.querySelector('#welcome-text').innerHTML += text[i];
		i++;
		setTimeout(recursiveAppend, 200);
	}
	
	recursiveAppend();
	appendMiniHeart();
}

// // alternative timelyTextDisplay() solution 1
// function timelyTextDisplay() {
// 	var text = "My name is Fouad. I'm a Web Developer by";
// 	var e = 0;
// 	for(var i = 1; i <= text.length; i++) {
// 		setTimeout(function() {
// 			document.querySelector('#welcome-text').innerHTML += text[e];
// 			e++;
// 		}, i * 200);
// 	}
// }

// // alternative timelyTextDisplay() solution 2
// function timelyTextDisplay() {
// 	var ele = document.querySelector('#welcome-text');
// 	var typed = "";
// 	var j = 0;
// 	function recursiveAppend() {
// 		var message = "Hi my name is Lahcen.";
// 		setTimeout(function() {
// 			typed += message[j];
// 			ele.textContent = typed;
// 			j++;
// 			if(j < message.length) {
// 				recursiveAppend();
// 			}
// 		}, 200);
// 	}
// 	recursiveAppend();
// }

setTimeout(timelyTextDisplay, 6000);
setTimeout(function() {
	document.querySelector('#heart').style.display = 'block';
}, 14500);
