
function counter(){
			setInterval(start, 1);
			var a = 0;
			function start(){
				if(a == 750){		

			}else{
				a+=3;
				document.getElementById('count1').innerHTML = a;
			}
		}	

		setInterval(start2, 1);
		var b = 0;
			function start2(){
				if(b == 269){		

			}else{
				b++;
				document.getElementById('count2').innerHTML = b;
			}
		}	


		setInterval(start3, 1);
		var c = 0;
			function start3(){
				if(c == 437){		

			}else{
				c++;
				document.getElementById('count3').innerHTML = c;
			}
		}	


		setInterval(start4, 1);
		var d = 0;
			function start4(){
				if(d == 10000){		

			}else{
				d+=50;
				document.getElementById('count4').innerHTML = d;
			}
		}	
}