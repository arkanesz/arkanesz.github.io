var im = window.document.getElementsByClassName('img');
var t = window.document.getElementById('title');
var fd = window.document.getElementById('framedisplay');

for(var i= 0;i<im.length;i++){	
	im[i].onmouseover = function () {
		t.innerHTML = this.title;
		fd.src = this.src;
	};
}

t.innerHTML = im[0].title;
fd.src = im[0].src;