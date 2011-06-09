HttpRequester is a modified version of the excellent Poster add-on available for Mozilla Firefox.  
HttpRequester is distributed under the the BSD License: http://www.opensource.org/licenses/bsd-license.php

1.0.3: (06/05/2011):
1) Added a "Find..." function in the Content Response area and in the Raw Transaction view window.  Press the Find 
button or hit CTRL-f to search for text anywhere in the request/response.  CTRL-g will do a Find Next to locate the 
next instance of the text that was last searched for.

1.0.2: (06/02/2011):
1) Added a column in the transaction history to show Content Length.  The value used is the Content-Length response header 
if available, and the size of the response body otherwise

1.0.1: (05/20/2011):
1) Added a "View raw transaction" link in the Response area to quickly let you view the entire raw request and response.  
This is the same behavior as double-clicking a transaction in the transaction history list.
2) Cleaned up Content area (made selecting a File to upload a radio button control)
3) The response content now properly shows with a scrollbar if there are lots of response headers

1.0: (05/19/2011):
1) The transaction list control has been updated; each column is now resizable and re-orderable and can be hidden via the column picker.  
The ordering and width of each column are now persisted.  Additionally, if a value is too large for a column it will be truncated
and a tooltip will display the full value.
2) The headers and parameters list controls have been similarly updated.


0.5: (03/07/2011): 
1) Updated to work with Firefox 4  
2) Default to "http://" if no protocol is entered

0.4: (02/03/2011)
1) You can now save and load stored requests.   
To save a request, click on a request in the history list and click Save Request.  You can optionally give the request a name.
To load a request, click on Load Request - that will bring up a list of all saved requests.  You can select any request to load it into your history to view it, or you can click the Execute button to execute it immediately.
2) Added explicit Delete Request button to remove selected transaction from history list.  (You can also hit the Delete key)

0.3:  (01/19/2011)
1) History list now shows elapsed time for all requests
2) Double-clicking a row in the history will show you a raw text version of the request and response
3) You can now edit raw requests by clicking the Edit Raw Request button; this is useful for making quick tweaks to a previous request, such as adding or changing a header
4) Paste Request button.  You can now copy existing requests from the clipboard (such as a request captured from Live HTTP Headers) by clicking the
Paste Request button, and then executing the request. 

0.2: (08/01/2010)
1) Reuse HttpRequester window if already open
2) Use HttpRequester icon to identify HttpRequester window

0.1 adds many improvements (07/27/2010)
1) requests/responses transactions now take place in a single window.  A separate window is not opened for each response.
2) history of transactions is now recorded (and kept across sessions); can view past requests; re-execute them
3) HttpRequester opens in a proper window instead of a dialog; can be minimized, maximized
4) remembers recent URLs, header names, and content types (across sessions)
5) can copy a request/response to clipboard for pasting into bug report, etc
6) The UI has been minimialized and cleaned up a bit
7) Can hit <Esc> key to close window

Preferences:  via about:config
extensions.httprequester.maxhistory - maximum number of requests to keep
extensions.httprequester.url.maxhistory - maximum number of URLs to keep
extensions.httprequester.contenttype.maxhistory - maximum number of content types to keep
extensions.httprequester.header.maxhistory - maximum number of header names to keep

extensions.httprequester.history 
extensions.httprequester.url.history 
extensions.httprequester.contentType.history
extensions.httprequester.header.history

extensions.httprequester.showAdvancedOptions  - set this to true to cause some of the other buttons to appear  (Google login, Save/Store/Import default URL/content type, timeout slider)

If you have any questions/comments/suggestions, shoot me a note.
-Tom Mutdosch