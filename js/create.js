window.onload = function() {

	function setClearURL(str) {

		return str.replace(/[^\w\d]/gi, '').substring(0, 30);

	}

	chrome.tabs.getSelected(null, function(tab) {

		let url = new URL(tab.url);

		let chatURL = setClearURL(url.hostname + url.pathname);
		
		document.querySelector('#tlkIO').src = 'https://www.tlk.io/' + chatURL;

	});

  }