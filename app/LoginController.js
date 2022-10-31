var app = angular.module('myLogin', []);


// app.controller('loginCtrl', function ($scope, $http) {
//     const api = "http://20.189.112.68:30003/api/user/login";
//     $http.get(api).then(function (response) {
//         // $scope = response.data;
//         $scope.products = response.data;
//         console.log($scope.products)
//     });
// })

app.controller('loginCtrl', function ($scope, $rootScope, $cookies) {
    $scope.login = function () {
        var index = true;
        $rootScope.students.forEach(st => {
            if (st.username == $scope.username) {
                if (st.password == $scope.password) {
                    localStorage.setItem("users", JSON.stringify(st));
                    Swal.fire({
                        icon: 'success',
                        title: 'Đăng nhập thành công!',
                        text: 'Quay lại trang chủ!',
                        showConfirmButton: false,
                        closeOnClickOutside: false,
                        allowOutsideClick: false,
                        timer: 1600
                    });
                    $rootScope.indexStudent = st.index;
                    $rootScope.student = st;
                    window.location.href = '#!ListTest'
                    index = false;
                    return;
                }
            }
        })
        if (index == true) {
            Swal.fire({
                icon: 'error',
                title: 'Đăng nhập thất bại',
                text: 'Nhập lại'
            })
        }
    }


})