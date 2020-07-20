angular.module('numerical-analysis')
    .config(function($stateProvider){
        $stateProvider.state('methods.interpolation.newton', {
            url : '/newton-interpolation',
            templateUrl : 'views/methods/interpolation/newton/newton.html',
            controller : 'NewtonInterpolationCtrl as newtonInterpolation'
        });
    });
