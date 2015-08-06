(function() {
	'use strict';

	angular
		.module('homepageFrontend')
		.controller('HeaderCtrl', HeaderCtrl);

		/** @ngInject */
		function HeaderCtrl($timeout, $window, $scope, $http) {



			$(window).scroll(function() {

				var width = window.innerWidth;
					if (!$('nav').hasClass('expanded')) {
						var currentScroll = $(this).scrollTop(), // gets current scroll position
						scrollDifference = Math.abs(currentScroll - previousScroll); // calculates how fast user is scrolling
						// if scrolled past menu
						if (currentScroll > menuOffset) {
							// if scrolled past detach point add class to fix menu
							if (currentScroll > detachPoint) {
								if (!$('nav').hasClass('detached'))
									$('nav').addClass('detached');
								}
						  	// if scrolling faster than hideShowOffset hide/show menu
						  	if (scrollDifference >= hideShowOffset) {
								if (currentScroll > previousScroll) {
									// scrolling down; hide menu
									if (!$('nav').hasClass('invisible'))
									$('nav').addClass('invisible');
								} else {
								// scrolling up; show menu
								if ($('nav').hasClass('invisible'))
									$('nav').removeClass('invisible');
										if (width < 1200){
											$('nav').css('width', '100vw');
											$('nav.detached').css('min-width', '0px');
						  			}
						  			else if (width < 1600){
										$('nav').css('width', '100%');
						  }
						  else {
							$('nav').css('width', '1600px');
							$('nav').css('left', '50%');
							$('nav').css('margin-left', '-800px');
						  }

							}
						  }
						} else {
						  // only remove “detached” class if user is at the top of document (menu jump fix)
						  if (currentScroll <= 0){
							$('nav').removeClass();
							$('nav').css('position', 'fixed');
						  }
						}
						// if user is at the bottom of document show menu
						if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
						  $('nav').removeClass('invisible');
						  if (width < 1200){
							$('nav').css('width', '100vw');
							$('nav.detached').css('min-width', '0px');
						  }
						  else if (width < 1600){
							$('nav').css('width', '100%');
						  }
						  else {
							$('nav').css('width', '1600px');
							$('nav').css('left', '50%');
							$('nav').css('margin-left', '-800px');
						  }
						}
						// replace previous scroll position with new one
						previousScroll = currentScroll;
					  }
					})
				}
})();