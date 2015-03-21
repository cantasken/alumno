angular.module('Alumno', [])
    .controller('AlumnoController', ['$scope', function($scope) {
        $scope.alumnos =[
            {nombres : "Wilder", edad: "23", cuaderno:  "loro"},
            {nombres : "Juan", edad: "23", cuaderno:  "loro"},
            {nombres : "Mario", edad: "23", cuaderno:  "loro"},
            {nombres : "Roberto", edad: "23", cuaderno:  "loro"}
        ];
    }]);


/*function AlumnoController($scope){
 $scope.alumno = {
 nombres : "Wilder",
 edad: "23"
 }
 }*/
