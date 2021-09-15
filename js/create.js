window.onload = function() {

	function hashCode(text) {
		var hash = 0;
		if (text.length == 0) return hash;
		for (i = 0; i < text.length; i++) {
			char = text.charCodeAt(i);
			hash = ((hash<<5)-hash)+char;
			hash = hash & hash;
		}
		return hash;
	}

	chrome.tabs.getSelected(null, function(tab) {

		let url = new URL(tab.url);

		let chatURL = hashCode('undefined objects' + url.hostname + url.pathname);
		
		document.querySelector('#tlkIO').src = 'https://www.tlk.io/' + 'r' + chatURL;

	});

  }