/**
 * Created by SalimM on 9/22/2017.
 */
(function(angular){
    'use strict';

    var app = angular.module('medhack.main', ['medhack'])

        .controller('mainCtrl', mainCtrl)

    function mainCtrl($scope) {
        console.log("inside ctrl");
        $scope.userEmail = "";
        $scope.goToPortal = goToPortal ;

        function goToPortal(email){
            if (email === "pharm@gmail.com"){
                window.location.href = "/Phamacy.html";
            }
            else if (email === "patient@gmail.com"){
                window.location.href = "/createPatientPrescription.html";
            }
            else if(email === "doctor@gmail.com"){
                window.location.href = "/createPatientPrescription.html";
            }
        }
    }

}(angular));