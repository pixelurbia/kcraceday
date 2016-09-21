/*
* printThis v1.3
* @desc Printing plug-in for jQuery
* @author Jason Day
* 
* Resources (based on) :
*              jPrintArea: http://plugins.jquery.com/project/jPrintArea
*              jqPrint: https://github.com/permanenttourist/jquery.jqprint
*              Ben Nadal: http://www.bennadel.com/blog/1591-Ask-Ben-Print-Part-Of-A-Web-Page-With-jQuery.htm
*
* Dual licensed under the MIT and GPL licenses:
*              http://www.opensource.org/licenses/mit-license.php
*              http://www.gnu.org/licenses/gpl.html
*
* (c) Jason Day 2013
*
* Usage:
*
*  $("#mySelector").printThis({
*      debug: false,              * show the iframe for debugging
*      importCSS: true,           * import page CSS
*      printContainer: true,      * grab outer container as well as the contents of the selector
*      loadCSS: "path/to/my.css", * path to additional css file
*      pageTitle: "",             * add title to print page
*      removeInline: false,       * remove all inline styles from print elements
*      printDelay: 333,           * variable print delay
*      header: null               * prefix to html
*  });
*
* Notes:
*  - the loadCSS will load additional css (with or without @media print) into the iframe, adjusting layout
*/(function(e){var t;e.fn.printThis=function(n){t=e.extend({},e.fn.printThis.defaults,n);var r=this instanceof jQuery?this:e(this),i="printThis-"+(new Date).getTime();if(window.location.hostname!==document.domain&&navigator.userAgent.match(/msie/i)){var s='javascript:document.write("<head><script>document.domain=\\"'+document.domain+'\\";</script></head><body></body>")',o=document.createElement("iframe");o.name="printIframe";o.id=i;o.className="MSIE";document.body.appendChild(o);o.src=s}else{var u=e("<iframe id='"+i+"' name='printIframe' />");u.appendTo("body")}var a=e("#"+i);t.debug||a.css({position:"absolute",width:"0px",height:"0px",left:"-600px",top:"-600px"});setTimeout(function(){var n=a.contents();t.importCSS&&e("link[rel=stylesheet]").each(function(){var t=e(this).attr("href");if(t){var r=e(this).attr("media")||"all";n.find("head").append("<link type='text/css' rel='stylesheet' href='"+t+"' media='"+r+"'>")}});t.pageTitle&&n.find("head").append("<title>"+t.pageTitle+"</title>");t.loadCSS&&n.find("head").append("<link type='text/css' rel='stylesheet' href='"+t.loadCSS+"'>");t.header&&n.find("body").append(t.header);t.printContainer?n.find("body").append(r.outer()):r.each(function(){n.find("body").append(e(this).html())});t.removeInline&&(e.isFunction(e.removeAttr)?n.find("body *").removeAttr("style"):n.find("body *").attr("style",""));setTimeout(function(){if(a.hasClass("MSIE")){window.frames.printIframe.focus();n.find("head").append("<script>  window.print(); </script>")}else{a[0].contentWindow.focus();a[0].contentWindow.print()}r.trigger("done");t.debug||setTimeout(function(){a.remove()},1e3)},t.printDelay)},333)};e.fn.printThis.defaults={debug:!1,importCSS:!0,printContainer:!0,loadCSS:"",pageTitle:"",removeInline:!1,printDelay:333,header:null};jQuery.fn.outer=function(){return e(e("<div></div>").html(this.clone())).html()}})(jQuery);