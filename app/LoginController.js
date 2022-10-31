var app = angular.module('myLogin', []);


app.controller('loginCtrl', function ($scope, $http) {
    const api = "http://20.189.112.68:30003/api/user/login";
    $http.get(api).then(function (response) {
        // $scope = response.data;
        $scope.products = response.data;
        console.log($scope.products)
    });
})
