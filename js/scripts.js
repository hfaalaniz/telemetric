/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 
var myApp = angular.module('myApp',[]);
myApp.controller('MyCtrl', function ($scope) {
  $scope.someMessage = 'Hello World';
});
myApp.directive('myDialog', function ($templateRequest, $compile) {
	return {
  	restrict: 'A',
    scope: {
      message: '='
    },
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $templateRequest("dialog.html").then(function(html){
            BootstrapDialog.show({
              title: 'Say-hello dialog',
              message: $compile(html)(scope),
          });
         });
        
      })
    }
  }
});

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
