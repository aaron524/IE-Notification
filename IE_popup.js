
window.onload = function() {
	var elmnt = document.createElement('div');
	elmnt.className += 'blackout';
	elmnt.innerHTML = '<div id="ie_popup"> \
						<h1>Sorry, your browser is out of date&#8230;</h1> \
						<p> \
							Try using one of these modern browsers instead: \
						</p> \
						<ul class="browsers_list big"> \
							<li> \
								<a href="http://www.mozilla.org/" target="_blank" class="download_link firefox"><span class="caption">Firefox</span></a> \
							</li> \
							<li> \
								<a href="https://www.google.com/chrome/" target="_blank" class="download_link chrome"><span class="caption">Chrome</span></a> \
							</li> \
							<li> \
								<a href="http://www.opera.com/browser/" target="_blank" class="download_link opera"><span class="caption">Opera</span></a> \
							</li> \
							<li> \
								<a href="http://www.apple.com/safari/download/" target="_blank" class="download_link safari"><span class="caption">Safari</span></a> \
							</li> \
							<li> \
								<a href="http://windows.microsoft.com/ie9" target="_blank" class="download_link ie"><span class="caption">IE 9</span></a> \
							</li> \
						</ul> \
					</div> ';
	document.body.appendChild(elmnt);
};

