window.onload = function (e) {

	function addEvent(target, type, hendler) {
		if (target.addEventListener) {
			target.addEventListener(type, hendler, false)
		}
		else {
			target.attachEvent("on" + type, function (e) {
				return hendler.call(target, e);//вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.
			});
		}
	}

	function handler(e) {
		e = e || window.event;
		//console.log(e.clientX);//положение указателя мыши на оси X

		this.style.backgroundColor = "green";

		e.preventDefault();
	}

	function handler2(e) {
		e = e || window.event;
		this.style.backgroundColor = "yellow";

	}




	addEvent(document.getElementById('one'), 'contextmenu', handler);//событие срабатывания перед выводом контекстного меню
	//addEvent(document.getElementById('one'),'dblclick',handler);//событие двойного клика
	//addEvent(document.getElementById('one'),'mousemove',handler);//событие движения мыши

	//addEvent(document.getElementById('one'),'mousedown',handler);//событие нажатия кнопки мыши
	//addEvent(document.getElementById('one'),'mouseup',handler2);//событие отпуская кнопки мыши

	//addEvent(document.getElementById('one'),'mouseover',handler);//событие срабатывает, когда указатель мыши помещается на элементе
	//addEvent(document.getElementById('one'),'mouseout',handler2);//событие срабатывает, когда указатель мыши покидает элемент
	//}
	/*
	function getScroll(w) {
		w = w || window;
		
		if(w.pageXOffset != null) {//получение текущей прокрутки по оси X
			return {x:w.pageXOffset,y:w.pageYOffset}//получение текущей прокрутки по оси Y
		}
	}
	
	function drag (el,event) {
		var scroll = getScroll();
		
		var startX = event.clientX + scroll.x;
		var startY = event.clientY + scroll.y;
		
		var elX = el.offsetLeft;//Свойство содержит левое смещение элемента относительно offsetParent.
		var elY = el.offsetTop;//Свойство содержит верхнее смещение элемента относительно offsetParent.
		
		var deltaX = startX - elX;//
		var deltaY = startY - elY;//
		
		if(document.addEventListener) {
			document.addEventListener('mousemove',moveHandler,true);
			document.addEventListener('mouseup',upHandler,true);
		}
		
		if(event.stopPropagation) {
			event.stopPropagation();//отмена всплытия события
		}
		if(event.preventDefault) {
			event.preventDefault();//отмена выполнения действий по умолчанию
		}
		
		function moveHandler (e) {
			var scroll = getScroll();
			el.style.left = (e.clientX + scroll.x - deltaX) + 'px';
			el.style.top = (e.clientY + scroll.x - deltaY) + 'px';
			
			if(e.stopPropagation) {
				e.stopPropagation();
			}
		}
		function upHandler (e) {
			if (document.removeEventListener) { 
				document.removeEventListener("mouseup", upHandler, true);//удаление обработчиков событий
				document.removeEventListener("mousemove", moveHandler, true);//удаление обработчиков событий
			}
			
			if(e.stopPropagation) {
				e.stopPropagation();//отмена всплытия события
			}
		}
		
	}*/

}







