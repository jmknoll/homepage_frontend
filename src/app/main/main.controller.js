(function() {
  'use strict';

  angular
    .module('homepageFrontend')
    .controller('MainController', MainController);

      /** @ngInject */
      function MainController($timeout, webDevTec, toastr, $window, $scope) {

        $scope.hideSubtext = true;
        $scope.hideTwitter = true;
        $scope.hideLinkedIn = true;
        $scope.hideGithub = true;

        $scope.fadeInSubtext = function() {
          
          $scope.hideSubtext = false;
          $timeout( function() { $scope.hideTwitter = false }, 1500 );
          $timeout( function() { $scope.hideLinkedIn = false }, 2000 );
          $timeout( function() { $scope.hideGithub = false }, 2500 );

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
