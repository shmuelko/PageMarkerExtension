$(function(){
	$('.save-btn').click(save);
	$('.load-btn').click(load);
	//paint();
});

var paint = function() {
	chrome.tabs.executeScript({
		code:'var prev = document.getElementById(\'page-marker\');'+
			'if(prev != null){prev.remove();}'+ 
			
			'var div = document.createElement(\"div\");'+
			'div.style.width = (window.innerWidth * 2/100) +\"px\";'+ 
			'var pointerHeight = ((window.innerHeight / (document.body.scrollHeight / window.innerHeight)) - 9);'+
			'div.style.height = (pointerHeight >= 15.5 ? pointerHeight: 15.5) +\"px\";'+			
			'div.style.background = \"green\";'+	
			
			'div.style.position = \"fixed\";'+
			'div.style.marginLeft = (window.innerWidth - 18.3 )+\"px\";'+   
			'div.style.top = window.pageYOffset / window.innerHeight * pointerHeight + 21 +\"px\";'+
			'div.id = \"page-marker\";'+ 
			'document.body.appendChild(div);'
	});
};

var save = function() {
	
	chrome.tabs.executeScript({
		code:'localStorage.setItem(window.location.href,window.pageYOffset);'
				
	});
	paint();
	
	
	
};
 
 var load = function() { 
	 chrome.tabs.executeScript({
		code: 'window.scroll(0, localStorage.getItem(window.location.href));'
	});
	
	
};
