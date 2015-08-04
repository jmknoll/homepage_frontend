(function() {
	'use strict';

	angular
		.module('homepageFrontend')
		.controller('MainController', MainController);

		/** @ngInject */
		function MainController($timeout, $window, $scope, $http) {

		$scope.hideTitle = true;
		$scope.hideSubtext = true;
		$scope.hideTwitter = true;
		$scope.hideLinkedIn = true;
		$scope.hideGithub = true;

		$(window).load(function(){
			$timeout( function() { $scope.hideTitle = false }, 500 );
			$timeout( function() { $scope.hideSubtext = false }, 1500 );
			$timeout( function() { $scope.hideTwitter = false }, 3500 );
			$timeout( function() { $scope.hideLinkedIn = false }, 3500 );
			$timeout( function() { $scope.hideGithub = false }, 3500 );
		})

		$scope.showProcess = 0;

		$scope.setProcess = function (x, $event) {
			$scope.showProcess = x;

			//colorize icon on hover
			var targetSource = $($event.target).attr('src');
			var altTargetSource = targetSource.substring(0, targetSource.length - 4) + '_alt.png';
			($($event.target).attr('src', altTargetSource))
		}

		$scope.decolorizeIcon = function ($event) {
			var targetSource = $($event.target).attr('src');
			var altTargetSource = targetSource.substring(0, targetSource.length - 8) + '.png';
			($($event.target).attr('src', altTargetSource))
		}
	


		$scope.saveEmail = function() {
			var contactInfo = {
				'name': $scope.contact.name,
				'email': $scope.contact.email,
				'description': $scope.contact.description,
				'price': $scope.contact.price
			}

			alert('Thank you for getting in touch ' + contactInfo.name + '. I will be in touch shortly to discuss this project further. Please confirm that your information below is correct.'
			+ JSON.stringify(contactInfo));
		}

		$http.get('http://127.0.0.1:8888/site.json')
		.success( function (data, status){
			console.log(status);
			$scope.posts = data.projects.slice(0,3);
		}).error( function (data, status){
			console.log('error');
			console.log(status);
		});
		
		}
		

/*
	  angular.element(window).load(function() {
		  $('#landing-page').fullpage(
			{

			  //Scrolling
			  css3: true,
			  scrollingSpeed: 700,
			  autoScrolling: true,
			  fitToSection: true,
			  scrollBar: false,
			  easing: 'easeInOutCubic',
			  easingcss3: 'ease',
			  loopBottom: false,
			  loopTop: false,
			  loopHorizontal: true,
			  continuousVertical: false,
			  scrollOverflow: false,
			  touchSensitivity: 15,
			  normalScrollElementTouchThreshold: 5,

			  //Accessibility
			  keyboardScrolling: true,
			  animateAnchor: true,
			  recordHistory: true,

			  //Design
			  controlArrows: true,
			  verticalCentered: true,
			  resize : false,
			  //sectionsColor : ['#ccc', '#fff'],
			  //paddingTop: '3em',
			  //paddingBottom: '10px',
			  //fixedElements: '#header, .footer',
			  responsiveWidth: 0,
			  responsiveHeight: 0,

			  //Custom selectors
			  sectionSelector: '.section',
			  slideSelector: '.slide',
			});
	  });
*/

})();
