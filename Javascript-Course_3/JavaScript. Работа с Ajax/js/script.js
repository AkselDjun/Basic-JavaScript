
window.onload = function(e) {
	
	
	function addEvent(target,type,hendler) {
		if(target.addEventListener) {
			target.addEventListener(type,hendler,false)
		}
		else {
			target.attachEvent("on" + type,function (e) {
				return hendler.call(target,e);
			});
		}
	}
	
	var button = document.getElementById('myButton');
	addEvent(button,'click',handler);
	
	function handler (e) {
		e = e || window.event;
		
		var request = new XMLHttpRequest();
		
		request.open("POST",'server.php');
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.setRequestHeader("MyHead","someString");
		
		request.onreadystatechange = function() {
			
			if(request.readyState === 4 && request.status === 200) {
				document.getElementById('three').innerHTML = request.responseText;
			}
			
		}
		
		request.send("name=Ben&age=18");
		
		/// status  statusText
		/// getResponseHeader()
		
		//  responseText
		//   responseXml
		
		
		///readyState
		
		e.preventDefault();
		return false
	}
	
	
	
	
	
}

		



	

	