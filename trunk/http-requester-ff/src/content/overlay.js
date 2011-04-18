function showPoster() {
   var windowManager = Components.classes['@mozilla.org/appshell/window-mediator;1'].getService();
   var windowManagerInterface = windowManager.QueryInterface(Components.interfaces.nsIWindowMediator);
   var topWindow = windowManagerInterface.getMostRecentWindow("window:poster");
   if (topWindow) {
   		try { 
    		 topWindow.focus();
   		}
   		catch ( e ) {   			
   		}
   }
   else {
	   window.openDialog(
	      'chrome://poster/content/poster-window.xul','poster-'+(new Date()).getTime(),'chrome,centerscreen,resizable,dialog=no'
	   );
   	}
   
   
   
   
   
   
   
   
   
   
   
}
