/**
* jQuery zdelete plugin v1.0
* 
* Copyright 2012, Muhammad Khalil (zarpio)
* https://www.facebook.com/buddyforever
*
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

/**
------------------
Demo or How to use
------------------
** HTML **
<ul>
	<li class="zelement"><a href="#">element one</a><a href="#" class="zremove">X</a></li>
	<li class="zelement"><a href="#">element two</a><a href="#" class="zremove">X</a></li>
	<li class="zelement"><a href="#">element three</a><a href="#" class="zremove">X</a></li>
</ul>

** jQuery **
$("ul").zdelete();
#OR 
#you can pass options if required
$("ul").zdelete({
	mode : 'slide',
	fadeSpeed : '1000'
});

** Note **
It is not recommended that your html code should be same like this just code your html as you want,
just remember that the html element where you click to fadeOut or slideUp that elements should have a class name 'zremove'
and html elements which are going to fadeOut or slideUp they should have a class name 'zelement'
*/

(function( $, window, document, undefined ){

	$.fn.zdelete = function(options){

		// default options
		var defaults = {
			mode		: 'fade',		// fade, slide
			fadeSpeed	: 500,			// speed for fadeOut
			slideSpeed	: 500			// speed for slideUp
		}

		var options = $.extend(defaults, options);

		var element = $(this).find('.zremove');
		
		element.on('click', function(){
			if(options.mode == 'fade') {
				$(this).parents('.zelement').fadeOut(options.fadeSpeed);
			}else if(options.mode == 'slide') {
				$(this).parents('.zelement').slideUp(options.slideSpeed);
			}
		});

		return this;
	}

})( jQuery, window, document );