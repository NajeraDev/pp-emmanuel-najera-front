import angular from 'angular';
import template from './login.tpl.html';

function LoginController($scope,$location,loginService){
    loginService.ClearCredentials();
    $scope.login = function () {
        console.log("Hizo click")
        $scope.dataLoading = true;
        loginService.Login($scope.username, $scope.password, function(response) {
            if(response.success) {
                window.alert("success")
                loginService.SetCredentials($scope.username, $scope.password);
                $location.path('/');
            } else {
                window.alert("success")
                $scope.error = response.message;
                $scope.dataLoading = false;
            }
        });
    };
}

LoginController.$inject=['$scope', '$rootScope', '$location', 'loginService'];

export default angular
  .module('login.view', [])
  .controller('LoginController', LoginController)
  .component('login', {
    template,
  })
  .name
