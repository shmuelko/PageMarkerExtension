$(function(){
	$('.save-btn').click(save);
	$('.load-btn').click(load);
	//alert(0);
	//debugger;
	console.log('Hello World');
});

var save = function() {
	
	chrome.tabs.executeScript({
		code: 'console.log(\'Hello\');' +
			//'$(\'.page-marker\').remove()'+
			'localStorage.setItem(window.location.href,window.pageYOffset);'+
			
			'var div = document.createElement(\"div\");'+
			'div.style.width = (window.innerWidth * 2/100) +\"px\";'+
			'div.style.height = (window.innerHeight * 2/100) +\"px\";'+
			'div.style.background = \"green\";'+	
			
			'div.style.position = \"fixed\";'+
			'div.style.marginLeft = (window.innerWidth - 20 )+\"px\";'+ 
			'div.style.top = (10 + (window.pageYOffset/ window.innerHeight * 100)) +\"px\";'+
			'div.className = \"page-marker\";'+ 
			
			'console.log(\'window.innerHeight: \'+window.innerHeight);' +
			'console.log(\'window.pageYOffset: \'+window.pageYOffset);' +
			'console.log(\'mark place: \'+window.pageYOffset / window.innerHeight * 100);' +

			'document.body.appendChild(div);'
				
	});
	
	
	
};
 
 var load = function() { 
	 chrome.tabs.executeScript({
		code: 'window.scroll(0, localStorage.getItem(window.location.href));' + 
				'console.log(\'Boo\');'
	});
	
	
};
