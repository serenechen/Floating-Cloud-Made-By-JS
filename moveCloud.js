function move(obj,speedX,speedY) {   //pass the object and initial speed
		var left = obj.offsetLeft;
		var top = obj.offsetTop;	
		var maxL = document.documentElement.clientWidth-obj.offsetWidth-100;
		var minL = 10;
		var maxT = 150;
		var minT = 1;
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			var l = left+speedX;
			var t = top+speedY;
			if(l>=maxL||l<=100) {
				speedX*=-1;
			}
			if(t>=maxT||t<=100) {
				speedY*=-1;
			}
			left = l;
			top = t;
			obj.style.left = left+'px';
			obj.style.top = top+'px';
		},30);
	}