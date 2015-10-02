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
			'localStorage.setItem(window.location.href,window.pageYOffset);'
				
	});
	
	
	
};
 
 var load = function() { 
	 chrome.tabs.executeScript({
		code: 'window.scroll(0, localStorage.getItem(window.location.href));' + 
				'console.log(\'Boo\');'
	});
	
	
};
