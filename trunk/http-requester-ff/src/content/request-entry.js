var RequestEntry = {
	loadRequest: function(){
		var requestStr = window.arguments[0].request;
		if (requestStr != null && requestStr.length > 0) {
			document.getElementById("content").value = requestStr;
		}
	},
	pasteFromClipboard: function() { 
		var text = App.copyTextfromClipboard();
		document.getElementById("content").value = text;
	},
	doRequest: function(){
		window.arguments[0].updatedRequest = document.getElementById("content").value;
		window.close();
	}
	
}
   

