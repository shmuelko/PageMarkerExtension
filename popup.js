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
				'localStorage.scrollY = window.pageYOffset;'
	});
	
	
	
};
 
 var load = function() { 
	 chrome.tabs.executeScript({
		code: 'window.scroll(0, localStorage.scrollY);' +
				'console.log(\'Boo\');'
	});
	
	
};
