var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http) {
    const api = "http://20.189.112.68:30003/api/product/";
    $http.get(api).then(function (response) {
        // $scope = response.data;
        $scope.products = response.data;
        console.log($scope.products)
    });
})