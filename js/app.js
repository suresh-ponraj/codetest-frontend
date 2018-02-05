var mainApp = angular.module("mainApp", []);

mainApp.controller('lotteryController', function($scope, $http) {

  $('.selectpicker').selectpicker({
    style: 'btn-default',
    size: 4
  });

  $scope.ticket = []

  $scope.submit = submit;

  function submit() {
    var type = $('#type').val();
    var key = $('#key').val();
    $http.get('http://localhost:3000/lottery?type=' + type + '&key=' + key)
    .then(function (response) {
      $scope.ticket = response.data;
    });
  }

});