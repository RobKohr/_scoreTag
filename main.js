$(document).ready(function(){
    var url = "http://www.google.com/search?q=site%3Aplus.google.com+%22$1%22&amp;tbs=qdr:y,sbd:1&"
    setInterval(function(){
	$('.vg, .zj').not('.scored').replaceText(/(^\_[a-zA-Z0-9\_\-]+|\ \_[a-zA-Z0-9\_\-]+)/gi, '<a href="'+url+'">$1</a>').addClass('scored');
    }, 2000);
});