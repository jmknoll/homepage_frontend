(function() {
  'use strict';

  angular
    .module('homepageFrontend')
    .controller('MainController', MainController);

      /** @ngInject */
      function MainController($timeout, webDevTec, toastr, $window, $scope) {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1435475794607;
        vm.showToastr = showToastr;

        activate();

        function activate() {
          getWebDevTec();
          $timeout(function() {
            vm.classAnimation = 'rubberBand';
          }, 4000);
        }

        function showToastr() {
          toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
          vm.classAnimation = '';
        }

        function getWebDevTec() {
          vm.awesomeThings = webDevTec.getTec();

          angular.forEach(vm.awesomeThings, function(awesomeThing) {
            awesomeThing.rank = Math.random();
          });
        }

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
      }


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


     

})();
