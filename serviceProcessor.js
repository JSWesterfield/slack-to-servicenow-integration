// Add this code within the ServiceNow's Script Funtion. Call is Slack Processor
(function process(g_request, g_response, g_processor) {

	gs.log("slack method string: "+g_request.getMethod());
	gs.log("slack query string: " + g_request.getQueryString());

	var urlParamList = g_request.getParameterNames();
	var paramMsg = ""; //we're going to log parameter log here
	while(urlParamList.hasMoreElements()){
		var param = urlParamList.nextElement();
		var value = g_request.getParameter(param);
		gs.log("slack Parameter: ["+param+"] has a value of: "+value+"\n");
	}

	var urlheaderList = g_request.getHeaderNames();
	var headerMsg = ""; //we're going to log Header log here
	while(urlheaderList.hasMoreElements()){
		var header = urlheaderList.nextElement();
		var headerValue = g_request.getHeader(header);
		gs.log("slack Header: ["+header+"] has a value of: "+headerValue+"\n");
	}
	
	// Add your code here
	g_response.setStatus(200);

})(g_request, g_response, g_processor);
